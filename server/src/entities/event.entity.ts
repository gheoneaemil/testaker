import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'events' })
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'blockNumber', nullable: false, type: 'bigint' })
  blockNumber: number;

  @Column({ name: 'blockHash', nullable: false, type: 'varchar', length: 66 })
  blockHash: string;

  @Column({ name: 'transactionIndex', nullable: true, type: 'int' })
  transactionIndex: number;

  @Column({ name: 'removed', nullable: true, type: 'tinyint' })
  removed: boolean;

  @Column({ name: 'address', nullable: false, type: 'varchar', length: 42 })
  address: string;

  @Column({ name: 'data', nullable: false, type: 'varchar', length: 13000 })
  data: string;

  @Column({ name: 'transactionHash', nullable: false, type: 'varchar', length: 66 })
  transactionHash: string;

  @Column({ name: 'logIndex', nullable: true, type: 'int' })
  logIndex: number;

  @Column({ name: 'event', nullable: false, type: 'varchar', length: 150 })
  event: string;

  @Column({ name: 'eventSignature', nullable: false, type: 'varchar', length: 350 })
  eventSignature: string;

  @Column({ name: 'account', nullable: false, type: 'varchar', length: 42 })
  account: string;

  @Column({ name: 'amount', nullable: false, type: 'bigint' })
  amount: number;

  @Column({ name: 'eventArgumentsEncoded', nullable: false, type: 'varchar', length: 2600 })
  eventArgumentsEncoded: string;

}