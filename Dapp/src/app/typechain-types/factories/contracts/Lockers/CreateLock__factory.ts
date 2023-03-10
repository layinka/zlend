/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  CreateLock,
  CreateLockInterface,
} from "../../../contracts/Lockers/CreateLock";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lockTime_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "releaseTime_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "lockTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "releaseTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60803461004f57601f61010f38819003918201601f19168301916001600160401b0383118484101761005457808492604094855283398101031261004f575160005560405160a4908161006b8239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080806040526004361015601257600080fd5b600090813560e01c9081630d668087146052575063b91d400114603457600080fd5b34604f5780600319360112604f576020600154604051908152f35b80fd5b905034606a5781600319360112606a57602091548152f35b5080fdfea2646970667358221220470ed9bfcb82c78b18e428a1d2889334937d37ac6abcda9d23df1554a080c40f64736f6c63430008110033";

type CreateLockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CreateLockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CreateLock__factory extends ContractFactory {
  constructor(...args: CreateLockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    lockTime_: PromiseOrValue<BigNumberish>,
    releaseTime_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CreateLock> {
    return super.deploy(
      lockTime_,
      releaseTime_,
      overrides || {}
    ) as Promise<CreateLock>;
  }
  override getDeployTransaction(
    lockTime_: PromiseOrValue<BigNumberish>,
    releaseTime_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(lockTime_, releaseTime_, overrides || {});
  }
  override attach(address: string): CreateLock {
    return super.attach(address) as CreateLock;
  }
  override connect(signer: Signer): CreateLock__factory {
    return super.connect(signer) as CreateLock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CreateLockInterface {
    return new utils.Interface(_abi) as CreateLockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CreateLock {
    return new Contract(address, _abi, signerOrProvider) as CreateLock;
  }
}
