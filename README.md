# Cliff Coin

[![built-with openzeppelin](https://img.shields.io/badge/built%20with-OpenZeppelin-3677FF)](https://docs.openzeppelin.com/)

Ropsten testnet deployment here: [Etherscan](https://ropsten.etherscan.io/address/0x5b2175e4baeae7fc779e8b01818e3555ce442e90).

This an ERC-20 token I have created for learning purposes. It is not safe for production.

## Local Development

```bash
git clone git@github.com:cjdunteman/cliffcoin.git
cd cliffcoin/

# install packages
npm install

# compile contracts
npx hardhat compile

# start a local node
npx hardhat node

# deploy to local network
npx hardhat --network localhost scripts/deploy.js

# use console
npx hardhat console --network
```

## Testing

`npx hardhat test`