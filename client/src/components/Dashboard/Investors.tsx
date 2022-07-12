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
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import httpGet from '../../common/Http/Request';
import { params } from '../../common/Params/Index';
import Blockies from 'react-blockies';


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

  const [investors, setInvestors] = React.useState<Array<string>>([]);
  const [value, setValue] = React.useState(0);
  const [events, setEvents] = React.useState<Array<any>>([]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const observable = new Observable(subscriber => {
    contract?.validators().then((validators: Array<string>) => {
      subscriber.next(validators);
      /*
      for ( let i = 0 , l = validators.length ; i < l ; ++i ) {
        contract?.accountStake(validators[i]).then((amountStaked: BigNumber) => {
          subscriber.next(i);
        })
      }
      */
      subscriber.complete();
    })
  });

  observable.subscribe({
    next(investors) {
      console.log("Received something here");
      console.log(investors);
      setInvestors(investors as Array<string>);
    },
    error(err) {
      console.error(err);
    },
    complete() {
      
    }
  });

  React.useEffect(() => {
    httpGet(params.apiUrl + "/events")
    .then(response => {
      setEvents(response[0]);
    })
    .catch(err => {
      console.error(err)
    });
  }, []);

  return (
    <Card sx={{ margin: '3rem' , padding: '3rem' , borderRadius: '18px' }} elevation={0}>
      <CardContent>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Investors" {...a11yProps(0)} />
              <Tab label={"Events (" + events.length + ")"} {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Profile</TableCell>
                    <TableCell align="center">Address</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {investors.map((investor, id) => (
                    <TableRow
                      key={id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="center">
                        <Blockies
                            seed={investor}
                            size={13}
                            scale={3}
                            color='#dfe'
                            spotColor='#abc'
                            className='MetamaskIcon'
                        />
                      </TableCell>
                      <TableCell align="center">{investor}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">ID</TableCell>
                    <TableCell align="center">Block No.</TableCell>
                    <TableCell align="center">Block Hash</TableCell>
                    <TableCell align="center">Tx Index</TableCell>
                    <TableCell align="center">Removed</TableCell>
                    <TableCell align="center">Address</TableCell>
                    <TableCell align="center">Data</TableCell>
                    <TableCell align="center">Tx. Hash</TableCell>
                    <TableCell align="center">Log Index</TableCell>
                    <TableCell align="center">Event</TableCell>
                    <TableCell align="center">Event Signature</TableCell>
                    <TableCell align="center">Account</TableCell>
                    <TableCell align="center">Amount</TableCell>
                    <TableCell align="center">Event Args (Encoded)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {events.map((event, id) => (
                    <TableRow
                      key={id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="center">{event.id}</TableCell>
                      <TableCell align="center">{event.blockNumber}</TableCell>
                      <TableCell align="center">{event.blockHash}</TableCell>
                      <TableCell align="center">{event.transactionIndex}</TableCell>
                      <TableCell align="center">{event.removed}</TableCell>
                      <TableCell align="center">{event.address}</TableCell>
                      <TableCell align="center">{event.data}</TableCell>
                      <TableCell align="center">{event.transactionHash}</TableCell>
                      <TableCell align="center">{event.logIndex}</TableCell>
                      <TableCell align="center">{event.event}</TableCell>
                      <TableCell align="center">{event.eventSignature}</TableCell>
                      <TableCell align="center">{event.account}</TableCell>
                      <TableCell align="center">{event.amount}</TableCell>
                      <TableCell align="center">{event.eventArgumentsEncoded}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>
        </Box>
      </CardContent>
    </Card>
  );
}