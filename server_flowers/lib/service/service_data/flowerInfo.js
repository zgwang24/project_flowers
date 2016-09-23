/**
* options about flower`s wishes
* @Auther: zgwang
* @Date: 2015.9.16
*/

var mongoose = require('./mongodb');
var Schema = mongoose.Schema;
// database schema
var wish = new Schema({
	head: String,
	content: String,
	name: String,
	date: {
		type: Date,
		default: Date.now
	},
	orderId: String
});
var flowerSchema = new Schema({	
	phone: String,
	wishes: [wish],
	flowerShop: String
});

var flowerInfoModel = mongoose.model('flowerShops', flowerSchema);
var FlowerInfo = function(){};
var flowerInfoInstance = null;

// create wish
FlowerInfo.prototype.createWish = function(obj, callback){
	flowerInfoModel.findOne({phone: obj.phone, flowerShop: obj.flowerShop}, 
		function(err, res){
		if(err){
			console.log(err + "Read in error.");
		}else{
			if(res == null){
				console.log("No record, you need create a record.");
				flowerInfoInstance = new flowerInfoModel(obj);
				flowerInfoInstance.save(callback);
			}else{
				console.log("Need update a record.")
				res.wishes.push(obj.wishes[0]);
				res.save(callback);
			}
		}
	});
	
};
// read wish
FlowerInfo.prototype.readWishByPhoneAndShop = function(phone, flowerShop, callback){
	flowerInfoModel.findOne({phone: phone, flowerShop: flowerShop}, 
		function(err, res){
		if(err){
			console.log(err + "Read in error.");
		}else{
			if(res == null){
				callback(err, res);
			}else{
				callback(err, res.wishes.reverse());
			}
			
		}
	});
};

module.exports = new FlowerInfo();