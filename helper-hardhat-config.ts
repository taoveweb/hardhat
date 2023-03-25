interface NetWorkconfig {
  [key: number]: { name: string; ethUsdPriceFeed: string };
}
const networkConfig: NetWorkconfig = {
  31337: {
    name: "localhost",
    ethUsdPriceFeed: "0x694AA1769357215DE4FAC081bf1f309aDC325306",
  },
  // Price Feed Address, values can be obtained at https://docs.chain.link/data-feeds/price-feeds/addresses
  11155111: {
    name: "sepolia",
    ethUsdPriceFeed: "0x694AA1769357215DE4FAC081bf1f309aDC325306",
  },
  97: {
    name: "bsct",
    ethUsdPriceFeed: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
  },
};

const developmentChains = ["hardhat", "localhost", "bsct"];

export { networkConfig, developmentChains };
