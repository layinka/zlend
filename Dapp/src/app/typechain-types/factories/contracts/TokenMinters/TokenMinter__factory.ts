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
  TokenMinter,
  TokenMinterInterface,
} from "../../../contracts/TokenMinters/TokenMinter";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "totalSupply_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "decimal_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimal",
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
    name: "name",
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
    inputs: [],
    name: "owner",
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
    name: "symbol",
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
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523461032a57610847803803806100198161032f565b928339810160808282031261032a5781516001600160401b03919082811161032a5781610047918501610354565b91602091828501519082821161032a57610062918601610354565b9260606040860151950151918151818111610314576000958654916001948584811c9416801561030a575b888510146102f6578190601f948581116102a8575b508890858311600114610249578a9261023e575b5050600019600383901b1c191690851b1787555b805192831161022a5783548481811c91168015610220575b8782101461020c578281116101c9575b5085918311600114610161579180879694926004969460409992610156575b5050600019600383901b1c191690821b1790555b6002556006859055600380546001600160a01b03191633908117909155835252205560405161048790816103c08239f35b015190503880610111565b8387528587209190601f198416885b8181106101b457509285939285926004989660409b9a98951061019b575b505050811b019055610125565b015160001960f88460031b161c1916905538808061018e565b82840151855593860193928801928801610170565b8488528688208380860160051c820192898710610203575b0160051c019085905b8281106101f85750506100f2565b8981550185906101ea565b925081926101e1565b634e487b7160e01b88526022600452602488fd5b90607f16906100e2565b634e487b7160e01b87526041600452602487fd5b0151905038806100b6565b8a8052898b208894509190601f1984168c5b8c8282106102925750508411610279575b505050811b0187556100ca565b015160001960f88460031b161c1916905538808061026c565b8385015186558b9790950194938401930161025b565b909150898052888a208580850160051c8201928b86106102ed575b918991869594930160051c01915b8281106102df5750506100a2565b8c81558594508991016102d1565b925081926102c3565b634e487b7160e01b89526022600452602489fd5b93607f169361008d565b634e487b7160e01b600052604160045260246000fd5b600080fd5b6040519190601f01601f191682016001600160401b0381118382101761031457604052565b919080601f8401121561032a5782516001600160401b03811161031457602090610386601f8201601f1916830161032f565b9281845282828701011161032a5760005b8181106103ac57508260009394955001015290565b858101830151848201840152820161039756fe6080604081815260048036101561001557600080fd5b600092833560e01c90816306fdde03146102fa5750806318160ddd146102db57806370a08231146102a657806376809ce3146102875780638da5cb5b1461025e57806395d89b41146101395763a9059cbb1461007057600080fd5b34610135578160031936011261013557610088610436565b9160243592338552826020528382862054106100fe57338552826020528185208054908582039182116100eb575560018060a01b031684528160205283209081549283018093116100d857505580f35b634e487b7160e01b845260119052602483fd5b634e487b7160e01b875260118552602487fd5b815162461bcd60e51b815260208185015260116024820152704e6f7420656e6f75676820746f6b656e7360781b6044820152606490fd5b8280fd5b5091903461025a578160031936011261025a5780519082600180549081811c90808316928315610250575b602093848410811461023d5783885290811561022157506001146101cc575b505050829003601f01601f191682019267ffffffffffffffff8411838510176101b957508291826101b59252826103ed565b0390f35b634e487b7160e01b815260418552602490fd5b8087529192508591837fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf65b83851061020d5750505050830101388080610183565b8054888601830152930192849082016101f7565b60ff1916878501525050151560051b8401019050388080610183565b634e487b7160e01b895260228a52602489fd5b91607f1691610164565b5080fd5b50503461025a578160031936011261025a5760035490516001600160a01b039091168152602090f35b50503461025a578160031936011261025a576020906002549051908152f35b50346101355760203660031901126101355760209282916001600160a01b036102cd610436565b168252845220549051908152f35b50503461025a578160031936011261025a576020906006549051908152f35b8491508334610135578260031936011261013557828354600181811c908083169283156103e3575b602093848410811461023d578388529081156103c7575060011461037257505050829003601f01601f191682019267ffffffffffffffff8411838510176101b957508291826101b59252826103ed565b8680529192508591837f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5635b8385106103b35750505050830101858080610183565b80548886018301529301928490820161039d565b60ff1916878501525050151560051b8401019050858080610183565b91607f1691610322565b6020808252825181830181905290939260005b82811061042257505060409293506000838284010152601f8019910116010190565b818101860151848201604001528501610400565b600435906001600160a01b038216820361044c57565b600080fdfea26469706673582212202c2804899e098f2387ac5cc56d7a423f32439139d1e5849398aa8e7ef823223464736f6c63430008110033";

type TokenMinterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenMinterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenMinter__factory extends ContractFactory {
  constructor(...args: TokenMinterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    totalSupply_: PromiseOrValue<BigNumberish>,
    decimal_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TokenMinter> {
    return super.deploy(
      name_,
      symbol_,
      totalSupply_,
      decimal_,
      overrides || {}
    ) as Promise<TokenMinter>;
  }
  override getDeployTransaction(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    totalSupply_: PromiseOrValue<BigNumberish>,
    decimal_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name_,
      symbol_,
      totalSupply_,
      decimal_,
      overrides || {}
    );
  }
  override attach(address: string): TokenMinter {
    return super.attach(address) as TokenMinter;
  }
  override connect(signer: Signer): TokenMinter__factory {
    return super.connect(signer) as TokenMinter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenMinterInterface {
    return new utils.Interface(_abi) as TokenMinterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenMinter {
    return new Contract(address, _abi, signerOrProvider) as TokenMinter;
  }
}
