import * as React from 'react';
import Button from '@mui/material/Button';
import { Staking } from '../../types/Staking';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { params, WalletContext } from '../../common/Params/Index';

interface Props {
  contract: Staking | null;
  wallet: WalletContext | null;
}

export default function ClaimTokens({ contract, wallet }: Props) {

  const [amount, setAmount] = React.useState<number>(0);

  const claim = () => {
    contract?.unstake();
  }

  React.useEffect(() => {
    try {
        contract?.accountStake(wallet?.account || params.emptyAddress).then((amount) => {
          setAmount(Number(amount));
        })
    } catch (err) {
      console.error(err);
    }

  }, [wallet,contract]);

  return (
    <Card sx={{ maxWidth: 450 , margin: '3rem' , padding: '3rem' }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          You have {amount} tokens
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Want to claim them?
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' , textAlign: 'center' }}>
        <Button variant="outlined" size="large" onClick={() => claim()}>
          CLAIM
        </Button>
      </CardActions>
    </Card>
  );
}