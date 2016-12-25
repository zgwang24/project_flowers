/**
* test file
* @Auther: zgwang
* @Date: 2016.11.15
*/
var client = require("./client_flowers");

/*client.createWish("jingdong", "110", "18810802046", "13522685889","Lily", "Wish for you and love you.", "Ace", "yuanqi",new function(){
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

/*client.readWish("18810802046", "yuanqi", new function(){
	this.successCallback = function(message) {
		console.log("succeed" + JSON.stringify(message));
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
/*client.readWishBySetPhone("13522685887", "yuanqi", new function(){
	this.successCallback = function(message) {
		console.log("succeed" + JSON.stringify(message));
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
/*client.register("18810802046", "123456", new function(){
	this.successCallback = function(message){
		console.log("succeed: " + message);
	};
	this.errorCallback = function(message){
		console.log("failed: " + message);
	};
	this.connectCallback = function(message) {
		console.log('connectSucceed: ' + message);
	};
	this.disconnectCallback = function(message) {
		console.log('disconnect: ' + message);
	};
	this.socketErrorCallback = function(message) {
		console.log('socketError: ' + message);
	};
	this.newMessageCallback = function(message){
		console.log('newMessages: ' + message);
	};
});*/
/*client.login("18810802046", "1234567", new function(){
	this.successCallback = function(message){
		console.log("succeed: " + message);
	};
	this.errorCallback = function(message){
		console.log("failed: " + message);
	};
	this.connectCallback = function(message) {
		console.log('connectSucceed: ' + message);
	};
	this.disconnectCallback = function(message) {
		console.log('disconnect: ' + message);
	};
	this.socketErrorCallback = function(message) {
		console.log('socketError: ' + message);
	};
	this.newMessageCallback = function(message){
		console.log('newMessages: ' + message);
	};
});*/

/*client.update("18810802046", "123456", new function(){
	this.successCallback = function(message){
		console.log("succeed: " + message);
	};
	this.errorCallback = function(message){
		console.log("failed: " + message);
	};
	this.connectCallback = function(message) {
		console.log('connectSucceed: ' + message);
	};
	this.disconnectCallback = function(message) {
		console.log('disconnect: ' + message);
	};
	this.socketErrorCallback = function(message) {
		console.log('socketError: ' + message);
	};
	this.newMessageCallback = function(message){
		console.log('newMessages: ' + message);
	};
});*/
/*client.send("18810802046", new function(){
	this.successCallback = function(message){
		console.log("succeed: " + message);
	};
	this.errorCallback = function(message){
		console.log("failed: " + message);
	};
	this.connectCallback = function(message) {
		console.log('connectSucceed: ' + message);
	};
	this.disconnectCallback = function(message) {
		console.log('disconnect: ' + message);
	};
	this.socketErrorCallback = function(message) {
		console.log('socketError: ' + message);
	};
	this.newMessageCallback = function(message){
		console.log('newMessages: ' + message);
	};
});*/
/*client.loginMessage("18810802046", "yuanqi shop",new function(){
	this.successCallback = function(message){
		console.log("succeed: " + message);
	};
	this.errorCallback = function(message){
		console.log("failed: " + message);
	};
	this.connectCallback = function(message) {
		console.log('connectSucceed: ' + message);
	};
	this.disconnectCallback = function(message) {
		console.log('disconnect: ' + message);
	};
	this.socketErrorCallback = function(message) {
		console.log('socketError: ' + message);
	};
	this.newMessageCallback = function(message){
		console.log('newMessages: ' + message);
	};
});*/

client.registerMessage("18810802046", "yuanqi shop",new function(){
	this.successCallback = function(message){
		console.log("succeed: " + message);
	};
	this.errorCallback = function(message){
		console.log("failed: " + message);
	};
	this.connectCallback = function(message) {
		console.log('connectSucceed: ' + message);
	};
	this.disconnectCallback = function(message) {
		console.log('disconnect: ' + message);
	};
	this.socketErrorCallback = function(message) {
		console.log('socketError: ' + message);
	};
	this.newMessageCallback = function(message){
		console.log('newMessages: ' + message);
	};
});

/*client.identityMessage("18810802046", "yuanqi shop",new function(){
	this.successCallback = function(message){
		console.log("succeed: " + message);
	};
	this.errorCallback = function(message){
		console.log("failed: " + message);
	};
	this.connectCallback = function(message) {
		console.log('connectSucceed: ' + message);
	};
	this.disconnectCallback = function(message) {
		console.log('disconnect: ' + message);
	};
	this.socketErrorCallback = function(message) {
		console.log('socketError: ' + message);
	};
	this.newMessageCallback = function(message){
		console.log('newMessages: ' + message);
	};
});*/

/*client.updateMessage("18810802046", "yuanqi shop",new function(){
	this.successCallback = function(message){
		console.log("succeed: " + message);
	};
	this.errorCallback = function(message){
		console.log("failed: " + message);
	};
	this.connectCallback = function(message) {
		console.log('connectSucceed: ' + message);
	};
	this.disconnectCallback = function(message) {
		console.log('disconnect: ' + message);
	};
	this.socketErrorCallback = function(message) {
		console.log('socketError: ' + message);
	};
	this.newMessageCallback = function(message){
		console.log('newMessages: ' + message);
	};
});*/