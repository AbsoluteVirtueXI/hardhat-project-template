require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-solhint');
require('hardhat-docgen');

require('dotenv').config();
const INFURA_PROJECT_ID = process.env.INFURA_PROJECT_ID;
const DEPLOYER_PRIVATE_KEY = process.env.DEPLOYER_PRIVATE_KEY;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.5',
  networks: {
    mainnet: {
      url: `https://mainnet.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [`0x${DEPLOYER_PRIVATE_KEY}`],
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [`0x${DEPLOYER_PRIVATE_KEY}`],
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [`0x${DEPLOYER_PRIVATE_KEY}`],
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [`0x${DEPLOYER_PRIVATE_KEY}`],
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [`0x${DEPLOYER_PRIVATE_KEY}`],
    },
  },
  docgen: {
    path: './docs',
    clear: true,
    runOnCompile: true,
  },
};
