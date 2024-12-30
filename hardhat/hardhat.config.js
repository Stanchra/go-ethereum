require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28", // You can adjust the version as necessary
  networks: {
    devnet: {
      url: "http://localhost:8545",
    }
  }
};
