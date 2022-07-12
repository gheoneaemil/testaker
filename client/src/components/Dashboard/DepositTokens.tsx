import { ethers } from 'ethers';
import Button from '@mui/material/Button';
import { Staking } from '../../types/Staking';

interface Props {
  connection: ethers.providers.Web3Provider | null;
  contract: Staking | null;
} 

export default function DepositTokens({ connection, contract }: Props) {

  const deposit = (amount: number) => {
    contract?.stake({
      value: amount
    });
  }

  return (
    <div>
      <Button variant="outlined" size="large" onClick={() => deposit(5)}>
        Deposit Tokens
      </Button>
    </div>
  );
}