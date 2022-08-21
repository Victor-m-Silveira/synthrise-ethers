//Yeah, I know, that's my private key, but I don't use this wallet, so don't worry, everything's fine

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.16',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/9PMvN-Za7o8KTJ7LqNWyxJvkTEJG0HSJ',
      accounts: [
        'bac4dc515c2f8dbeeadf687e924599af2a32b01cca9225d3b16215f595b9c350',
      ],
    },
  },
}
