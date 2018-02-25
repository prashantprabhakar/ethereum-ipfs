'use strict'

//var contract = require('./contractDetails');


var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8013'));

var TransactionService = require('./../services/transaction.service');
var Transaction = require('./../models/transaction.model');


//
const IPFS = require('ipfs');
const node = new IPFS()


node.on('ready', () => {
  // Your node is now ready to use \o/
	node.id((err, id) => {
        if (err) {
            return console.log(err)
        }
        console.log(id)
    })

  // stopping a node
  node.stop(() => {
    // node is now 'offline'
  })
})

// say my name
exports.whoIsGreat = function(req, res){
	return res.json("Prashant Prabhakar Singh");
}


// check transaction status without DB.
/*	exports.checkTransactionStatus = function(req,res){
		var transactionId = req.body.transactionid;
		console.log(transactionId);
		try{
			var txReciept = web3.eth.getTransactionReceipt(transactionId);
			if(txReciept == null || txReciept == undefined)
				return res.json({"success":"true", "data":[{"transactionStatus":"Pending"}]});
			else
				return res.json({"success":"true", "data":[{"transactionStatus":"Pending"}]});
			}
		catch(e) {
  		 console.log("invalid tx receipt: " + e);
  		 return res.json({"success":"false","data":[{"message":"Incorrect transaction hash"}]});

		}	

	}*/