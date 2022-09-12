require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/3YvH7MOh_CF9GYhjurSL-pTI2PTVSsdj',
      accounts: ['243c69f43b6b7daa469b9c1fa9494b3083e40a37df30eeeca4501f5521fc95b1'],
    },
  },
};