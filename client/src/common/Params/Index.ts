export const params = {
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