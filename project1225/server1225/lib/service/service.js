/**
* service about flowers
* @Auther: zgwang
* @Date:2016.11.6
*/

var flowerInfo = require("./service_data/flowerInfo");
var userInfo = require("./service_data/userInfo");

var Service = function(){};

Service.prototype.createWish = function(obj, callback) {
	flowerInfo.createWish(obj, callback);	
};

Service.prototype.readWishByPhoneAndShop = function(phone, flowerShop, callback){
	flowerInfo.readWishByPhoneAndShop(phone, flowerShop, callback);
}
Service.prototype.readWishBySetPhoneAndShop = function(setPhone, phone, flowerShop, callback){
	flowerInfo.readWishBySetPhoneAndShop(setPhone, phone, flowerShop, callback);
}

Service.prototype.createUser = function(obj, callback){
	userInfo.createUser(obj, callback);
}

Service.prototype.readUser = function(obj, callback){
	userInfo.readUser(obj.phone, function(err, res){
		if(err){
			callback(err, res);
		}else{
			if(res != null && res.password == obj.password){
				res = "verifySucceed";
				callback(err, res);
			}else{
				res = "verifyFailed";
				callback(err, res);
			}
		}
	});
}

Service.prototype.updateUser = function(obj, callback){
	userInfo.updateUser(obj, callback);
}

Service.prototype.deleteUser = function(phone, callback){
	userInfo.deleteUser(phone, callback);
}
exports = module.exports = new Service();