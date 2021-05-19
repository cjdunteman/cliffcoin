// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    constructor() ERC20("Cliff Coin", "CLIFF") {
        console.log("Setting ", msg.sender, "as admin.");
        _mint(msg.sender, 1000000000);
    }
}