'use strict'

const AbstractServer = require('abstract-server')

class FeServer extends AbstractServer{
	constructor() {
		super();
	}
}

/*Initialization*/
var feServer= new FeServer();

var serverInstance = feServer.getServerInstance();

var logger = feServer.getLoggerInstance();


/*Starting the server*/
serverInstance.listen(process.env.PORT, function () {
  logger.info(`${process.env.TYPE_ENV} listening on port ${process.env.PORT}!`);
});
