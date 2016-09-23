/**
* service about flowers
* @Auther: zgwang
* @Date:2016.09.16
*/

var flowerInfo = require("./service_data/flowerInfo");

var Service = function(){};

Service.prototype.createWish = function(obj, callback) {
	flowerInfo.createWish(obj, callback);	
};

Service.prototype.readWishByPhoneAndShop = function(phone, flowerShop, callback){
	flowerInfo.readWishByPhoneAndShop(phone, flowerShop, callback);
}

module.exports = new Service();