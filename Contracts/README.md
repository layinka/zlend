# Z Sales Contracts

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat accounts --network meter_testnet
npx hardhat compile
npx hardhat help
npx hardhat test
npx hardhat test --network localhost

npx hardhat node
npx hardhat coverage
npx hardhat run scripts/deploy.ts --network localhost
npx hardhat run scripts/deploy.ts --network meter_testnet
npx hardhat run scripts/deploy-token-minter.ts --network localhost
npx hardhat run scripts/deploy-router.ts --network localhost

GAS_REPORT=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```



# Static Analysis 
```
slither .
```

# Deploy

You can deploy in the localhost network following these steps:

    Start a local node

    npx hardhat node

    Open a new terminal and deploy the smart contract in the localhost network

    npx hardhat run --network localhost scripts/deploy.ts

As general rule, you can target any network configured in the hardhat.config.js

npx hardhat run --network <your-network> scripts/deploy.ts

# Etherscan verification

To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Ropsten.

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your Etherscan API key, your Ropsten node URL (eg from Alchemy), and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
hardhat run --network ropsten scripts/sample-script.ts
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:

```shell
npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS "Hello, Hardhat!"
```

# Performance optimizations

For faster runs of your tests and scripts, consider skipping ts-node's type checking by setting the environment variable `TS_NODE_TRANSPILE_ONLY` to `1` in hardhat's environment. For more details see [the documentation](https://hardhat.org/guides/typescript.html#performance-optimizations).
