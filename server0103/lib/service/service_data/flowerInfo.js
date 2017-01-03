/**
* options about flower`s wishes
* @auther: zgwang
* @date: 2016.11.11
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
	plateform: String,
	orderId: String,
	getPhone: String,
	order: String,
});
var flowerSchema = new Schema({	
	setPhone: String,
	phone: String,
	wishes: [wish],
	flowerShop: String
});

var flowerInfoModel = mongoose.model('wishinfos', flowerSchema);
var FlowerInfo = function(){};
var flowerInfoInstance = null;

// create wish
FlowerInfo.prototype.createWish = function(obj, callback){
	flowerInfoModel.findOne({setPhone: obj.setPhone, phone: obj.phone, flowerShop: obj.flowerShop}, 
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
	flowerInfoModel.find({phone: phone, flowerShop: flowerShop}, 
		function(err, res){
		if(err){
			console.log(err + "Read in error.");
		}else{
			if(res == null){
				callback(err, res);
			}else{
				var result = new Array();
				for(var i = 0; i < res.length; i++){
					for(var j = 0;j < res[i].wishes.length; j++){
						result.push(res[i].wishes[j]);
					}
				}
				callback(err, result.reverse());
			}			
		}
	});
};
// read wisher by setPhone
FlowerInfo.prototype.readWishBySetPhoneAndShop = function(setPhone, phone, flowerShop, callback){
	if(phone == null){
		flowerInfoModel.find({setPhone: setPhone, flowerShop: flowerShop}, 
			function(err, res){
			if(err){
				console.log(err + "read by setPhone in error.");
			}else{
				if(res == null){
					callback(err, res);
				}else{
					var result = new Array();
					for(var i = 0; i < res.length; i++){
						for(var j = 0;j < res[i].wishes.length; j++){
							result.push(res[i].wishes[j]);
						}
					}
					callback(err, result.reverse());
				}
				
			}
		});
	}else{
		flowerInfoModel.find({setPhone: setPhone, phone: phone, flowerShop: flowerShop}, 
			function(err, res){
			if(err){
				console.log(err + "read by setPhone in error.");
			}else{
				if(res == null){
					callback(err, res);
				}else{
					var result = new Array();
					for(var i = 0; i < res.length; i++){
						for(var j = 0;j < res[i].wishes.length; j++){
							result.push(res[i].wishes[j]);
						}
					}
					callback(err, result.reverse());
				}
			}
		});
	}	
};

// delete a wish
FlowerInfo.prototype.deleteWish = function(setPhone, phone,
	flowerShop, orderId, callback){
	flowerInfoModel.findOne({setPhone: setPhone, phone: phone, flowerShop: flowerShop}, 
			function(err, res){
			if(err){
				console.log(err + "read by setPhone in error.");
			}else{
				if(res == null){
					callback(err, res);
				}else{
					for(var i = 0; i < res.wishes.length; i++){
						console.log(res.wishes[i]);
						if(res.wishes[i].orderId == orderId){
							res.wishes.splice(i, 1);
						}
					}
					res.save(callback);
				}
			}
		});
}
// read orderIds
FlowerInfo.prototype.readOrderIds = function(orderId, callback){
	flowerInfoModel.find({}, function(err, res){
		if(err){
			console.log(err + "read orderIds in error.");
		}else{
			if(res == null){
				callback(err, res);
			}else{
				var array = new Array();
				for(var i = 0; i < res.length; i++){
					for(var j = 0; j < res[i].wishes.length; j++){
						array.push(res[i].wishes[j].orderId);
					}
				}
				var result = array.indexOf(orderId);
				callback(err, result);
			}
		}
	})
}
module.exports = new FlowerInfo();