import React, { createContext, useState } from "react";
import { defaultWalletContext, WalletContext } from "../Params/Index";



export type WalletContextParams = {

  wallet: WalletContext;
  setWallet: (wallet: WalletContext) => void;

}

export const  walletContextDefaultParams = {
  wallet: defaultWalletContext, 
  setWallet: (defaultWalletContext: WalletContext) => {} 
};

const Context = createContext<WalletContextParams>(walletContextDefaultParams);



export function Provider( children: React.ReactNode ) {

  const [wallet, setWallet] = useState(defaultWalletContext);

  return <Context.Provider value={{ wallet, setWallet }} >
    {children}
  </Context.Provider>
}

export default Context;
