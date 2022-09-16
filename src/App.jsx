import './App.css';
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import WalletConnectProvider from "@walletconnect/web3-provider";

const providerOptions = {
  /* See Provider Options Section */
  // walletconnect: {
  //   package: WalletConnectProvider, // required
  //   options: {
  //     infuraId: "INFURA_ID" // required
  //   }
  // },
  // coinbasewallet: {
  //   package: CoinbaseWalletSDK, // Required
  //   options: {
  //     appName: "My Awesome App", // Required
  //     infuraId: "INFURA_ID", // Required
  //     rpc: "", // Optional if `infuraId` is provided; otherwise it's required
  //     chainId: 1, // Optional. It defaults to 1 if not provided
  //     darkMode: false // Optional. Use dark theme, defaults to false
  //   }
  // },
  binancechainwallet: {
    package: true
  }
};

const web3Modal = new Web3Modal({
  network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions // required
});


async function connectwallet() { 
  const instance = await web3Modal.connect();
  
  const provider = new ethers.providers.Web3Provider(instance);
  const signer = provider.getSigner();
}

function App() {
  return (
    <div className="App">
      <button onClick={connectwallet}>connect wallet</button>
    </div>
  );
}

export default App;
