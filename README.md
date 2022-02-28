# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
npm i @openzeppelin/contracts

npx create-react-app my-app
cd my-app
npm start

# How to test

### start local blockchain node
npx hardhat node

### Load in metamask an account from hardhat
import account

settings -> advanced -> reset account

### Testing Addresses
address 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
use pk 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80

address 0x70997970c51812dc3a010c7d01b50e0d17dc79c8
0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d

address 0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc
0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a

### Add network
- localhost
- http://127.0.0.1:8545
- 31337

### Add in hardhat.config.js
networks: {
    hardhat: {
      chainId: 31337
    },
  }

### Deploy contract n locl blockchain
npx hardhat run --network localhost scripts/deploy.js

owner user 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
contract address 0x5FbDB2315678afecb367f032d93F642f64180aa3