import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";
import "./tasks/block-number";
require("dotenv").config();
const BSCSCAN_API_KEY = process.env.BSCSCAN_API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
const COINMARKETCA_API_KEY = process.env.COINMARKETCA_API_KEY;
const config = {
  defaultNetwork: "hardhat",
  networks: {
    Goerili: {
      url: process.env.RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 97,
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      //accounts:  hardhad has include in
      chainId: 31337,
    },
    etherscan: {
      url: process.env.RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 97,
    },
  },
  //etherscan.io
  //https://bscscan.com/myapikey
  etherscan: {
    apiKey: BSCSCAN_API_KEY,
  },
  gasReporter: {
    enabled: true,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: COINMARKETCA_API_KEY,
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
    user: {
      default: 1,
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.18",
      },
    ],
  },
};

export default config;
