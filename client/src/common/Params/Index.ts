export const parameters = {
    contract: '0x3b4B48d72872142ce2442d01D8f4D930dA9C3452'
  };

export interface Params {
    contract: string;
}

declare global {
  interface Window {
    ethereum: any;
  }
}

export interface Aseet {
  symbol: string;
  balance: number | string;
  name: string;
}

export interface Network {
  name: string;
  rpc: number | string;
  chainId: number | string;
  currencySymbol: string;
  blockExplorerUrl: string;
}

export interface WalletMetamask {
  account: string;
  mainToken: Aseet;
  assets: Aseet[];
}

export interface WalletContext {
  metamaskCompatible: boolean;
  metamask: WalletMetamask;
}

export const defaultWalletContext: WalletContext = {
  metamaskCompatible: false,
  metamask: {
    account: '',
    mainToken: {
      symbol: '',
      balance: 0,
      name: ''
    },
    assets: []
  }
};