const { ethers } = require("hardhat");

async function main() {
  const accounts = await ethers.provider.listAccounts();
  console.log(accounts);

  const address = "";
  const Token = await ethers.getContractFactory("CliffCoin");
  const token = await Token.attach(address);
  value = await token.balanceOf(msg.sender);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });