import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import ClaimTokens from './ClaimTokens';
import DepositTokens from './DepositTokens';
import { Staking } from '../../types/Staking';
import { ethers } from 'ethers';
import { WalletContext } from '../../common/Params/Index';
import Investors from './Investors';

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

interface Props {
  contract: Staking | null;
  wallet: WalletContext | null;
} 

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