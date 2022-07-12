export const params = {
    contract: '0x59388cCbb83A06683186257Fe215Ea5cDc50cC14',
    emptyAddress: '0x0000000000000000000000000000000000000000',
    apiUrl: 'http://localhost:3001'
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

export interface WalletContext {
  compatible: boolean;
  account: string;
  mainToken: Aseet;
  assets: Array<Aseet>;
}

export const defaultWalletContext: WalletContext = {
  compatible: false,
  account: '',
  mainToken: {
    symbol: '',
    balance: 0,
    name: ''
  },
  assets: []
};