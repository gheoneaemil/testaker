import Context from '../../../Contexts/Index';
import React, { useContext, useEffect } from 'react';


export default function MetamaskWallet() {
    const [metamaskCompatible, setMetamaskCompatible] = React.useState(false);


    
    useEffect(() => {
        const { ethereum } = window;
        const checkMetamaskAvailability = () => {
            setMetamaskCompatible(ethereum);
        };
        checkMetamaskAvailability();
      }, []);

    return (
        <>
        </>
    );
}
