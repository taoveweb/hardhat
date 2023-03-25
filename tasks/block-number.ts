import { task } from "hardhat/config";

export default task(
  "block-number",
  "Prints the current block number"
).setAction(async (taskArs, hre: any) => {
  const blockNumber = await hre.ethers.provider.getBlockNumber();
  console.log("blockNumber", blockNumber);
});
