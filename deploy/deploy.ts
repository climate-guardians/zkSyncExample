import { utils, Wallet, Provider } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import 'dotenv/config'

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
  console.log(`Running deploy script for the Greeter contract`);

  // Initialize the wallet.
  const wallet = new Wallet(String(process.env.PK));

  console.log("This is your address: ", wallet.address);
  const provider = new Provider("https://zksync2-testnet.zksync.dev");
  // Create deployer object and load the artifact of the contract we want to deploy.

  const connectedWallet = wallet.connect(provider);

   // Create deployer object and load the artifact of the contract we want to deploy.
   const deployer = new Deployer(hre, wallet);
   const heroArtifact = await deployer.loadArtifact("Hero");
   const landArtifact = await deployer.loadArtifact("Land");
   const plantsArtifact = await deployer.loadArtifact("Plants");
   const packArtifact = await deployer.loadArtifact("Pack");

   const packABI = (await deployer.loadArtifact("Pack")).abi;
   const heroABI = (await deployer.loadArtifact("Hero")).abi;
   const landABI = (await deployer.loadArtifact("Land")).abi;
   const plantsABI = (await deployer.loadArtifact("Plants")).abi;

// If you already have the contract up

//   const PackContract = new ethers.Contract( "0x7eF3B7Cb4118583E788AB3557702862b7A22D28d",packABI, connectedWallet);
//   const HeroContract = new ethers.Contract( "0xcc2B4C419bA70Aac48492322255E4bF58CEB5891",heroABI, connectedWallet);
//   const LandContract = new ethers.Contract( "0x7603125ea92b15742e57436A056C7201288efb36",landABI, connectedWallet);
//   const PlantsContract = new ethers.Contract( "0xe6966edab5987E18Fa798D49AF1D83A571CB9937",plantsABI, connectedWallet);

// Only for deploying

    // const HeroContract = await deployer.deploy(heroArtifact, []);
    // console.log("HeroContract deployed under: ", HeroContract.address);
    // const LandContract = await deployer.deploy(landArtifact, []);
    // console.log("LandContract deployed under: ", LandContract.address);
    // const PlantsContract = await deployer.deploy(plantsArtifact, []);
    // console.log("PlantsContract deployed under: ", PlantsContract.address);
    // const PackContract = await deployer.deploy(packArtifact, []);
    // console.log("PackContract deployed under: ", PackContract.address);


//   // Call the deployed contract.
    // const options = {value: ethers.utils.parseEther("0.01")}
    // await PackContract.mint(wallet.address, 1, 1, 0x0000, options );
    // const packBalance = await PackContract.balanceOf(wallet.address, 1)
    // console.log(wallet.address, " has ", packBalance, " Packs.");


    // await PackContract.openPack(wallet.address, 1, 1, HeroContract.address, LandContract.address, PlantsContract.address);
    // await PackContract.openPack(wallet.address, 1, 1, "0xcc2B4C419bA70Aac48492322255E4bF58CEB5891", "0x7603125ea92b15742e57436A056C7201288efb36", "0xe6966edab5987E18Fa798D49AF1D83A571CB9937", options);


//NOT WORKING
    const feesingas = await HeroContract.safeMint(wallet.address);
    // const heroBalance = await HeroContract.balanceOf(wallet.address);
    // console.log(wallet.address, " has ", heroBalance, " Hero NFTs.");
    // await LandContract.safeMint(wallet.address);
    // const landBalance = await LandContract.balanceOf(wallet.address)
    // console.log(wallet.address, " has ", landBalance, " Land NFTs.");
    // await PlantsContract.safeMint(wallet.address);
    // const plantsBalance = await PlantsContract.balanceOf(wallet.address)
    // console.log(wallet.address, " has ", plantsBalance, " Plants NFTs.");

}