var Service = require("./service");

var wish = {
	"head": "002",
	"content": "hello kitty",
	"name": "002",
	"orderId": "9876541233",
}
var obj = {
	"setPhone": "002",
	"phone": "1881802046",
	"wishes": [wish],
	"flowerShop": "yuanqi"
}

var callback = function(err, res){
	if(err){
		console.log(err);
	}else{
		console.log(res);
	}
}

// Service.createWish(obj, callback);
// Service.readWishByPhoneAndShop("002", "yuanqi", callback);
// Service.readWishBySetPhoneAndShop("002", "yuanqi", callback);
// Service.deleteWish("18500132617", "18500132617", "RoseToMe", "1234567");
// Service.readOrderIds("98765412331881802046", obj, callback);
Service.updateWish("18500132617", "123456766", obj, callback);