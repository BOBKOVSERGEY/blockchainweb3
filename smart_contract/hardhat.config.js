//https://eth-ropsten.alchemyapi.io/v2/wsEDHVtIJhpP-6LCfUbFQMtRELHezKL4

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/wsEDHVtIJhpP-6LCfUbFQMtRELHezKL4',
      accounts: ['59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d'],
    },
  },
};