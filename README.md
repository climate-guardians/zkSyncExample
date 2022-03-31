# zkSyncExample

first run 

`yarn install`

Then head to 

`node_modules/@openzeppelin/contracts/utils/Address.sol`

and make sure the **isContract()** function returns **false**

change the `<` to `>` like this:

`return account.code.length > 0;`

Then nstall docker on your system and start it.

After that run

`yarn hardhat compile`

to compile the contracts

Then run

`yarn hardhat deploy-zksync`

To deploy the contracts
