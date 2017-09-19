# ICO-compiler
For a live demo, see http://www.icocompiler.com. This simple app allows anyone with an Ethereum account and some Ether to deploy their own crowdsale contract with no coding knowledge (the user only enters some basic information such as their token name and symbol, and their crowdsale contract is deployed on the Ethereum network). See ICO.sol in the /contracts directory for the contract that is deployed - you can see the constructor function takes some basic parameters to set the characteristics of the token when the contract is deployed. ICO.sol is an ERC20 compliant token contract that uses SafeMath.sol from OpenZeppelin to protect against overflow/underflow attacks. It also transfers all Ether it receives to the address that deployed it, and accepts an unlimited amount of Ether.

Rather than generating the ABI and bytecode of ICO.sol each time time a contract is deployed, the ABI and bytecode are simply hardcoded in the app.js file. The Web3 Javascript library is used to allow the webpage to deploy and interact with contracts.

## How to deploy
Simply upload the /build folder to a webserver. No configuration is necessary.

## How to play around with this yourself
Install truffle with webpack and cd to an empty directory

`truffle init webpack`

Copy the contents of the /app and /contracts directories in this repository to those folders in your truffle project

Edit migrations/2_deploy_contracts.js so it deploys ICO.sol, eg:

`var ICO = artifacts.require("./ICO.sol");
module.exports = function(deployer) {
  deployer.deploy(ICO);
};`

Then after making any changes to the /app folder, build the project with

`npm run build`

This will generate a /build folder that's ready to be used. To test the app on localhost:8080, run

`npm run dev`
