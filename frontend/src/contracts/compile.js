// compile.js
const path = require('path');
const fs = require('fs');
const solc = require('solc');

const contractPath = path.resolve(__dirname, 'ThesisTopics.sol');
const source = fs.readFileSync(contractPath, 'utf8');

const input = {
  language: 'Solidity',
  sources: {
    'ThesisTopics.sol': {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['abi', 'evm.bytecode'],
      },
    },
  },
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));
const contract = output.contracts['ThesisTopics.sol']['ThesisTopics'];

fs.writeFileSync(
    path.resolve(__dirname, 'build', 'ThesisTopics.json'),
    JSON.stringify(contract, null, 2)
  );