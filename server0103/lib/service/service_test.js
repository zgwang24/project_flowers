var Service = require("./service");

var wish = {
	"head": "002",
	"content": "hello 002, you are great, too.",
	"name": "002",
	"orderId": "1008602",
}
var obj = {
	"setPhone": "002",
	"phone": "002",
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
Service.readOrderIds("12345676", callback);