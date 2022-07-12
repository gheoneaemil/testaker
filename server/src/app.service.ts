import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
import { Staking } from '../types/Staking';
import { Staking__factory } from '../types/factories/Staking__factory';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from './entities/event.entity';
import { Repository } from 'typeorm';


@Injectable()
export class AppService {

  connection: ethers.providers.WebSocketProvider;
  wallet: ethers.Wallet;
  connectionCloseTimestamp: number = 0;
  connectionOpenTimestamp: number = 0;
  contractAddress: string = '0x3b4B48d72872142ce2442d01D8f4D930dA9C3452';
  stakeContract: Staking;

  connect() {
    this.connection = new ethers.providers.WebSocketProvider(String(process.env.ETHEREUM_RINKEBY_INFURA));
    this.wallet = new ethers.Wallet(String(process.env.PRIVATE_KEY), this.connection);
    this.stakeContract = Staking__factory.connect(this.contractAddress, this.wallet);
    this.initializeWathcer();
  }

  initializeWathcer() {
    console.log("Watcher listening on contract [", this.stakeContract.address, "]");
    this.stakeContract.on("*", (event) => {
      try {
        this.eventRepository.save({
          blockNumber: Number(event.blockNumber),
          blockHash: String(event.blockHash),
          data: String(event.data),
          transactionIndex: Number(event.transactionIndex),
          removed: Boolean(event.removed),
          transactionHash: String(event.transactionHash),
          logIndex: Number(event.logIndex),
          event: String(event.event),
          eventSignature: String(event.eventSignature),
          address: String(event.address),
          account: String(event.args.account),
          amount: Number(event.args.amount),
          eventArgumentsEncoded: String(ethers.utils.defaultAbiCoder.encode(['address','uint256'],[event.args.account, event.args.amount]))
        });
      } catch(err) {
        console.error(err);
      }
    });
  }

  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {
    this.connect();
  }
  


  getHello(): string {
    return 'Hello World!';
  }
}
