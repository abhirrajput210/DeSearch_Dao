// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Address.sol";

contract DataDAO is Ownable {
    using SafeMath for uint256;
    using Address for address;

    IERC20 public tokenContract;

    struct Member {
        uint256 tokenBalance;
        bool isMember;
    }

    enum ProjectCategory {
        CategoryA,
        CategoryB,
        CategoryC,
        CategoryD
    }

    struct ResearchProject {
        address researcher;
        string title;
        ProjectCategory category;
        string coverImage;
        string _abstract;
        string description;
        string researchWorkFile;
        string githubLink;
        string references;
        uint256 totalVotes;
        mapping(address => uint256) votes;
        uint256 deadline;
    }

    mapping(address => Member) public members;
    mapping(uint256 => ResearchProject) public researchProjects;
    uint256 public numberOfProjects;
    uint256 public daoBalance;

    modifier onlyMember() {
        require(
            members[msg.sender].isMember,
            "Only members can access this function"
        );
        _;
    }

    event MemberAdded(address indexed member, uint256 tokenAmount);
    event MemberRemoved(address indexed member);
    event ResearchProjectCreated(uint256 indexed projectId, address researcher);
    event VoteCast(
        uint256 indexed projectId,
        address indexed voter,
        uint256 voteCount
    );
    event FundDistributed(
        uint256 indexed projectId,
        address indexed recipient,
        uint256 fundAmount
    );

    constructor(address tokenAddress) {
        tokenContract = IERC20(tokenAddress);
    }

    function addMember(uint256 amount) external {
        require(amount >= 50, "Amount must be greater than 50");
        require(
            tokenContract.balanceOf(msg.sender) >= amount,
            "Insufficient token balance"
        );

        tokenContract.transferFrom(msg.sender, address(this), amount);
        members[msg.sender].tokenBalance += amount;
        members[msg.sender].isMember = true;
    }

    function removeMember(address memberAddress) public onlyOwner {
        require(members[memberAddress].isMember, "Address is not a member");

        uint256 memberBalance = members[memberAddress].tokenBalance;
        tokenContract.transfer(memberAddress, memberBalance);
        members[memberAddress].tokenBalance = 0;
        members[memberAddress].isMember = false;
    }

    function isMember(address account) public view returns (bool) {
        return members[account].isMember;
    }

    function fundDAO() public payable {
        require(msg.value > 0, "Funding amount must be greater than 0");
        daoBalance = daoBalance.add(msg.value);
    }

    function withdrawFund(uint256 amount) public onlyOwner {
        require(amount <= daoBalance, "Insufficient DAO balance");

        daoBalance -= amount;
        payable(owner()).transfer(amount);
    }

    function createResearchProject(
        address researcher,
        string memory title,
        ProjectCategory category,
        string memory coverImage,
        string memory _abstract,
        string memory description,
        string memory researchWorkFile,
        string memory githubLink,
        string memory references,
        uint256 duration
    ) public onlyOwner returns (uint256) {
        require(researcher != address(0), "Invalid researcher address");
        require(bytes(title).length > 0, "Invalid project title");
        require(duration > 0, "Invalid project duration");

        ResearchProject storage project = researchProjects[numberOfProjects];
        project.researcher = researcher;
        project.title = title;
        project.category = category;
        project.coverImage = coverImage;
        project._abstract = _abstract;
        project.description = description;
        project.researchWorkFile = researchWorkFile;
        project.githubLink = githubLink;
        project.references = references;
        project.deadline = block.timestamp.add(duration);

        numberOfProjects++;

        emit ResearchProjectCreated(numberOfProjects - 1, researcher);

        return numberOfProjects - 1;
    }

    function voteForProject(uint256 projectId, uint256 voteCount)
        public
        onlyMember
    {
        require(projectId < numberOfProjects, "Invalid project ID");
        require(voteCount > 0 && voteCount <= 4, "Invalid vote count");

        ResearchProject storage project = researchProjects[projectId];

        uint256 voteAmount = calculateVoteAmount(
            project.totalVotes.add(voteCount)
        );
        require(
            tokenContract.balanceOf(msg.sender) >= voteAmount,
            "Insufficient token balance for voting"
        );

        project.totalVotes = project.totalVotes.add(voteCount);
        project.votes[msg.sender] = project.votes[msg.sender].add(voteCount);

        tokenContract.transferFrom(msg.sender, address(this), voteAmount);

        emit VoteCast(projectId, msg.sender, voteCount);
    }

    function calculateVoteAmount(uint256 voteCount)
        internal
        pure
        returns (uint256)
    {
        if (voteCount == 1) {
            return 10; // 10 DeSearch Tokens for the first vote
        } else if (voteCount == 2) {
            return 50; // 50 DeSearch Tokens for the second vote
        } else if (voteCount == 3) {
            return 100; // 100 DeSearch Tokens for the third vote
        } else if (voteCount == 4) {
            return 250; // 250 DeSearch Tokens for the fourth vote
        } else {
            return 0; // No additional tokens required for more than 4 votes
        }
    }

    function fundToWinner(uint256 projectId) public onlyOwner {
        require(projectId < numberOfProjects, "Invalid project ID");

        ResearchProject storage project = researchProjects[projectId];
        require(project.totalVotes > 0, "Project has no votes");

        address winner = address(0);
        uint256 highestVotes = 0;

        for (uint256 i = 0; i < numberOfProjects; i++) {
            if (researchProjects[i].totalVotes > highestVotes) {
                highestVotes = researchProjects[i].totalVotes;
                winner = researchProjects[i].researcher;
            }
        }

        require(winner != address(0), "No winner found");

        // Transfer funds to the winner's address
        uint256 fundAmount = calculateFundAmount(project.totalVotes);
        tokenContract.transfer(winner, fundAmount);
    }

    function calculateFundAmount(uint256 voteCount)
        internal
        pure
        returns (uint256)
    {
        if (voteCount == 1) {
            return 100; // Fund amount for the first vote
        } else if (voteCount == 2) {
            return 200; // Fund amount for the second vote
        } else if (voteCount == 3) {
            return 300; // Fund amount for the third vote
        } else if (voteCount == 4) {
            return 400; // Fund amount for the fourth vote
        } else {
            return 0; // No fund for more than 4 votes
        }
    }
}
