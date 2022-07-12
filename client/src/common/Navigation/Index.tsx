import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import AdbIcon from '@mui/icons-material/Adb';
import { WalletContext } from '../Params/Index';
import Blockies from 'react-blockies';
import LoginIcon from '@mui/icons-material/Login';


interface Props {
    wallet: WalletContext
}

export default function Navigation({wallet}: Props) {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <AppBar position="sticky">
                <Container maxWidth="xl">
                    <Toolbar sx={{ justifyContent: "space-between" }}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            }}
                        >
                            TESTAKER
                        </Typography>

                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>

                        <Toolbar >
                            <Tooltip title={wallet.account}>
                            <>
                                {
                                    wallet.account ? (
                                        <>
                                            <Grid container direction="row" alignItems="center">
                                                <Grid item sx={{ display: 'contents' }}>
                                                <Blockies
                                                    seed={wallet.account}
                                                    size={13}
                                                    scale={3}
                                                    color='#dfe'
                                                    spotColor='#abc'
                                                    className='MetamaskIcon'
                                                />
                                                </Grid>
                                                <Grid item style={{ "marginLeft": "0.7rem" }}>
                                                    {wallet.account.substring(0,4) + ".." + wallet.account.substring(wallet.account.length-3,wallet.account.length)}
                                                </Grid>
                                            </Grid>
                                        </>
                                    ) : (
                                        <>
                                            <LoginIcon/>
                                        </>
                                    )
                                }
                            </>
                            </Tooltip>
                        </Toolbar>

                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
};