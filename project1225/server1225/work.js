/**
* open APIs	
* @auther: zgwang
* @date: 2016.11.5
*/

var service = require("./lib/service/service");
var message = require("./lib/service/sendMessage");
var sSocket = null;

function work(io){
	sSocket = io;
	sSocket && (function() {
		sSocket.of("/flower").on('connection', function(cSocket) {
			console.log("connect success.");
	
			var authTimer = setTimeout(function() {
				cSocket.disconnect();
				console.log(cSocket.id + "disconnect");
			}, 10000);
			// read a wish.
			cSocket.on('readWish', function(obj) {
				clearTimeout(authTimer);
				// read wishes by phone and shop.
				service.readWishByPhoneAndShop(obj.phone, obj.flowerShop, function(err, res) {
					var socketConnect = sSocket.of('/flower').connected[cSocket.id];
					if (res) {			
						socketConnect && socketConnect.emit('readWishSucceed', res);
						console.log(res);
					} else {
						socketConnect && socketConnect.emit('readWishFailed', err);
					 	console.log(err);
					}
				});
			});
			// read a wish by setPhone.
			cSocket.on('readWishBySetPhone', function(obj) {
				clearTimeout(authTimer);
				// read wishes by phone and shop.
				service.readWishBySetPhoneAndShop(obj.setPhone, obj.phone, obj.flowerShop, function(err, res) {
					var socketConnect = sSocket.of('/flower').connected[cSocket.id];
					if (res) {				
						socketConnect && socketConnect.emit('readWishBySetPhoneSucceed', res);
						console.log(res);
					} else {
						socketConnect && socketConnect.emit('readWishBySetPhoneFailed', err);
					 	console.log(err);
					}
				});
			});
			// create a wish.
			cSocket.on('createWish', function(obj){
				clearTimeout(authTimer);
				// create a wish
				service.createWish(obj, function(err, res){
					var socketConnect = sSocket.of('/flower').connected[cSocket.id];
					if (res) {				
						socketConnect && socketConnect.emit('createWishSucceed', res);
						console.log(res);
					} else {
						socketConnect && socketConnect.emit('createWishFailed', err);
					 	console.log(err);
					}
				});
			});
			cSocket.on('register', function(obj){
				clearTimeout(authTimer);
				service.createUser(obj, function(err, res){
					var socketConnect = sSocket.of('/flower').connected[cSocket.id];
					if (res) {				
						socketConnect && socketConnect.emit('createUserSucceed', res);
						console.log(res);
					} else {
						socketConnect && socketConnect.emit('createUserFailed', err);
					 	console.log(err);
					}
				});
			});
			cSocket.on('login', function(obj){
				clearTimeout(authTimer);
				service.readUser(obj, function(err, res){
					var socketConnect = sSocket.of('/flower').connected[cSocket.id];
					if (res == "verifySucceed") {				
						socketConnect && socketConnect.emit('readUserSucceed', res);
						console.log(res);
					} else {
						socketConnect && socketConnect.emit('readUserFailed', err);
					 	console.log(err);
					}
				});
			});
			cSocket.on('update', function(obj){
				clearTimeout(authTimer);
				service.updateUser(obj, function(err, res){
					var socketConnect = sSocket.of('/flower').connected[cSocket.id];
					if (res) {				
						socketConnect && socketConnect.emit('updateUserSucceed', res);
						console.log(res);
					} else {
						socketConnect && socketConnect.emit('updateUserFailed', err);
					 	console.log(err);
					}
				});
			});
			cSocket.on('loginMessage', function(data){
				clearTimeout(authTimer);
				message.loginMessage(data.phone, data.product, function(res){
					var socketConnect = sSocket.of('/flower').connected[cSocket.id];			
					socketConnect && socketConnect.emit('loginMessageSucceed', res);
					console.log(res);
				});
			});
			cSocket.on('registerMessage', function(data){
				clearTimeout(authTimer);
				message.registerMessage(data.phone, data.product, function(res){
					var socketConnect = sSocket.of('/flower').connected[cSocket.id];			
					socketConnect && socketConnect.emit('registerMessageSucceed', res);
					console.log(res);
				});
			});
			cSocket.on('identityMessage', function(data){
				clearTimeout(authTimer);
				message.identityMessage(data.phone, data.product, function(res){
					var socketConnect = sSocket.of('/flower').connected[cSocket.id];			
					socketConnect && socketConnect.emit('identityMessageSucceed', res);
					console.log(res);
				});
			});
			cSocket.on('updateMessage', function(data){
				clearTimeout(authTimer);
				message.updateMessage(data.phone, data.product, function(res){
					var socketConnect = sSocket.of('/flower').connected[cSocket.id];			
					socketConnect && socketConnect.emit('updateMessageSucceed', res);
					console.log(res);
				});
			});
			// disconnect
			cSocket.on('disconnect', function() {
				clearTimeout(authTimer);				
			});
			// error
			cSocket.on('error', function() {
				console.log('error');
			});
		});
	})();
};


exports = module.exports = work;