import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
import { Staking } from '../types/Staking';
import { Staking__factory } from '../types/factories/Staking__factory';

/*
const EXPECTED_PONG_BACK = 15000;
const KEEP_ALIVE_CHECK_INTERVAL = 7500;
*/

@Injectable()
export class AppService {

  connection: ethers.providers.WebSocketProvider;
  wallet: ethers.Wallet;
  connectionCloseTimestamp: number = 0;
  connectionOpenTimestamp: number = 0;
  contractAddress: string = '0x3b4B48d72872142ce2442d01D8f4D930dA9C3452';
  stakeContract: Staking;

  /*
  sturdyWebsocketLogic() {
    let pingTimeout = null;
    let keepAliveInterval = null;

    this.connection._websocket.on('open', () => {
      console.log('WS opened');
      this.connectionOpenTimestamp = Math.ceil(Date.now() / 1000);

      keepAliveInterval = setInterval(() => {
        this.connection._websocket.ping();

        pingTimeout = setTimeout(() => {
          try {
            this.connection._websocket.terminate();
          } catch(err) {
            console.error(err);
          }
        }, EXPECTED_PONG_BACK);
      }, KEEP_ALIVE_CHECK_INTERVAL);
    });

    this.connection._websocket.on('close', () => {
      this.connectionCloseTimestamp = Math.floor(Date.now() / 1000);

      console.warn('WS has closed');
      clearInterval(keepAliveInterval);
      clearTimeout(pingTimeout);
      
      this.connect();
    })
  
    this.connection._websocket.on('pong', () => {
      console.log('Received pong, so connection is alive');
      clearInterval(pingTimeout);
    })
  }
  */

  connect() {
    this.connection = new ethers.providers.WebSocketProvider(String(process.env.ETHEREUM_RINKEBY_INFURA));
    this.wallet = new ethers.Wallet(String(process.env.PRIVATE_KEY), this.connection);
    this.stakeContract = Staking__factory.connect(this.contractAddress, this.wallet);
    this.initializeWathcer();
  }

  initializeWathcer() {
    console.log("Watcher listening on contract [", this.stakeContract.address, "]");
    this.stakeContract.on("*", async (event) => {
      const args = event.args;
      console.log(event.event + ": " + JSON.stringify(args));
      switch (event.event) {
        case "Staked":

        break;

        case "Unstaked":

        break;
      }
    });
  }

  constructor() {
    this.connect();
    //this.sturdyWebsocketLogic();
  }
  


  getHello(): string {
    return 'Hello World!';
  }
}
