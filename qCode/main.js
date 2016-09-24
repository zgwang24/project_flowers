$(function () {
	var container1 = document.getElementById("vCode1");
    var code1 = new vCode(container1);

    // document.getElementById("save").addEventListener("click", function () {
    //     alert(code1.verify(document.getElementById("code1").value));
    // }, false);
	$("#commit").click(function () {		
		var reg1 = new RegExp("^[0-9]{16}$");
		var reg2 = new RegExp("^[0-9]{11}$");
		var order = reg1.test($("#order")[0].value)
		var phone = reg2.test($('#phone')[0].value);
		if(!order){
			alert("请输入16位有效订单号！");
		}else if(!phone){
			alert("请输入11位有效手机号！");
		}else{
			localStorage.setItem('order', $("#order")[0].value);
			localStorage.setItem('phone', $('#phone')[0].value);
			window.location.href = './greetings.html';
		}
	});

	$("#save").click(function() {
        if ( !code1.verify(document.getElementById("code1").value)) {
        	alert('请输入正确的验证码！');
        } else {
        	var phone = localStorage.getItem('phone');
			var orderId = localStorage.getItem('order');
			var receiver = $("#receiver")[0].value;
			var content = $("#content")[0].value;
			var sender = $("#sender")[0].value;
			createWish(phone, 'flowerShop', orderId, receiver, content, sender, new function() {
				this.successCallback = function(message) {
					// console.log("succeed" + JSON.stringify(message));
					window.location.href = './success.html';
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
				this.newMessageCallback = function(message) {
					console.log('newMessages' + message);
				};
			});
        }	
	});

	$("#cancel").click(function () {
		window.location.href = './login.html';
	})

	/*$('#wishLists-tr .wishTd').click(function() {
		alert($(this).text());
	})*/

	function isWeiXin(){
    var ua = window.navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        return true;
    }else{
        return false;
    }
}

	$("#commit_receive").click(function () {
		if ( !code1.verify(document.getElementById("code1").value)) {
        	alert('请输入正确的验证码！');
        } else if($('#phone_receive')[0].value == ""){
        	alert("请输入有效手机号！");
        } else {

			localStorage.setItem('phone_receive', $('#phone_receive')[0].value);
			var receivePhone = localStorage.getItem('phone_receive');
			
			readWish(receivePhone, 'flowerShop', new function() {
				this.successCallback = function(message) {
					$("#page1")[0].style.display = 'none';
					$("#page2")[0].style.display = 'block';
					//console.log("succeed" + JSON.stringify(message));
					$("#receiver_receive").html(message[0].head);
					$("#content_receive").html(message[0].content);
					$("#sender_receive").html(message[0].name);
					if(message.length == 1){
						$("#wishLists").hide();
					}
					if(message.length > 1){
						// alert("查看列表中的祝福语，请通过浏览器打开！")
						$('#wishLists-tr').html("");
						for(var i = 0; i < Math.min(message.length, 5); i++){
							var time = new Date(message[i].date);
    						var date = time.getFullYear()+"."+(time.getMonth()+1)+"."+time.getDate();				
							$('#wishLists-tr').append("<tr onclick='aclick(this)'><td width='30%'>" + date + 
								"</td><td width='70%' class='wishMessage'><a class='wishTd'>" + 
								message[i].content + "</a></td><td class='hidehead'>" +message[i].head
								+"</td><td class='hidename'>" + message[i].name + "</td></tr>");
							
						}
					}								
				};
				this.errorCallback = function(message) {
					console.log("failed" + message);
					if(message == null){
						alert("你输入的手机号不存在！");
					}
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
				this.newMessageCallback = function(message) {
					console.log('newMessages' + message);
				};
			});
		}
	});
});