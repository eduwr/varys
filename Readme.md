# Contract Analyzer

This is a sample project for Varys Capital.

# Getting started

## Install the dependencies

In the root folder run the command:

```bash
$ npm install
```

## Build the app

### Build

This command compiles the app to javascript into ./build folder
```bash
npm run build
```

## Run the app

### Start

Starts the app from the build folder
```bash
npm start
```
> NOTE: It won't work if the project was not built.


### Dev

Runs the app on development mode
```bash
npm run dev
```

## Available Endpoint

*** Example endpoint
`http://localhost:3001/analyze?code=pragma solidity ^0.8.0; import "@openzeppelin/contracts/token/ERC721/ERC721.sol";import "hardhat/console.sol";contract GreenDAO is ERC721 { string[] public names;mapping(string => bool) public nameExists;modifier uniqueName(string memory _name) { require(!nameExists[_name], "Names must be unique"); _;}constructor() ERC721("GreenDAO", "GREEN") {console.log("Deploying a GreenDAO with `GREEN` symbol.");}}`

parameters:
> code: string;

example response:

```json
{
	"imports": [
		"@openzeppelin/contracts/token/ERC721/ERC721.sol",
		"hardhat/console.sol"
	],
	"contracts": [
		"GreenDAO"
	]
}
```