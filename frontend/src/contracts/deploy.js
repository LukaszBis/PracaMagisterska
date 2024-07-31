// deploy.js
const Web3 = require('web3');
const { abi, bytecode } = require('./compile');

const web3 = new Web3('http://localhost:8545'); // Ganache

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  const result = await new web3.eth.Contract(abi)
    .deploy({ data: bytecode })
    .send({ from: accounts[0], gas: '1000000' });

  console.log('Contract deployed to', result.options.address);
};

deploy();
