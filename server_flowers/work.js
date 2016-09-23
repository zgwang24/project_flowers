/**
* 登录、注册、订阅、发布等功能的对外API	
* @Auther: xufei,zgwang
* @Date: 2016.5.16
*/

var service = require("./lib/service/service");
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
				})
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


module.exports = exports = work;