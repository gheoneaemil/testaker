import * as React from 'react';
import Button from '@mui/material/Button';
import { Staking } from '../../types/Staking';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



interface Props {
  contract: Staking | null;
} 

export default function DepositTokens({ contract }: Props) {

  const [amount, setAmount] = React.useState<number>(0);

  const deposit = (amount: number) => {
    contract?.stake({
      value: amount
    });
  }

  const handleInputConversion = (e: React.ChangeEvent<HTMLInputElement>) => {
    if ( !isNaN(Number(e.target.value)) ) {
      setAmount(Number(e.target.value));
    }
  }

  return (
    <Card sx={{ maxWidth: 450 , margin: '3rem' , padding: '3rem' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Deposit your tokens
        </Typography>
        <TextField label="Amount to deposit" variant="outlined" value={amount} onChange={handleInputConversion} />
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' , textAlign: 'center' }}>
        <Button variant="outlined" size="large" onClick={() => deposit(5)}>
          DEPOSIT
        </Button>
      </CardActions>
    </Card>
  );
}