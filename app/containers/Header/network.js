
const Network = {
  'Offline'  : { rpc: 'offline', tx_explorer: null },
  'Huc Local': { rpc: 'http://127.0.0.1:8545', tx_explorer: null },
  //'Huc Test Net' : { rpc: 'https://go2.happyuc.org:1445/test/', tx_explorer: 'https://scan-test.happyuc.org/tx/' },
  'Huc Test Net' : { rpc: 'http://192.168.1.95:8545', tx_explorer: 'https://scan-test.happyuc.org/tx/' },
  'Huc Main Net' : { rpc: 'https://go2.happyuc.org:1445/main/', tx_explorer: 'https://scan.happyuc.org/tx/' },
};

module.exports = Network; 
