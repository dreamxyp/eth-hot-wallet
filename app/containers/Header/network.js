
const Network = {
  Offline: { rpc: 'offline', tx_explorer: null },
  'Local RPC': { rpc: 'http://127.0.0.1:8545', tx_explorer: null },
  'Ropsten Testnet': { rpc: 'https://ropsten.infura.io/GjiCzFxpQAUkPtDUpKEP', tx_explorer: 'https://ropsten.hucscan.io/tx/' },
  'Main Net': { rpc: 'https://mainnet.infura.io/GjiCzFxpQAUkPtDUpKEP', tx_explorer: 'https://hucscan.io/tx/' },
};

module.exports = Network;
