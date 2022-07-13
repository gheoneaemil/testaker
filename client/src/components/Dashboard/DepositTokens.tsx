import * as React from 'react';
import Button from '@mui/material/Button';
import { Staking } from '../../types/Staking';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';


interface Props {
  contract: Staking | null;
} 

export interface SnackbarState extends SnackbarOrigin {
  open: boolean;
  message: string;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function DepositTokens({ contract }: Props) {

  const [amount, setAmount] = React.useState<string>('');
  const [snackbar, setSnackbar] = React.useState<SnackbarState>({
    open: false,
    vertical: 'bottom',
    horizontal: 'center',
    message: ''
  });
  const { vertical, horizontal } = snackbar;

  const deposit = () => {
      contract?.stake({
        value: amount
      }).catch(err => {
        console.error(err);
        setSnackbar({
          ...snackbar,
          open: true,
          message: 'Something went wrong, try again'
        });
      });
  }

  const handleInputConversion = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  }

  return (
    <>
      <Card elevation={0}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ marginBottom: '1rem' }}>
              Deposit ETH
            </Typography>
            <TextField label="Amount to deposit" variant="outlined" value={amount} onChange={handleInputConversion} />
          </CardContent>
        <CardActions sx={{ justifyContent: 'center' , textAlign: 'center' }}>
          <Button variant="outlined" size="large" onClick={() => deposit()}>
            DEPOSIT
          </Button>
        </CardActions>
      </Card>
      <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={() => setSnackbar({ ...snackbar, open: false })} anchorOrigin={{ vertical, horizontal }}>
        <Alert severity="error">{snackbar.message}</Alert>
      </Snackbar>
    </>
  );
}