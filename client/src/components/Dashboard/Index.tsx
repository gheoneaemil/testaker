import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import ClaimTokens from './ClaimTokens';
import DepositTokens from './DepositTokens';
import { Staking } from '../../types/Staking';
import { ethers } from 'ethers';

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

interface Props {
  connection: ethers.providers.Web3Provider | null;
  contract: Staking | null;
} 

export default function Dashboard({ connection, contract }: Props) {
  return (
    <div className="App">
      <Grid container>
        <Grid item xs>
          <DepositTokens connection={connection} contract={contract} />
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs>
          <ClaimTokens connection={connection} contract={contract} />
        </Grid>
      </Grid>
    </div>
  );
}