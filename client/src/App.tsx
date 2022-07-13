import * as React from 'react';
import './App.css';
import Navigation from './common/Navigation/Index';
import { defaultWalletContext, params, WalletContext } from './common/Params/Index';
import Dashboard from './components/Dashboard/Index';
import { ethers } from 'ethers';
import { Staking__factory } from './types/factories/Staking__factory';
import { Staking } from './types/Staking';


function App() {
  
  const [wallet, setWallet] = React.useState<WalletContext>(defaultWalletContext);
  const [contract, setContract] = React.useState<Staking | null>(null);

  const metamaskAuth = () => {
    try {
        if ( window.ethereum ) {

            let connection: ethers.providers.Web3Provider = new ethers.providers.Web3Provider(window.ethereum, "rinkeby");

            window.ethereum.request({ method: 'eth_requestAccounts' })
            .then((accounts: Array<string>) => {
                setWallet({
                  ...wallet,
                  account: accounts[0]
                });
                const signer = connection.getSigner(accounts[0]);
                setContract(Staking__factory.connect(params.contract,signer));
            });

            window.ethereum.on('accountsChanged', (accounts: Array<string>) => {
                setWallet({
                    ...wallet,
                    account: accounts[0]
                });
                const signer = connection.getSigner(accounts[0]);
                setContract(Staking__factory.connect(params.contract,signer));
            });
        }
    } catch (err) {
        console.error(err);
    }
  }

  React.useEffect(() => {
    try {
      metamaskAuth();
    } catch (err) {
        console.error(err);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="App">
      <Navigation wallet={wallet} />
      <Dashboard contract={contract} wallet={wallet} />
    </main>
  );
}

export default App;
