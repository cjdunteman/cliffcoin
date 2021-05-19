import './App.css';

import { Contract, ethers } from 'ethers'

import Token from './artifacts/contracts/Token.sol/Token.json'

// MUST be updated upon REDEPLOYMENT
const tokenAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

function App() {

  // Web 3 provider
  const provider = new ethers.providers.Web3Provider(window.ethereum)

  if (window.ethereum == undefined) {
    console.log("No Eth wallet detected");
  }

  async function getBalance() {
    // Use request to submit RPC requests to Ethereum via MetaMask
    const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' })

    // Create instance of the smart contract that is deployed on the blockchain
    const contract = new ethers.Contract(tokenAddress, Token.abi, provider);
    
    // Call a function from the smart contract to get balance of the account
    const balance = await contract.balanceOf(account);
    console.log("Balance: ", balance.toString());
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getBalance}>Get Balance</button>
      </header>
    </div>
  );
}

export default App;
