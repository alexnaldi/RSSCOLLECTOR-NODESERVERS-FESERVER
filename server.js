'use strict'

const AbstractServer = require('abstract-server')
const express = require('express');
const path = require('path');

class FeServer extends AbstractServer{
	constructor() {
		super();
	}
}

/*Initialization*/
var feServer= new FeServer();

var serverInstance = feServer.getServerInstance();

var logger = feServer.getLoggerInstance();

/* Point static path to dist */
serverInstance.use(express.static(path.join(__dirname, 'dist')));

/*Starting the server*/
serverInstance.listen(process.env.PORT, function () {
  logger.info(`${process.env.TYPE_ENV} listening on port ${process.env.PORT}!`);
});
