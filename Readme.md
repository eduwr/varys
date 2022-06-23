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

`http://localhost:3001/analyze`

 body: {
  code: "solidity code here"
 }