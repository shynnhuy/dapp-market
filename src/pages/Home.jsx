import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";

import Config from "../config.json";

import NFT from "../contracts/NFT.json";
import Market from "../contracts/Market.json";

const Home = () => {
  const [nfts, setNfts] = useState([]);
  const [loadingState, setLoadingState] = useState("not-loaded");

  useEffect(() => {
    loadNFTs();
  }, []);

  const loadNFTs = async () => {
    const provider = new ethers.providers.JsonRpcProvider();
    const tokenContract = new ethers.Contract(
      Config.nftAddress,
      NFT.abi,
      provider
    );
    const marketContract = new ethers.Contract(
      Config.marketAddress,
      Market.abi,
      provider
    );
    const data = await marketContract.getMarketItems();

    console.log(data);
  };

  return <div>Home Page</div>;
};

export default Home;
