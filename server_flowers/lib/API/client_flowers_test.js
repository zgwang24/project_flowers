/**
* test file
* @Auther: zgwang
* @Date: 2016.09.16
*/
var client = require("./client_flowers");

/*client.createWish("13522685887", "yuanqi", "10087", "Lily", "Wish for you and love you", "Ace", new function(){
	this.successCallback = function(message) {
		console.log("succeed" + message);
	};
	this.errorCallback = function(message) {
		console.log("failed" + message);
	};
	this.connectCallback = function(message) {
		console.log('connectSucceed' + message);
	};
	this.disconnectCallback = function(message) {
		console.log('disconnect' + message);
	};
	this.socketErrorCallback = function(message) {
		console.log('socketError' + message);
	};
	this.newMessageCallback = function(message){
		console.log('newMessages' + message);
	};
});*/

client.readWish("13522685887", "yuanqi", new function(){
	this.successCallback = function(message) {
		console.log("succeed" + message);
	};
	this.errorCallback = function(message) {
		console.log("failed" + message);
	};
	this.connectCallback = function(message) {
		console.log('connectSucceed' + message);
	};
	this.disconnectCallback = function(message) {
		console.log('disconnect' + message);
	};
	this.socketErrorCallback = function(message) {
		console.log('socketError' + message);
	};
	this.newMessageCallback = function(message){
		console.log('newMessages' + message);
	};
});