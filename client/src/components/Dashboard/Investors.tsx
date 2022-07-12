import * as React from 'react';
import { Staking } from '../../types/Staking';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Observable } from 'rxjs';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BigNumber } from 'ethers';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import httpGet from '../../common/Http/Request';
import { params } from '../../common/Params/Index';


interface Props {
  contract: Staking | null;
} 

function createData(
  address: string,
  amount: number
) {
  return { address, amount };
}

interface Investor {
  address: string;
  amount: number | string;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Investors({ contract }: Props) {

  const [investors, setInvestors] = React.useState<Array<Investor>>([]);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const observable = new Observable<Investor>(subscriber => {
    contract?.validators().then((validators: Array<string>) => {

      for ( let i = 0 , l = validators.length ; i < l ; ++i ) {
        contract?.accountStake(validators[i]).then((amountStaked: BigNumber) => {
          subscriber.next({
            address: validators[i],
            amount: Number(amountStaked)
          });
        })
      }

      subscriber.complete();
    })
  });

  observable.subscribe({
    next(investor: Investor) {
      console.log(investor);
      setInvestors([... investors, investor]);
    },
    error(err) {
      console.error(err);
    }
  });

  React.useEffect(() => {
    /*
    function setEffectInvestors(newInvestors: Array<Investor>) {
      setInvestors(newInvestors);
    }
    */

    try {

      httpGet(params.apiUrl + "/events")
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.error(err)
      });

      /*
      let investorsToStore: Array<Investor> = [];
        observable.subscribe({
          next(observedInvestors: Array<Investor>) {
            investorsToStore = observedInvestors;
          },
          error(err) {
            console.error(err);
          },
          complete() {
            console.log(investorsToStore);
            setInvestors(investorsToStore);
          }
        });
  
        const fetch = () => {
          contract?.validators().then((validators: Array<string>) => {
            let formattedValidators: Array<Investor> = [];
            for ( let i = 0 , l = validators.length ; i < l ; ++i ) {
              contract?.accountStake(validators[i]).then((amountStaked: BigNumber) => {
                formattedValidators.push({
                  address: validators[i],
                  amount: Number(amountStaked)
                });
              })
            }
            console.log(formattedValidators);
            setInvestors(formattedValidators);
          });
        }

      fetch();
    */

    } catch (err) {
      console.error(err);
    }

  }, [contract]);

  return (
    <Card sx={{ margin: '3rem' , padding: '3rem' , borderRadius: '18px' }} elevation={0}>
      <CardContent>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Investors" {...a11yProps(0)} />
              <Tab label="Events" {...a11yProps(1)} />
              <Tab label="Item Three" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Address</TableCell>
                    <TableCell align="center">Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {investors.map((investor, id) => (
                    <TableRow
                      key={id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="center">{investor.address}</TableCell>
                      <TableCell align="center">{investor.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </Box>
      </CardContent>
    </Card>
  );
}