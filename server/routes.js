'use strict'

module.exports = function(app) {
	app.use('/eth-ipfs', require('./api/index'));
}