"# React-Drizzle-Solidity-Truffle" 

# AOE Decentralized Application
Goal : Build your soldiers and go to war with them !

## How to get started
1- Clone the repository

2- Install all dependencies
- VsCode
- NodeJs
- Git
- Ganache
- Truffle
- Chrome
- Metamask

3- Go to the root folder of the repository, then install modules and truffle
```
npm install -g truffle
npm install
cd app
npm install
```

## How to use it
Developing a dApp (decentralized Application) requires two components : one or several smart contracts and an UI to interact with it.

The first part, developing smart contracts, usually take place on the web ide Remix. The second part is about the UI, generally developed using web3. This boilerplate provides a good way to build simple UI using Drizzle and React, without the complexity of using natively web3.

### Launch the workspace on your local Blockchain with Ganache
First of all we need to bind this project with Ganache using the configuration file truffle-config.js (root folder). Launch Ganache, select new workspace and add the file truffle-config.js in order to bind the project with Ganache.

Once this is done, you should see 10 test accounts listed with 100 ethers provided on each.

In order to test if everything is going fine, enters these command lines in the root folder of the repository:
```
truffle compile
truffle migrate --reset
```
Now open Ganache and check if AOE contract is in the state 'Deployed' in your list of contracts. If not, open the settings of your Ganache > Server and edit your port number to 8545. Then try again, the state should be in 'Deployed' for AOE contract.

### Adding a new contract in the project
1- Develop your smart contract and test it quickly on Remix IDE.

2- Paste it on the contracts folder.

3- Edit the file 2_deploy_contracts.js in the migrations folder and add the lines for deploying your newly added smart contract.

4- Now go on the app/src folder.

5- Edit the file drizzleOptions.js and add the lines for importing and using your newly added smart contract.

6- Compile your smart contract and deploy it on your Ganache with 'truffle compile && truffle migrate --reset'.

### Launching the UI
Using Drizzle to build your smart contract UI is pretty simple but requires to proceed in its logic (along with React's logic).

The UI is launched from the 'App.js' file, which is the container of our components. The working component used in this template is MyComponent.js and it contains all the UI of AOE contract. You can take a look at Drizzle documentation in order to understand the code used here (ContractData, ContractForm and AccountData).

This UI can be launched easily from the app folder, using 'npm start'.

#### Full process summarised
1- Develop and test your smart contract's method on Remix IDE.

2- Import your smart contract in your project.

3- Develop your user interface with React and Drizzle.

4- Enjoy ! 
