// SPDX-License-Identifier: MIT
// import "./Token.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";

// contract DataDAO is Ownable {
//     DeSearch public tokenContract;

//     struct Member {
//         uint256 tokenBalance;
//         bool isMember;
//     }

//     struct ResearchProject {
//         address researcher;
//         string title;
//         uint256 category;
//         string coverImage;
//         string _abstract;
//         string description;
//         string researchWorkFile;
//         string github_link;
//         string references;
//         uint256 totalVotes;
//         mapping(address => uint256) votes;
//         uint256 deadline;
//     }

//     mapping(address => Member) public members;
//     mapping(uint256 => ResearchProject) public researchProjects;
//     uint256 public numberOfProjects;
//     uint256 public daoBalance;

//     modifier onlyMember() {
//         require(
//             members[msg.sender].isMember,
//             "Only members can access this function"
//         );
//         _;
//     }

//     constructor(address tokenAddress) {
//         tokenContract = DeSearch(tokenAddress);
//     }

//     function addMember(uint256 amount) external {
//         require(amount > 0, "Amount must be greater than 0");
//         require(
//             tokenContract.balanceOf(msg.sender) >= amount,
//             "Insufficient token balance"
//         );

//         tokenContract.transferFrom(msg.sender, address(this), amount);
//         members[msg.sender].tokenBalance += amount;
//         members[msg.sender].isMember = true;
//     }

//     function removeMember(address memberAddress) public onlyOwner {
//         require(members[memberAddress].isMember, "Address is not a member");

//         uint256 memberBalance = members[memberAddress].tokenBalance;
//         tokenContract.transfer(memberAddress, memberBalance);
//         members[memberAddress].tokenBalance = 0;
//         members[memberAddress].isMember = false;
//     }

//     function isMember(address account) public view returns (bool) {
//         return members[account].isMember;
//     }

//     function fundDAO() public payable {
//         require(msg.value > 0, "Funding amount must be greater than 0");
//         daoBalance += msg.value;
//     }

//     function withdrawFund(uint256 amount) public onlyOwner {
//         require(amount <= daoBalance, "Insufficient DAO balance");

//         daoBalance -= amount;
//         payable(owner()).transfer(amount);
//     }

//     function createResearchProject(
//         address _researcher,
//         string memory title,
//         uint256 category,
//         string memory coverImage,
//         string memory _abstract,
//         string memory description,
//         string memory researchWorkFile,
//         string memory github_link,
//         string memory references
//     )
//         public
//         //uint256 deadline
//         onlyOwner
//         returns (uint256)
//     {
//         require(msg.sender == owner(), "Only DAO owner can create projects");

//         ResearchProject storage project = researchProjects[numberOfProjects];
//         project.researcher = _researcher;
//         project.title = title;
//         project.category = category;
//         project.coverImage = coverImage;
//         project._abstract = _abstract;
//         project.description = description;
//         project.researchWorkFile = researchWorkFile;
//         project.github_link = github_link;
//         project.references = references;
//         project.deadline = block.timestamp + (90 days); // Set the deadline based on the provided duration

//         numberOfProjects++;

//         return numberOfProjects - 1;
//     }

//     function voteForProject(uint256 projectId, uint256 voteCount)
//         public
//         onlyMember
//     {
//         require(projectId < numberOfProjects, "Invalid project ID");
//         require(voteCount > 0 && voteCount <= 4, "Invalid vote count");

//         ResearchProject storage project = researchProjects[projectId];

//         uint256 voteAmount = calculateVoteAmount(
//             project.totalVotes + voteCount
//         );
//         require(
//             tokenContract.balanceOf(msg.sender) >= voteAmount,
//             "Insufficient token balance for voting"
//         );

//         project.totalVotes += voteCount;
//         project.votes[msg.sender] += voteCount;

//         tokenContract.transferFrom(msg.sender, address(this), voteAmount);
//     }

