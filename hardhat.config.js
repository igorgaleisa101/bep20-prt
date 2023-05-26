require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

const { GOERLI_URL, BSC_TESTNET_URL, BSC_MAINNET_URL, PRIVATE_KEY, ETHER_SCAN_KEY, BSC_SCAN_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "bsctestnet",
  networks: {
    hardhat: {},
    goerli: { 
      url: GOERLI_URL,
      chainId: 5,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    bsctestnet: { 
      url: BSC_TESTNET_URL,
      chainId: 97,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    bscmainnet: { 
      url: BSC_MAINNET_URL,
      chainId: 56,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: `${BSC_SCAN_KEY}`, // Your Etherscan API key
  },
};
