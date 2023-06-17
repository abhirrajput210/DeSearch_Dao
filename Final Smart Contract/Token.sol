// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Address.sol";

contract DeSearch is ERC20, ERC20Burnable, Ownable {
    using SafeMath for uint256;
    using Address for address;

    uint256 public tokenPrice;

    constructor(uint256 initialSupply, uint256 initialTokenPrice)
        ERC20("DeSearch", "DS")
    {
        require(initialSupply > 0, "Initial supply must be greater than zero");
        _mint(msg.sender, initialSupply * (10**18));
        tokenPrice = initialTokenPrice;
    }

    function mint(address to, uint256 amount) public onlyOwner {
        uint256 tokenAmount = amount * (10**18);
        _mint(to, tokenAmount);
    }

    function setTokenPrice(uint256 newTokenPrice) public onlyOwner {
        tokenPrice = newTokenPrice;
    }

    function withdrawTokens(uint256 amount) public onlyOwner {
        _burn(address(this), amount);
        _transfer(address(this), owner(), amount);
    }

    function buyTokens(uint256 tokensToBuy) public payable {
        require(
            tokensToBuy > 0,
            "Number of tokens to buy must be greater than zero"
        );

        uint256 ethAmount = tokensToBuy.mul(tokenPrice); //.mul(10**18);
        require(msg.value >= ethAmount, "Insufficient ether sent");

        uint256 tokenAmount = tokensToBuy * (10**18);
        require(
            tokenAmount <= balanceOf(owner()),
            "Insufficient token balance"
        );

        _transfer(owner(), msg.sender, tokenAmount);
    }

    function sellTokens(uint256 amount) public {
        require(amount > 0, "Amount must be greater than zero");

        uint256 ethAmount = amount.mul(tokenPrice).div(10**18);
        _burn(msg.sender, amount);
        payable(msg.sender).transfer(ethAmount);
    }

    function withdrawFunds(uint256 amount) public onlyOwner {
        require(
            address(this).balance >= amount,
            "Insufficient contract balance"
        );

        uint256 ethAmount = amount.mul(10**18);
        require(
            ethAmount <= address(this).balance,
            "Insufficient contract balance"
        );

        payable(owner()).transfer(ethAmount);
    }

    // SafeMath Library for addition and subtraction operations
    function _transfer(
        address from,
        address to,
        uint256 amount
    ) internal override {
        super._transfer(from, to, amount);
    }

    function _mint(address account, uint256 amount) internal override {
        super._mint(account, amount);
    }

    // Override ERC20 functions to disable approval and allowance
    function approve(address, uint256) public pure override returns (bool) {
        revert("Approval functionality disabled");
    }

    // function transferFrom(
    //     address,
    //     address,
    //     uint256
    // ) public pure override returns (bool) {
    //     revert("TransferFrom functionality disabled");
    // }

    function increaseAllowance(address, uint256)
        public
        pure
        override
        returns (bool)
    {
        revert("Approval functionality disabled");
    }

    function decreaseAllowance(address, uint256)
        public
        pure
        override
        returns (bool)
    {
        revert("Approval functionality disabled");
    }
}
