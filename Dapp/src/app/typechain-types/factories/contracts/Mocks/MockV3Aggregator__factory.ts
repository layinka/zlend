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
  MockV3Aggregator,
  MockV3AggregatorInterface,
} from "../../../contracts/Mocks/MockV3Aggregator";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
      },
      {
        internalType: "int256",
        name: "_initialAnswer",
        type: "int256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "int256",
        name: "current",
        type: "int256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "roundId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256",
      },
    ],
    name: "AnswerUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "roundId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "startedBy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startedAt",
        type: "uint256",
      },
    ],
    name: "NewRound",
    type: "event",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "description",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "getAnswer",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint80",
        name: "_roundId",
        type: "uint80",
      },
    ],
    name: "getRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "roundId",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "answer",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "startedAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "answeredInRound",
        type: "uint80",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "getTimestamp",
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
    name: "latestAnswer",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestRound",
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
    name: "latestRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "roundId",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "answer",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "startedAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "answeredInRound",
        type: "uint80",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestTimestamp",
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
    inputs: [
      {
        internalType: "int256",
        name: "_answer",
        type: "int256",
      },
    ],
    name: "updateAnswer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint80",
        name: "_roundId",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "_answer",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startedAt",
        type: "uint256",
      },
    ],
    name: "updateRoundData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
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
  "0x6080346100c35761052190601f38839003908101601f19168201906001600160401b038211838310176100c857808391604095869485528339810103126100c35780519060ff82168092036100c3576020015160009160ff19835416178255806001554260025560035460001981146100af576001018060035582526004602052828220556003548152600560205242828220556003548152600660205281429120555161044290816100df8239f35b634e487b7160e01b83526011600452602483fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604081815260048036101561001557600080fd5b600092833560e01c908163313ce567146103d1575080634aa2011f1461036b57806350d25bcd1461034c57806354fd4d5014610331578063668a0f02146103125780637284e4161461025f5780638205bf6a1461023c5780639a6fc8f5146101ca578063a87a20ce1461015d578063b5ab58dc14610137578063b633620c146101105763feaf968c146100a757600080fd5b3461010c578260031936011261010c576003548084526020918252828420546006835283852054600584529484902054935169ffffffffffffffffffff9092168083529282015260408101939093526060830191909152608082015260a090f35b0390f35b8280fd5b503461010c57602036600319011261010c5760209282913581526005845220549051908152f35b503461010c57602036600319011261010c57602092818392358252845220549051908152f35b503461010c57602036600319011261010c57803590816001554260025560035460001981146101b7576001018060035584526020528183205560035482526005602052428183205560035482526006602052429082205580f35b634e487b7160e01b855260118252602485fd5b503461010c57602036600319011261010c57610108906101e86103ee565b69ffffffffffffffffffff16808552602091825283852054600683528486205460058452958590205494518281529283015260408201949094526060810192909252608082019290925290819060a0820190565b50503461025b578160031936011261025b576020906002549051908152f35b5080fd5b503461010c578260031936011261010c578151908282019082821067ffffffffffffffff8311176102ff57508252601f81526020907f76302e362f74657374732f4d6f636b563341676772656761746f722e736f6c008282015282519382859384528251928382860152825b8481106102e957505050828201840152601f01601f19168101030190f35b81810183015188820188015287955082016102cb565b634e487b7160e01b855260419052602484fd5b50503461025b578160031936011261025b576020906003549051908152f35b50503461025b578160031936011261025b5751908152602090f35b50503461025b578160031936011261025b576020906001549051908152f35b503461010c57608036600319011261010c576103856103ee565b906024359069ffffffffffffffffffff60443593168060035582600155836002558552602052828420556003548352600560205281832055600354825260066020526064359082205580f35b84903461025b578160031936011261025b5760ff60209254168152f35b6004359069ffffffffffffffffffff8216820361040757565b600080fdfea2646970667358221220f7264ab0b23e3ffe60367b69f3951bf3c10ca82907f61274aa4f25bb5a44b4cf64736f6c63430008110033";

type MockV3AggregatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockV3AggregatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockV3Aggregator__factory extends ContractFactory {
  constructor(...args: MockV3AggregatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _decimals: PromiseOrValue<BigNumberish>,
    _initialAnswer: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockV3Aggregator> {
    return super.deploy(
      _decimals,
      _initialAnswer,
      overrides || {}
    ) as Promise<MockV3Aggregator>;
  }
  override getDeployTransaction(
    _decimals: PromiseOrValue<BigNumberish>,
    _initialAnswer: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _decimals,
      _initialAnswer,
      overrides || {}
    );
  }
  override attach(address: string): MockV3Aggregator {
    return super.attach(address) as MockV3Aggregator;
  }
  override connect(signer: Signer): MockV3Aggregator__factory {
    return super.connect(signer) as MockV3Aggregator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockV3AggregatorInterface {
    return new utils.Interface(_abi) as MockV3AggregatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockV3Aggregator {
    return new Contract(address, _abi, signerOrProvider) as MockV3Aggregator;
  }
}
