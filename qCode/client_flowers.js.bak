/**
* client API
* @Auther: zgwang
* @Date: 2016.09.16
*/

// var io = require('socket.io-client');
var socket = null;

var client = {};

client['createWish'] = createWish;
client['readWish'] = readWish;

// connect method
function connect(callback){ 
	// ip and port, you should change the ip address by yourself.
	socket = io.connect("http://43.242.35.62:8123/flower"); 
	// socket = io.connect("http://10.107.30.184:8123/flower"); 
	
	socket.on('connection',function(){
		callback.connectCallback();
	});
	
	socket.on('disconnect',function(){
		callback.disconnectCallback();
	});
	
	socket.on('error',function(object){
		callback.socketErrorCallback(object);
	});
	
	socket.connect();
}

/**
 * This function is used to create a wish.
 */
function createWish(phone, flowerShop, orderId, head, content, name, callback){
	connect(callback);

	var wish = {};
	wish.orderId = orderId;
	wish.head = head;
	wish.content = content;
	wish.name = name;

	var obj = {};
	obj.phone = phone;
	obj.wishes = [wish];
	obj.flowerShop = flowerShop; 

	socket.emit("createWish", obj);

	socket.on("createWishSucceed", function(object){
		callback.successCallback(object);
	});
	socket.on("createWishFailed", function(object){
		callback.errorCallback(object);
	});
}

/**
* This function is used to read a wish.
*/
function readWish(phone, flowerShop, callback){
	connect(callback);

	var obj = {};
	obj.phone = phone;
	obj.flowerShop = flowerShop;
	socket.emit("readWish", obj);

	socket.on('readWishSucceed', function(object){
		callback.successCallback(object);
	});
	socket.on('readWishFailed', function(object){
		callback.errorCallback(object);
	});
}

// module.exports = client;