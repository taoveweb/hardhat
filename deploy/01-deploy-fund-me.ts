import { network } from "hardhat";
import { networkConfig } from "../helper-hardhat-config";
const address = "0x8A753747A1Fa494EC906CE90E9f37563A8AF630e";
module.exports = async ({ getNamedAccounts, deployments }: any) => {
  const { deploy, log } = deployments;

  const { deployer } = await getNamedAccounts();
  const chainId: number = network.config.chainId || 97;
  const ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"];
  console.log(ethUsdPriceFeedAddress, "ethUsdPriceFeedAddress");
  console.log(chainId, "chainId");
  const fundMe = await deploy("FundMe", {
    from: deployer,
    args: [ethUsdPriceFeedAddress], // put price feed address
    log: true,
  });
  fundMe.console.log(chainId);
};
