/*import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
*/
import ClaimTokens from './ClaimTokens';
import DepositTokens from './DepositTokens';

import { Staking } from '../../types/Staking';

import { ethers } from 'ethers';
import { WalletContext } from '../../common/Params/Index';
import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Investors from './Investors';

/*
const Grid = styled(MuiGrid)(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));
*/

interface Props {
  contract: Staking | null;
  wallet: WalletContext | null;
} 

/*
export default function Dashboard({ contract, wallet }: Props) {
  return (
    <>
    <Grid container style={{ display: 'block ruby' }}>
      <Grid item xs={4} style={{textAlign: "center"}}>
        <DepositTokens contract={contract} />
      </Grid>
      <Divider orientation="vertical" flexItem />
      <Grid item xs={4} style={{textAlign: "center"}}>
        <ClaimTokens contract={contract} wallet={wallet} />
      </Grid>
    </Grid>
      <Investors contract={contract} />
    </>
  );
}
*/


const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));



export default function Dashboard({ contract, wallet }: Props) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <DepositTokens contract={contract} />
        <ClaimTokens contract={contract} wallet={wallet} />
        <Investors contract={contract} />
      </Box>
    </Box>
  );
}