//     function calculateVoteAmount(uint256 voteCount)
//         internal
//         pure
//         returns (uint256)
//     {
//         if (voteCount == 1) {
//             return 10; // 10 DeSearch Tokens for the first vote
//         } else if (voteCount == 2) {
//             return 50; // 50 DeSearch Tokens for the second vote
//         } else if (voteCount == 3) {
//             return 100; // 100 DeSearch Tokens for the third vote
//         } else if (voteCount == 4) {
//             return 250; // 250 DeSearch Tokens for the fourth vote
//         } else {
//             return 0; // No additional tokens required for more than 4 votes
//         }
//     }

//     function fundToWinner(uint256 projectId) public onlyOwner {
//         require(projectId < numberOfProjects, "Invalid project ID");

//         ResearchProject storage project = researchProjects[projectId];
//         require(project.totalVotes > 0, "Project has no votes");

//         address winner = address(0);
//         uint256 highestVotes = 0;

//         for (uint256 i = 0; i < numberOfProjects; i++) {
//             if (researchProjects[i].totalVotes > highestVotes) {
//                 highestVotes = researchProjects[i].totalVotes;
//                 winner = researchProjects[i].researcher;
//             }
//         }

//         require(winner != address(0), "No winner found");

//         // Transfer funds to the winner's address
//         uint256 fundAmount = calculateFundAmount(project.totalVotes);
//         tokenContract.transfer(winner, fundAmount);
//     }

//     function calculateFundAmount(uint256 voteCount)
//         internal
//         pure
//         returns (uint256)
//     {
//         // Define the fund amount based on vote count
//         if (voteCount == 1) {
//             return 100; // Fund amount for the first vote
//         } else if (voteCount == 2) {
//             return 200; // Fund amount for the second vote
//         } else if (voteCount == 3) {
//             return 300; // Fund amount for the third vote
//         } else if (voteCount == 4) {
//             return 400; // Fund amount for the fourth vote
//         } else {
//             return 0; // No fund for more than 4 votes
//         }
//     }
// }


// //Test Token



// pragma solidity ^0.8.9;

// import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
// import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";
// import "@openzeppelin/contracts/utils/math/SafeMath.sol";

// contract DeSearch is ERC20, ERC20Burnable, Ownable {
//     using SafeMath for uint256;

//     uint256 public tokenPrice;

//     constructor(uint256 initialSupply, uint256 initialTokenPrice)
//         ERC20("DeSearch", "DS")
//     {
//         require(initialSupply > 0, "Initial supply must be greater than zero");
//         _mint(msg.sender, initialSupply);
//         tokenPrice = initialTokenPrice.div(10**18);
//     }

//     function mint(address to, uint256 amount) public onlyOwner {
//         _mint(to, amount);
//     }

//     function setTokenPrice(uint256 newTokenPrice) public onlyOwner {
//         tokenPrice = newTokenPrice;
//     }

//     function withdrawTokens(uint256 amount) public onlyOwner {
//         require(
//             amount <= balanceOf(address(this)),
//             "Insufficient contract balance"
//         );
//         _transfer(address(this), owner(), amount);
//     }

//     function tokenTransfer(address to, uint256 amount) public onlyOwner {
//         _transfer(owner(), to, amount);
//     }

//     function buyTokens() public payable {
//         require(msg.value > 0, "Amount must be greater than zero");

//         uint256 tokenAmount = msg.value.mul(10**18).div(tokenPrice);
//         _transfer(owner(), msg.sender, tokenAmount);
//     }

//     function sellTokens(uint256 amount) public {
//         require(amount > 0, "Amount must be greater than zero");

//         uint256 ethAmount = amount.mul(tokenPrice).div(10**18);
//         _transfer(msg.sender, owner(), amount);
//         payable(msg.sender).transfer(ethAmount);
//     }

//     // SafeMath Library for addition and subtraction operations
//     function _transfer(
//         address from,
//         address to,
//         uint256 amount
//     ) internal override {
//         super._transfer(from, to, amount);
//     }

//     function _mint(address account, uint256 amount) internal override {
//         super._mint(account, amount);
//     }
// }
