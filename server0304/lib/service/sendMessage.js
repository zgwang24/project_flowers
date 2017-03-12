/**
* service about message
* @1uther: zgwang
* @date:2016.11.16
*/

var alidayu = require('alidayu-node');
var app = new alidayu('23514251', 'cd74534b8d8e2cdd44fd4d5af584421a');
var message = new alidayu('23523582', '8578d56caa77b9421824ad06346d34cf');
var Message = function(){};

// test
Message.prototype.sendMessage = function(phone, callback){
	var res = getNumber();
	app.smsSend({
		sms_free_sign_name : "花店",
		sms_param: JSON.stringify({"number": res}),
		rec_num: phone,
		sms_template_code: "SMS_25180272"
	});
	callback(res);
};
// login
Message.prototype.loginMessage = function(phone, product, callback){
	var res = getNumber();
	message.smsSend({
		sms_free_sign_name : "登录验证",
		sms_param: JSON.stringify({"code": res, "product": product}),
		rec_num: phone,
		sms_template_code: "SMS_24945208"
	});
	callback(res);
}
// register
Message.prototype.registerMessage = function(phone, product, callback){
	var res = getNumber();
	message.smsSend({
		sms_free_sign_name : "注册验证",
		sms_param: JSON.stringify({"code": res, "product": product}),
		rec_num: phone,
		sms_template_code: "SMS_24945206"
	});
	callback(res);
}
// identity
Message.prototype.identityMessage = function(phone, product, callback){
	var res = getNumber();
	message.smsSend({
		sms_free_sign_name : "身份验证",
		sms_param: JSON.stringify({"code": res, "product": product}),
		rec_num: phone,
		sms_template_code: "SMS_24945210"
	});
	callback(res);
}
// update
Message.prototype.updateMessage = function(phone, product, callback){
	var res = getNumber();
	message.smsSend({
		sms_free_sign_name : "变更验证",
		sms_param: JSON.stringify({"code": res, "product": product}),
		rec_num: phone,
		sms_template_code: "SMS_24945204"
	});
	callback(res);
}

function getNumber(){
	var charactors = "0123456789";
	var value = '';
	var k;
	for(var i = 0; i < 4; i++){
		k = parseInt(10 * Math.random());
		value += charactors.charAt(k);
	}
	return value;
}

exports = module.exports = new Message();