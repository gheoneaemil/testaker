import * as React from 'react';
import { Staking } from '../../types/Staking';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



interface Props {
  contract: Staking | null;
} 

export default function Investors({ contract }: Props) {

  const [investors, setInvestors] = React.useState<Array<string>>([]);

  React.useEffect(() => {
    try {
        contract?.validators().then((validators) => {
          console.log("Validators: " + validators);
        })
    } catch (err) {
      console.error(err);
    }

  }, [contract]);

  return (
    <Card sx={{ margin: '3rem' , padding: '3rem' }}>
      <CardContent>
        <Typography gutterBottom variant="h4" sx={{ marginBottom: '5rem' }}>
          Investors
        </Typography>

      </CardContent>
    </Card>
  );
}