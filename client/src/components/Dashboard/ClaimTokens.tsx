import { ethers } from 'ethers';
import Button from '@mui/material/Button';

interface Props {
  connection: ethers.providers.Web3Provider | null;
  contract: ethers.Contract | null;
} 

export default function ClaimTokens({ connection, contract }: Props) {
  return (
    <div>
      <Button variant="outlined" size="large">
        Claim Tokens
      </Button>
    </div>
  );
}