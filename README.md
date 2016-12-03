# Cyann (Backend)
[![Build Status](https://travis-ci.org/Cyann-UBC/Cyann.svg?branch=master)](https://travis-ci.org/Cyann-UBC/Cyann)
[![Coverage Status](https://coveralls.io/repos/github/Cyann-UBC/Cyann/badge.svg?branch=master)](https://coveralls.io/github/Cyann-UBC/Cyann?branch=master)

Node.js + MongoDB server used to provide backend API service for **Cyann** [Mobile](https://github.com/Cyann-UBC/cyann_mobile) & [Web](https://github.com/Howard-Zhou/cyann_front) Application.

## Getting Started

### Prerequisites
Before you proceed, ensure that you have the following installed on your local machine:
- Node.js & npm *([How to install?](https://docs.npmjs.com/getting-started/installing-node))*
- MongoDB *([How to install?](https://docs.mongodb.com/v3.2/installation/))*

### Installing dependencies
Clone the repository to your local machine & install all the dependencies
```
$ git clone https://github.com/Howard-Zhou/Cyann.git
$ cd ./Cyann
$ npm install
```

## Firing up our Server

### Deploy
Before you run the server, start the MongoDB process and run it in the background (default url: localhost:27017)
``` 
$ mongod
```
Now open a new tab in your terminal & run the Node.js server (default url: localhost:8080)
```
$ npm start
```

### Development
Run the server + automatically restart the server after file changes with [Nodemon](https://github.com/remy/nodemon)
``` 
$ npm server-watch
```
Run the test suite + automatically rerun the entire test suite after file changes with [Nodemon](https://github.com/remy/nodemon)
```
$ npm test-watch
```

### Testing
Run the entire test suite
``` 
$ npm test
```
Generate test coverage report with [Istanbul](https://github.com/gotwarlost/istanbul)
```
$ npm run coverage
```

## API Documentation
Please refer to the API documentation located in [Cyann/doc](https://github.com/Cyann-UBC/Cyann/tree/master/docs) for details.

## Opening Issues
If you encounter a bug with Cyann (Backend) we would like to hear about it. Search the existing issues and try to make sure your problem doesn’t already exist before opening a new issue. It’s helpful if you include the version and OS you’re using. Please include a stack trace and reduced repro case when appropriate, too.
