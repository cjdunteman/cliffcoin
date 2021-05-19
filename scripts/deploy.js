const { ethers } = require("hardhat");

async function main() {
    // Deploy the contract
    const Token = await ethers.getContractFactory("Token");
    console.log("Deploying token...");
    const token = await Token.deploy();
    await token.deployed();
    console.log("Token deployed to:", token.address);
}
  
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });