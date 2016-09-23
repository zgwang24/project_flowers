var Service = require("./service");

var wish = {
	"head": "Hello Michael Wang",
	"content": "wish for you.",
	"name": "Thomes",
	"orderId": "1008612",
}
var obj = {
	"phone": "18810802000",
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
Service.readWishByPhoneAndShop("18810802046", "yuanqi", callback);
