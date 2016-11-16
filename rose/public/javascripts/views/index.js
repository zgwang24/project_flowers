$(document).ready(function(){
	$('#button_1').click(function(){
		loginMessage("18810802046", "元气花铺", new function(){
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
				console.log('newMessages：' + JSON.stringify(message));	
			};
		});
	});
});