import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import ClaimTokens from './ClaimTokens';
import DepositTokens from './DepositTokens';

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));


function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid item xs>
          {DepositTokens()}
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs>
          {ClaimTokens()}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
