/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");

const { alchemyApiKey, mnemonic } = require('./secrets.json');

module.exports = {
  defaultNetwork: "ropsten",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${alchemyApiKey}`,
      accounts: {mnemonic: mnemonic}
    },
  },
  solidity: "0.8.0",
};
