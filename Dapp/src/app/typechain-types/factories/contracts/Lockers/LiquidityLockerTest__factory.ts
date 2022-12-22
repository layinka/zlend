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
  LiquidityLockerTest,
  LiquidityLockerTestInterface,
} from "../../../contracts/Lockers/LiquidityLockerTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "dexRouterAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "releaseTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidityPercentOfRaisedFunds",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxRaisedFunds",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "addLiquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getReleaseTime",
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
    name: "lpTokenPairAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "releaseETH",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "releaseLPTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalEthExpected",
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
    name: "totalTokensExpected",
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
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x6080604052346200008e5760e0620015a1388190039081906080601f8301601f19168101906001600160401b0382119082101762000093575b604052608039126200008e576200007e6200005262000109565b6200005c62000120565b6200006662000137565b60e05161010051916101205193610140519562000310565b60405161102d9081620005748239f35b600080fd5b6200009d620000a3565b62000038565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b03821117620000d657604052565b620000e0620000a3565b604052565b601f909101601f19168101906001600160401b03821190821017620000d657604052565b608051906001600160a01b03821682036200008e57565b60a051906001600160a01b03821682036200008e57565b60c051906001600160a01b03821682036200008e57565b156200015657565b60405162461bcd60e51b815260206004820152603460248201527f4c69717569646974794c6f636b65723a2072656c656173652074696d6520697360448201527f206265666f72652063757272656e742074696d650000000000000000000000006064820152608490fd5b908160209103126200008e57516001600160a01b03811681036200008e5790565b506040513d6000823e3d90fd5b60405190620001fe82620000ba565b601e82527f6c697175696469747950657263656e744f6652616973656446756e64733a00006020830152565b604051906200023982620000ba565b600f82526e36b0bc2930b4b9b2b2233ab732399d60891b6020830152565b604051906200026682620000ba565b60078252662fb83934b1b29d60c91b6020830152565b818102929181159184041417156200029057565b634e487b7160e01b600052601160045260246000fd5b60405190620002b582620000ba565b60118252703a37ba30b622ba3422bc3832b1ba32b21d60791b6020830152565b60405190620002e482620000ba565b601482527f746f74616c546f6b656e7345787065637465643a0000000000000000000000006020830152565b90620003ea6200044e9693620003c8620004539996620003b16200040c96620004479a620003404282116200014e565b600055600880546001600160a01b0319166001600160a01b0392831690811790915560049060209060405163c45a015560e01b815292839182905afa908115620004c6575b60009162000491575b5060098054919092166001600160a01b03166001600160a01b0319909116179055565b600380546001600160a01b03191633179055600155565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b600680546001600160a01b0319166001600160a01b0392909216919091179055565b62000421816200041b620001ef565b620004d6565b62000430826200041b6200022a565b620004416001546200041b62000257565b6200027c565b6064900490565b600555565b6200046d62000468600154600554906200027c565b600455565b6200047e6005546200041b620002a6565b6200048f6004546200041b620002d5565b565b620004b7915060203d8111620004be575b620004ae8183620000e5565b810190620001c1565b386200038e565b503d620004a2565b620004d0620001e2565b62000385565b919060405190602090632d839cb360e21b828401526040602484015284519182606485015260005b838110620005435750506200048f93945082826084926000846200053d96850101526044830152601f80199101168101036064810184520182620000e5565b62000558565b868101820151858201608401528101620004fe565b600080916020815191016a636f6e736f6c652e6c6f675afa5056fe6080604052600436101561001b575b361561001957600080fd5b005b6000803560e01c9081634d1eac5f146100d25750806353462d6b146100c95780636639016b146100c05780637248486e146100b757806386d1a69f146100ae578063893d20e8146100a5578063a376b2dc1461009c578063e8078d94146100935763f42a386d0361000e5761008e610923565b61000e565b5061008e610392565b5061008e6102eb565b5061008e6102c1565b5061008e6101f8565b5061008e6101d9565b5061008e610115565b5061008e6100f1565b346100ee57806003193601126100ee5760055460805260206080f35b80fd5b5034610110576000366003190112610110576020600054604051908152f35b600080fd5b5034610110576000806003193601126100ee576101358154421015610c42565b4715610189578080808061016261015661015660025460018060a01b031690565b6001600160a01b031690565b4790828215610180575bf1156101755780f35b61017d610b3f565b80f35b506108fc61016c565b60405162461bcd60e51b815260206004820152602260248201527f4c69717569646974794c6f636b65723a206e6f2045746820746f2072656c6561604482015261736560f01b6064820152608490fd5b5034610110576000366003190112610110576020600454604051908152f35b5034610110576000806003193601126100ee576102188154421015610c42565b60065461017d90610231906001600160a01b0316610156565b6040516370a0823160e01b8152306004820152906020826024816001600160a01b0385165afa9182156102b4575b8492610284575b50610272821515610f3a565b6002546001600160a01b031690610d08565b6102a691925060203d81116102ad575b61029e8183610b0e565b810190610b30565b9038610266565b503d610294565b6102bc610b3f565b61025f565b5034610110576000366003190112610110576002546040516001600160a01b039091168152602090f35b5034610110576000806003193601126100ee5761030b8154421015610c42565b60075461017d90610324906001600160a01b0316610156565b6040516370a0823160e01b8152306004820152906020826024816001600160a01b0385165afa918215610385575b8492610365575b50610272821515610cab565b61037e91925060203d81116102ad5761029e8183610b0e565b9038610359565b61038d610b3f565b610352565b5034610110576000806003193601126100ee576003546103c5906103be906001600160a01b0316610156565b331461094d565b6006546106ba906060906001600160a01b0316806103e48115156109b7565b60015447926104168461040b6104056103fd8387610a29565b978896610a29565b85610a46565b506005541115610a53565b604080516370a0823160e01b8152306004808301919091529491926020928a9261045e918590829060249082905afa908115610916575b84916108f9575b5087541115610b4c565b600954610524906104ee90859061047d906001600160a01b0316610156565b600854909490610495906001600160a01b0316610156565b9488519183838d816315ab88c960e31b9a8b82525afa9283156108ec575b88936108cd575b50895163e6a4390560e01b81526001600160a01b039182168d82019081529390911660208401529384928391829160400190565b03915afa9081156108c0575b84916108a9575b5060018060a01b03166bffffffffffffffffffffffff60a01b6007541617600755565b600754839061053b906001600160a01b0316610156565b1561076c575b90508561060992826105b061056361015661015660065460018060a01b031690565b600854610578906001600160a01b0316610156565b895163095ea7b360e01b8082526001600160a01b03909216968101968752600019602088015290959094859384928391604090910190565b03925af1801561075f575b610742575b506006546105d890610156906001600160a01b031681565b60075486519283526001600160a01b031688830190815260001960208201529193849283918e918391604090910190565b03925af18015610735575b610707575b5050600754610638906001600160a01b0316610633610bea565b610f94565b60085461064d906001600160a01b0316610156565b9260055496879261066560065460018060a01b031690565b9261066f42610c19565b9151998a988997889663f305d71960e01b885230948801929360a09497969591929760c0850198600180881b0380951686526020860152604085015260608401521660808201520152565b03925af180156106fa575b6106cd575080f35b6106ed9060603d81116106f3575b6106e58183610b0e565b810190610c27565b50505080f35b503d6106db565b610702610b3f565b6106c5565b8161072692903d1061072e575b61071e8183610b0e565b810190610bd2565b503880610619565b503d610714565b61073d610b3f565b610614565b61075890833d851161072e5761071e8183610b0e565b50386105c0565b610767610b3f565b6105bb565b60095461083b9361080693909161078b906001600160a01b0316610156565b6006549091906001600160a01b031660085490919085906107b4906001600160a01b0316610156565b918c8b518094819382525afa93841561089c575b9361087d575b5087516364e329cb60e11b81526001600160a01b039182168b820190815293909116602084015293849283918f918391604090910190565b03925af1908115610870575b8a91610843575060018060a01b03166bffffffffffffffffffffffff60a01b6007541617600755565b873882610541565b6108639150833d8511610869575b61085b8183610b0e565b810190610bb3565b38610501565b503d610851565b610878610b3f565b610812565b610895919350843d86116108695761085b8183610b0e565b91386107ce565b6108a4610b3f565b6107c8565b6108639150853d87116108695761085b8183610b0e565b6108c8610b3f565b6104fa565b6108e5919350843d86116108695761085b8183610b0e565b91386104ba565b6108f4610b3f565b6104b3565b6109109150853d87116102ad5761029e8183610b0e565b38610454565b61091e610b3f565b61044d565b5034610110576000366003190112610110576007546040516001600160a01b039091168152602090f35b1561095457565b60405162461bcd60e51b815260206004820152603560248201527f4c69717569646974794c6f636b65723a204f6e6c79206465706c6f796572206360448201527430b71031b0b636103a3434b990333ab731ba34b7b760591b6064820152608490fd5b156109be57565b60405162461bcd60e51b815260206004820152602660248201527f4c69717569646974794c6f636b65723a20546f6b656e2063616e206e6f74206260448201526565207a65726f60d01b6064820152608490fd5b50634e487b7160e01b600052601160045260246000fd5b81810292918115918404141715610a3c57565b610a44610a12565b565b91908203918211610a3c57565b15610a5a57565b60405162461bcd60e51b815260206004820152602a60248201527f4c69717569646974794c6f636b65723a206e6f20657468657220746f20616464604482015269206c697175696469747960b01b6064820152608490fd5b50634e487b7160e01b600052604160045260246000fd5b6040810190811067ffffffffffffffff821117610ae557604052565b610aed610ab2565b604052565b6080810190811067ffffffffffffffff821117610ae557604052565b90601f8019910116810190811067ffffffffffffffff821117610ae557604052565b90816020910312610110575190565b506040513d6000823e3d90fd5b15610b5357565b60405162461bcd60e51b815260206004820152603260248201527f4c69717569646974794c6f636b65723a206e6f20746f6b656e2062616c616e636044820152716520746f20616464206c697175696469747960701b6064820152608490fd5b9081602091031261011057516001600160a01b03811681036101105790565b90816020910312610110575180151581036101105790565b60405190610bf782610ac9565b601382527236382a37b5b2b72830b4b920b2323932b9b99d60691b6020830152565b9060648201809211610a3c57565b90816060910312610110578051916040602083015192015190565b15610c4957565b60405162461bcd60e51b815260206004820152603460248201527f4c69717569646974794c6f636b65723a2063757272656e742074696d65206973604482015273206265666f72652072656c656173652074696d6560601b6064820152608490fd5b15610cb257565b60405162461bcd60e51b815260206004820152602860248201527f4c69717569646974794c6f636b65723a206e6f204c5020746f6b656e7320746f6044820152672072656c6561736560c01b6064820152608490fd5b60405163a9059cbb60e01b60208083019182526001600160a01b03948516602484015260448084019690965294825290929091610d4484610af2565b169060405192610d5384610ac9565b8484527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656485850152823b15610dc457610d9f939260009283809351925af1610d99610e68565b90610ef6565b80519081610dac57505050565b82610a4493610dbf938301019101610bd2565b610e09565b60405162461bcd60e51b815260048101869052601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b15610e1057565b60405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608490fd5b3d15610eb1573d9067ffffffffffffffff8211610ea4575b60405191610e98601f8201601f191660200184610b0e565b82523d6000602084013e565b610eac610ab2565b610e80565b606090565b919082519283825260005b848110610ee2575050826000602080949584010152601f8019910116010190565b602081830181015184830182015201610ec1565b90919015610f02575090565b815115610f125750805190602001fd5b60405162461bcd60e51b815260206004820152908190610f36906024830190610eb6565b0390fd5b15610f4157565b60405162461bcd60e51b815260206004820152602560248201527f4c69717569646974794c6f636b65723a206e6f20746f6b656e7320746f2072656044820152646c6561736560d81b6064820152608490fd5b600091908291610fe46040518092610fc5602083019563319af33360e01b8752604060248501526064840190610eb6565b6001600160a01b0391909116604483015203601f198101835282610b0e565b51906a636f6e736f6c652e6c6f675afa5056fea2646970667358221220d08833887dbeccda430c7a6fd29e781130637ef4d69f151afbf07e75277d0ba664736f6c63430008110033";

type LiquidityLockerTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LiquidityLockerTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LiquidityLockerTest__factory extends ContractFactory {
  constructor(...args: LiquidityLockerTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    dexRouterAddress: PromiseOrValue<string>,
    token: PromiseOrValue<string>,
    owner: PromiseOrValue<string>,
    price: PromiseOrValue<BigNumberish>,
    releaseTime: PromiseOrValue<BigNumberish>,
    liquidityPercentOfRaisedFunds: PromiseOrValue<BigNumberish>,
    maxRaisedFunds: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LiquidityLockerTest> {
    return super.deploy(
      dexRouterAddress,
      token,
      owner,
      price,
      releaseTime,
      liquidityPercentOfRaisedFunds,
      maxRaisedFunds,
      overrides || {}
    ) as Promise<LiquidityLockerTest>;
  }
  override getDeployTransaction(
    dexRouterAddress: PromiseOrValue<string>,
    token: PromiseOrValue<string>,
    owner: PromiseOrValue<string>,
    price: PromiseOrValue<BigNumberish>,
    releaseTime: PromiseOrValue<BigNumberish>,
    liquidityPercentOfRaisedFunds: PromiseOrValue<BigNumberish>,
    maxRaisedFunds: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      dexRouterAddress,
      token,
      owner,
      price,
      releaseTime,
      liquidityPercentOfRaisedFunds,
      maxRaisedFunds,
      overrides || {}
    );
  }
  override attach(address: string): LiquidityLockerTest {
    return super.attach(address) as LiquidityLockerTest;
  }
  override connect(signer: Signer): LiquidityLockerTest__factory {
    return super.connect(signer) as LiquidityLockerTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LiquidityLockerTestInterface {
    return new utils.Interface(_abi) as LiquidityLockerTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LiquidityLockerTest {
    return new Contract(address, _abi, signerOrProvider) as LiquidityLockerTest;
  }
}
