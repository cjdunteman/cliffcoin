/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const { task } = require('hardhat/config');

require("@openzeppelin/test-helpers");
// require("@openzeppelin/contracts")
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-web3");

// const { alchemyApiKey, mnemonic } = require('./secrets.json');

task("balance", "Prints an account's balance")
  .addParam("account", "Account address")
  .setAction(async (taskArgs) => {
    const account = web3.utils.toChecksumAddress(taskArgs.account);
    const balance = await web3.eth.getBalance(account);

    console.log(web3.utils.fromWei(balance, 'ether'), "ETH");
  });

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
    },
    // ropsten: {
    //   url: `https://eth-ropsten.alchemyapi.io/v2/${alchemyApiKey}`,
    //   accounts: { mnemonic: mnemonic }
    // },
  },
  solidity: "0.8.0",
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
};
