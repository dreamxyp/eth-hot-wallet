export const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';
export const DAEMON = '@@saga-injector/daemon';
export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';

/* Auto generated password lenght */
export const generatedPasswordLength = 12;

/* Default HD path string for key generation from seed */
export const hdPathString = `m/44'/60'/0'/0`; // eslint-disable-line

// time in ms for check balancess polling
export const timeBetweenCheckbalances = 180 * 1000;

/* Max gas for send transaction (not gas price) */
export const maxGasForHucSend = 25000;
/* Max gas for token send transaction (not gas price) */
export const maxGasForTokenSend = 60000;


/* Huc unit constants will be saved as strings to prevent accidental manipulation
    usage: convert amount to wei
    const sendAmount = new BigNumber(amount).times(Huc);
*/
export const Huc = (1.0e18).toString();
export const Gwei = (1.0e9).toString();

/* offline mode is special case of error */
export const offlineModeString = 'Offline';
/* Default network to connect after wallet creation (see network.js) */
// export const defaultNetwork = 'Huc Test Net';
export const defaultNetwork  = 'Huc Local';

/* keystore will be saved to local storage under this key */
export const localStorageKey = 'ks';

// addresses:
export const website = 'https://go.happyuc.org:1445/';
export const github  = 'https://github.com/happyucjs/happyucjs-wallet-hot';

// APIs:
// export const checkFaucetAddress = 'http://localhost:3000/status';
// export const askFaucetAddress   = 'http://localhost:3000/ask';
export const checkFaucetAddress = 'https://go.happyuc.org:1445/dev/status';
export const askFaucetAddress   = 'https://go.happyuc.org:1445/dev/ask';
