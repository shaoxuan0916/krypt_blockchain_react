// https://eth-goerli.g.alchemy.com/v2/w4sx2ilIFHBGHszSbgubWFAnv7pzPjcM

require("@nomiclabs/hardhat-waffle")

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/w4sx2ilIFHBGHszSbgubWFAnv7pzPjcM",
      // accounts: [`${process.env.PRIVATE_KEY}`],
      accounts: [
        "336e2fae4c1eaed73316345c07004016e13013419a6e59d61e3ad858b8c7f8c3",
      ],
    },
  },
}
