// https://docs.openzeppelin.com/learn/deploying-and-interacting
const { ethers } = require("hardhat");

async function main() {
    // Deploy the contract
    const Token = await ethers.getContractFactory("CliffCoin");
    console.log("Deploying token...");
    const token = await Token.deploy();
    await token.deployed();
    console.log("CliffCoin deployed to:", token.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });