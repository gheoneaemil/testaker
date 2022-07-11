/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface StakingInterface extends ethers.utils.Interface {
  functions: {
    "VALIDATOR_THRESHOLD()": FunctionFragment;
    "_addressToIsValidator(address)": FunctionFragment;
    "_addressToStakedAmount(address)": FunctionFragment;
    "_addressToValidatorIndex(address)": FunctionFragment;
    "_maximumNumValidators()": FunctionFragment;
    "_minimumNumValidators()": FunctionFragment;
    "_stakedAmount()": FunctionFragment;
    "_validators(uint256)": FunctionFragment;
    "accountStake(address)": FunctionFragment;
    "isValidator(address)": FunctionFragment;
    "maximumNumValidators()": FunctionFragment;
    "minimumNumValidators()": FunctionFragment;
    "stake()": FunctionFragment;
    "stakedAmount()": FunctionFragment;
    "unstake()": FunctionFragment;
    "validators()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "VALIDATOR_THRESHOLD",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_addressToIsValidator",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "_addressToStakedAmount",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "_addressToValidatorIndex",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "_maximumNumValidators",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_minimumNumValidators",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_stakedAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_validators",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "accountStake",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "isValidator", values: [string]): string;
  encodeFunctionData(
    functionFragment: "maximumNumValidators",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minimumNumValidators",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "stake", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "stakedAmount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "unstake", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "validators",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "VALIDATOR_THRESHOLD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_addressToIsValidator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_addressToStakedAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_addressToValidatorIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_maximumNumValidators",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_minimumNumValidators",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_stakedAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_validators",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "accountStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isValidator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maximumNumValidators",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minimumNumValidators",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakedAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unstake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "validators", data: BytesLike): Result;

  events: {
    "Staked(address,uint256)": EventFragment;
    "Unstaked(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Staked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unstaked"): EventFragment;
}

export type StakedEvent = TypedEvent<
  [string, BigNumber] & { account: string; amount: BigNumber }
>;

export type UnstakedEvent = TypedEvent<
  [string, BigNumber] & { account: string; amount: BigNumber }
>;

export class Staking extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: StakingInterface;

  functions: {
    VALIDATOR_THRESHOLD(overrides?: CallOverrides): Promise<[BigNumber]>;

    _addressToIsValidator(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    _addressToStakedAmount(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    _addressToValidatorIndex(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    _maximumNumValidators(overrides?: CallOverrides): Promise<[BigNumber]>;

    _minimumNumValidators(overrides?: CallOverrides): Promise<[BigNumber]>;

    _stakedAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    _validators(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    accountStake(addr: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    isValidator(addr: string, overrides?: CallOverrides): Promise<[boolean]>;

    maximumNumValidators(overrides?: CallOverrides): Promise<[BigNumber]>;

    minimumNumValidators(overrides?: CallOverrides): Promise<[BigNumber]>;

    stake(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakedAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    unstake(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    validators(overrides?: CallOverrides): Promise<[string[]]>;
  };

  VALIDATOR_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>;

  _addressToIsValidator(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  _addressToStakedAmount(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  _addressToValidatorIndex(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  _maximumNumValidators(overrides?: CallOverrides): Promise<BigNumber>;

  _minimumNumValidators(overrides?: CallOverrides): Promise<BigNumber>;

  _stakedAmount(overrides?: CallOverrides): Promise<BigNumber>;

  _validators(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  accountStake(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

  isValidator(addr: string, overrides?: CallOverrides): Promise<boolean>;

  maximumNumValidators(overrides?: CallOverrides): Promise<BigNumber>;

  minimumNumValidators(overrides?: CallOverrides): Promise<BigNumber>;

  stake(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakedAmount(overrides?: CallOverrides): Promise<BigNumber>;

  unstake(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  validators(overrides?: CallOverrides): Promise<string[]>;

  callStatic: {
    VALIDATOR_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>;

    _addressToIsValidator(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    _addressToStakedAmount(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _addressToValidatorIndex(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _maximumNumValidators(overrides?: CallOverrides): Promise<BigNumber>;

    _minimumNumValidators(overrides?: CallOverrides): Promise<BigNumber>;

    _stakedAmount(overrides?: CallOverrides): Promise<BigNumber>;

    _validators(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    accountStake(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    isValidator(addr: string, overrides?: CallOverrides): Promise<boolean>;

    maximumNumValidators(overrides?: CallOverrides): Promise<BigNumber>;

    minimumNumValidators(overrides?: CallOverrides): Promise<BigNumber>;

    stake(overrides?: CallOverrides): Promise<void>;

    stakedAmount(overrides?: CallOverrides): Promise<BigNumber>;

    unstake(overrides?: CallOverrides): Promise<void>;

    validators(overrides?: CallOverrides): Promise<string[]>;
  };

  filters: {
    "Staked(address,uint256)"(
      account?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { account: string; amount: BigNumber }
    >;

    Staked(
      account?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { account: string; amount: BigNumber }
    >;

    "Unstaked(address,uint256)"(
      account?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { account: string; amount: BigNumber }
    >;

    Unstaked(
      account?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { account: string; amount: BigNumber }
    >;
  };

  estimateGas: {
    VALIDATOR_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>;

    _addressToIsValidator(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _addressToStakedAmount(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _addressToValidatorIndex(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _maximumNumValidators(overrides?: CallOverrides): Promise<BigNumber>;

    _minimumNumValidators(overrides?: CallOverrides): Promise<BigNumber>;

    _stakedAmount(overrides?: CallOverrides): Promise<BigNumber>;

    _validators(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    accountStake(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    isValidator(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    maximumNumValidators(overrides?: CallOverrides): Promise<BigNumber>;

    minimumNumValidators(overrides?: CallOverrides): Promise<BigNumber>;

    stake(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakedAmount(overrides?: CallOverrides): Promise<BigNumber>;

    unstake(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    validators(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    VALIDATOR_THRESHOLD(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _addressToIsValidator(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _addressToStakedAmount(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _addressToValidatorIndex(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _maximumNumValidators(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _minimumNumValidators(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _stakedAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _validators(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    accountStake(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isValidator(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maximumNumValidators(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    minimumNumValidators(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    stake(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakedAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unstake(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    validators(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
