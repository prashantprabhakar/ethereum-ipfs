'use strict'


var express = require('express'),
	router = express.Router(),
	controller = require('./api.controller');


//router.post('/add', controller.add);
router.post('/whoIsGreat',controller.whoIsGreat);
router.post('/ipfs-info', controller.info)
//router.post('/printAllTransactions', controller.printAllTransactions);
//router.post('/multiply',controller.multiply);
//router.post('/watchTransaction',controller.watchTransaction);
module.exports = router;
