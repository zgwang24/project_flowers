/**
* mongodb database for service_flowers
* @Auther: zgwang
* @Date: 2016.9.16
*/

var mongoose = require('mongoose');
var options = {
	db: {
		native_parser: true
	},
	server: {
		poolSize: 5
	},
	replset: {
		rs_name: 'myReplicaSetName'
	}
}

mongoose.connect('mongodb://127.0.0.1/flowers', options);
var db = mongoose.connection;

db.on('error', function(error){
	console.log(error);
});
db.once('open', function(err, res){
	if(err){
		console.log(err);
	}else{
		console.log("The mongodb database about flowers connected.");
	}
});

exports = module.exports = mongoose;