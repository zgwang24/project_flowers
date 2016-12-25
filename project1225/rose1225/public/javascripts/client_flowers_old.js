/**
* client API
* @Auther: zgwang
* @Date: 2016.11.11
*/

// var io = require('socket.io-client');
var socket = null;

var client = {};

client['createWish'] = createWish;
client['readWish'] = readWish;
client['register'] = register;
client['login'] = login;
client['update'] = update;
client['send'] = send;
client['loginMessage'] = loginMessage;
client['registerMessage'] = registerMessage;
client['identityMessage'] = identityMessage;
client['updateMessage'] = updateMessage;

// connect method
function connect(callback){ 
	// ip and port, you should change the ip address by yourself.
	socket = io.connect("http://10.107.31.156:8123/flower"); 
	
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
function createWish(plateform, orderId, phone, head, content, name, 
	flowerShop, callback){
	connect(callback);

	var wish = {};
	wish.plateform = plateform;
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

/**
* This function is used to create a user.
*/
function register(phone, password, callback){
	connect(callback);

	var obj = {};
	obj.phone = phone;
	obj.password = password;
	socket.emit("register", obj);

	socket.on('createUserSucceed', function(object){
		callback.successCallback(object);
	});
	socket.on('createUserFailed', function(object){
		callback.errorCallback(object);
	});
}

/**
* This function is used to read a user.
*/
function login(phone, password, callback){
	connect(callback);

	var obj = {};
	obj.phone = phone;
	obj.password = password;
	socket.emit("login", obj);

	socket.on('readUserSucceed', function(object){
		callback.successCallback(object);
	});
	socket.on('readUserFailed', function(object){
		callback.errorCallback(object);
	});
}

/**
* This function is used to update a user.
*/
function update(phone, password, callback){
	connect(callback);

	var obj = {};
	obj.phone = phone;
	obj.password = password;
	socket.emit("update", obj);

	socket.on('updateUserSucceed', function(object){
		callback.successCallback(object);
	});
	socket.on('updateUserFailed', function(object){
		callback.errorCallback(object);
	});
}

/**
* This function is used to send a message.
*/
function send(phone, callback){
	connect(callback);

	socket.emit("sendMessage", phone);

	socket.on('sendMessageSucceed', function(object){
		callback.successCallback(object);
	});
}

/**
* This function is used to send a message about login.
*/
function loginMessage(phone, product, callback){
	connect(callback);

	var data = {};
	data.phone = phone;
	data.product = product;

	socket.emit("loginMessage", data);

	socket.on('loginMessageSucceed', function(object){
		callback.successCallback(object);
	});
}

/**
* This function is used to send a message about register.
*/
function registerMessage(phone, product, callback){
	connect(callback);

	var data = {};
	data.phone = phone;
	data.product = product;

	socket.emit("registerMessage", data);

	socket.on('registerMessageSucceed', function(object){
		callback.successCallback(object);
	});
}

/**
* This function is used to send a message about identity.
*/
function identityMessage(phone, product, callback){
	connect(callback);

	var data = {};
	data.phone = phone;
	data.product = product;

	socket.emit("identityMessage", data);

	socket.on('identityMessageSucceed', function(object){
		callback.successCallback(object);
	});
}

/**
* This function is used to send a message about update.
*/
function updateMessage(phone, product, callback){
	connect(callback);

	var data = {};
	data.phone = phone;
	data.product = product;

	socket.emit("updateMessage", data);

	socket.on('updateMessageSucceed', function(object){
		callback.successCallback(object);
	});
}

// exports = module.exports = client;