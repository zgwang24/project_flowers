$(function () {
	var container1 = document.getElementById("vCode1");
    var code1 = new vCode(container1);

    // document.getElementById("save").addEventListener("click", function () {
    //     alert(code1.verify(document.getElementById("code1").value));
    // }, false);
	$("#commit").click(function () {
		// console.log($("#order")[0].value);
		// console.log($('#phone')[0].value);
		localStorage.setItem('order', $("#order")[0].value);
		localStorage.setItem('phone', $('#phone')[0].value);
		if ($("#order")[0].value == "" || $('#phone')[0].value == "") {
			alert("请输入有效订单号和手机号！");
		}else{
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

	$("#commit_receive").click(function () {
		if ( !code1.verify(document.getElementById("code1").value)) {
        	alert('请输入正确的验证码！');
        } else if($('#phone_receive')[0].value == ""){
        	alert("请输入有效手机号！");
        } else {
			localStorage.setItem('phone_receive', $('#phone_receive')[0].value);
			// window.location.href = './receiveContent.html';
			$("#page1")[0].style.display = 'none';
			$("#page2")[0].style.display = 'block';
		// });

		// $("#save").click(function() {
			var receivePhone = localStorage.getItem('phone_receive');
			readWish(receivePhone, 'flowerShop', new function() {
				this.successCallback = function(message) {
					console.log("succeed" + JSON.stringify(message));
					$("#receiver_receive").html(message[0].head);
					$("#content_receive").html(message[0].content);
					$("#sender_receive").html(message[0].name);
					if(message.length > 0){
						for(var i = 0; i < Math.min(message.length, 4); i++){
							var time = new Date(message[i].date);
    						var date = time.getFullYear()+"."+(time.getMonth()+1)+"."+time.getDate();
							$('#wishLists-tr').append("<tr><td width='30%'>" + date + 
								"</td><td width='70%'><a class='wishTd' onclick='aclick(this)'>" + 
								message[i].content + "</a></td></tr>")
						}
					}					
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

	$(".wishTd").click(function(){
		alert("123");
	});
})