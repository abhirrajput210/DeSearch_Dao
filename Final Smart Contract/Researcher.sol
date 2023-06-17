// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./DAO.sol";

contract Researcher {
    DataDAO public DAOContract;

    uint256 private constant maxCategory = 4;

    struct Campaign {
        address owner;
        string title;
        string description;
        uint256 target;
        uint256 category;
        string _abstract;
        string github_link;
        string references;
        uint256 deadline;
        uint256 amountCollected;
        string image;
        mapping(address => uint256) donations;
        address[] donators;
    }

    struct Paper {
        address author;
        string title;
        uint256 category;
        string coverImage;
        string _abstract;
        string description;
        string researchWorkFile;
        uint256 paid;
        string github_link;
        string references;
    }

    enum RequestStatus {
        NoRequest,
        Pending,
        Confirmed,
        Declined
    }

    mapping(uint256 => Campaign) private campaigns;
    mapping(uint256 => Paper) private freePapers;
    uint256 public freePaperCount;
    mapping(address => mapping(address => RequestStatus))
        private contributorRequests;

    mapping(uint256 => Paper) private paidPapers;
    uint256 public paidPaperCount;

    uint256 public numberOfCampaigns = 0;

    constructor(address DAOAddress) {
        DAOContract = DataDAO(DAOAddress);
    }

    modifier onlyMember() {
        require(
            DAOContract.isMember(msg.sender),
            "Only members can access this function"
        );
        _;
    }

    modifier campaignExists(uint256 _id) {
        require(_id < numberOfCampaigns, "Campaign does not exist.");
        _;
    }

    function submitPaidPaper(
        string memory title,
        uint256 category,
        string memory coverImage,
        string memory _abstract,
        string memory description,
        string memory researchWorkFile,
        uint256 paid,
        string memory github_link,
        string memory references
    ) external onlyMember {
        require(bytes(title).length > 0, "Title cannot be empty");
        require(category > 0 && category <= maxCategory, "Invalid category");
        require(bytes(coverImage).length > 0, "Cover image cannot be empty");
        require(bytes(_abstract).length > 0, "Abstract cannot be empty");
        require(bytes(description).length > 0, "Description cannot be empty");
        require(
            bytes(researchWorkFile).length > 0,
            "Research work file cannot be empty"
        );
        require(paid > 0 && paid <= 1000, "Paid status cannot be empty");
        require(bytes(github_link).length > 0, "GitHub link cannot be empty");
        require(bytes(references).length > 0, "References cannot be empty");

        uint256 paperId = paidPaperCount;
        Paper storage newPaper = paidPapers[paperId];
        newPaper.title = title;
        newPaper.category = category;
        newPaper.coverImage = coverImage;
        newPaper._abstract = _abstract;
        newPaper.description = description;
        newPaper.researchWorkFile = researchWorkFile;
        newPaper.paid = paid;
        newPaper.github_link = github_link;
        newPaper.references = references;
        newPaper.author = msg.sender;

        paidPaperCount++;
    }

    function getPaidPaper(uint256 paperId)
        external
        view
        returns (
            string memory title,
            uint256 category,
            string memory coverImage,
            string memory _abstract,
            string memory description,
            string memory researchWorkFile,
            uint256 paid,
            string memory github_link,
            string memory references,
            address author
        )
    {
        require(paperId < paidPaperCount, "Invalid paper ID");

        Paper memory paper = paidPapers[paperId];
        return (
            paper.title,
            paper.category,
            paper.coverImage,
            paper._abstract,
            paper.description,
            paper.researchWorkFile,
            paper.paid,
            paper.github_link,
            paper.references,
            paper.author
        );
    }

    function submitFreePaper(
        string memory title,
        uint256 category,
        string memory coverImage,
        string memory _abstract,
        string memory description,
        string memory researchWorkFile,
        string memory github_link,
        string memory references
    ) external onlyMember {
        require(bytes(title).length > 0, "Title cannot be empty");
        require(category > 0 && category <= maxCategory, "Invalid category");
        require(bytes(coverImage).length > 0, "Cover image cannot be empty");
        require(bytes(_abstract).length > 0, "Abstract cannot be empty");
        require(bytes(description).length > 0, "Description cannot be empty");
        require(
            bytes(researchWorkFile).length > 0,
            "Research work file cannot be empty"
        );
        require(bytes(github_link).length > 0, "GitHub link cannot be empty");
        require(bytes(references).length > 0, "References cannot be empty");

        uint256 paperId = freePaperCount;
        Paper storage newPaper = freePapers[paperId];
        newPaper.title = title;
        newPaper.category = category;
        newPaper.coverImage = coverImage;
        newPaper._abstract = _abstract;
        newPaper.description = description;
        newPaper.researchWorkFile = researchWorkFile;
        newPaper.github_link = github_link;
        newPaper.references = references;
        newPaper.author = msg.sender;

        freePaperCount++;
    }

    function getFreePaper(uint256 paperId)
        external
        view
        returns (
            string memory title,
            uint256 category,
            string memory coverImage,
            string memory _abstract,
            string memory description,
            string memory researchWorkFile,
            string memory github_link,
            string memory references,
            address author
        )
    {
        require(paperId < freePaperCount, "Invalid paper ID");

        Paper memory paper = freePapers[paperId];
        return (
            paper.title,
            paper.category,
            paper.coverImage,
            paper._abstract,
            paper.description,
            paper.researchWorkFile,
            paper.github_link,
            paper.references,
            paper.author
        );
    }

    function createCampaign(
        address _owner,
        string memory _title,
        uint256 _category,
        string memory __abstract,
        string memory _description,
        string memory _github_link,
        uint256 _target,
        string memory _references,
        uint256 _deadline,
        string memory _image
    ) public onlyMember returns (uint256) {
        require(
            _deadline > block.timestamp,
            "The deadline should be a date in the future."
        );

        require(_category <= 4, "This category does not exist");

        Campaign storage campaign = campaigns[numberOfCampaigns];

        campaign.owner = _owner;
        campaign.title = _title;
        campaign.description = _description;
        campaign.target = _target;
        campaign.deadline = _deadline;
        campaign.amountCollected = 0;
        campaign.image = _image;
        campaign.category = _category;
        campaign._abstract = __abstract;
        campaign.github_link = _github_link;
        campaign.references = _references;

        numberOfCampaigns++;

        return numberOfCampaigns - 1;
    }

    function donateToCampaign(uint256 _id) public payable campaignExists(_id) {
        uint256 amount = msg.value;

        Campaign storage campaign = campaigns[_id];

        campaign.donations[msg.sender] += amount;

        if (!isDonator(campaign, msg.sender)) {
            campaign.donators.push(msg.sender);
        }

        campaign.amountCollected += amount;

        (bool sent, ) = payable(campaign.owner).call{value: amount}("");
        require(sent, "Failed to send donation to campaign owner.");
    }

    function isDonator(Campaign storage _campaign, address _donator)
        internal
        view
        returns (bool)
    {
        for (uint256 i = 0; i < _campaign.donators.length; i++) {
            if (_campaign.donators[i] == _donator) {
                return true;
            }
        }
        return false;
    }

    function getCampaign(uint256 _id)
        public
        view
        campaignExists(_id)
        returns (
            address owner,
            string memory title,
            uint256 category,
            string memory _abstract,
            string memory description,
            string memory github_link,
            uint256 target,
            string memory references,
            uint256 deadline,
            uint256 amountCollected,
            string memory image
        )
    {
        Campaign storage campaign = campaigns[_id];
        return (
            campaign.owner,
            campaign.title,
            campaign.category,
            campaign._abstract,
            campaign.description,
            campaign.github_link,
            campaign.target,
            campaign.references,
            campaign.deadline,
            campaign.amountCollected,
            campaign.image
        );
    }

    function getCampaignDonations(uint256 _id)
        public
        view
        campaignExists(_id)
        returns (address[] memory, uint256[] memory)
    {
        Campaign storage campaign = campaigns[_id];
        address[] memory donators = new address[](campaign.donators.length);
        uint256[] memory donations = new uint256[](campaign.donators.length);

        for (uint256 i = 0; i < campaign.donators.length; i++) {
            address donator = campaign.donators[i];
            uint256 donationAmount = campaign.donations[donator];
            donators[i] = donator;
            donations[i] = donationAmount;
        }

        return (donators, donations);
    }

    function addContributorRequest(address author, uint256 category) public {
        require(author != address(0), "Invalid researcher address");
        require(category > 0 && category <= maxCategory, "Invalid category");

        contributorRequests[author][msg.sender] = RequestStatus.Pending;
    }

    function respondToContributorRequest(
        address contributorAddress,
        RequestStatus status
    ) public onlyMember {
        require(
            contributorRequests[msg.sender][contributorAddress] ==
                RequestStatus.Pending,
            "No pending request from the contributor"
        );

        contributorRequests[msg.sender][contributorAddress] = status;
    }

    function getContributorRequestStatus(
        address author,
        address contributorAddress
    ) public view returns (RequestStatus) {
        return contributorRequests[author][contributorAddress];
    }
}
