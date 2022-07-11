//import React from 'react';
//import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
//import AccountCircle from '@mui/icons-material/AccountCircle';
//import Blockies from 'react-blockies';
import Context from '../Contexts/Index';
import { useContext } from 'react';


export default function Navigation() {
    const { wallet, setWallet } = useContext(Context);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Toolbar>
                <Typography
                    variant='h6'
                    noWrap
                    component='div'
                    sx={{ display: { sm: 'contents' } , fontSize: 'h6.fontSize' , fontWeight: 'bold' }}
                >
                    TESTAKER
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ textAlign: 'right' , display: 'grid' }}>
                    {wallet.account}
                        {/*
                            props.accounts.length > 0 ? (
                                <Blockies
                                    seed={props.accounts[0]}
                                    size={10}
                                    scale={3}
                                    color='#dfe'
                                    spotColor='#abc'
                                />
                            ) : (
                                <AccountCircle />
                            )
                        */}           
                </Box>
            </Toolbar>
        </Box>
    );
}
