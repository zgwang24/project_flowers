function work(e){sSocket=e,sSocket&&function(){sSocket.of("/flower").on("connection",function(e){console.log("connect success.");var o=setTimeout(function(){e.disconnect(),console.log(e.id+"disconnect")},1e4);e.on("readWish",function(c){clearTimeout(o),service.readWishByPhoneAndShop(c.phone,c.flowerShop,function(o,c){var n=sSocket.of("/flower").connected[e.id];c?(n&&n.emit("readWishSucceed",c),console.log(c)):(n&&n.emit("readWishFailed",o),console.log(o))})}),e.on("readWishBySetPhone",function(c){clearTimeout(o),service.readWishBySetPhoneAndShop(c.setPhone,c.phone,c.flowerShop,function(o,c){var n=sSocket.of("/flower").connected[e.id];c?(n&&n.emit("readWishBySetPhoneSucceed",c),console.log(c)):(n&&n.emit("readWishBySetPhoneFailed",o),console.log(o))})}),e.on("createWish",function(c){clearTimeout(o),service.createWish(c,function(o,c){var n=sSocket.of("/flower").connected[e.id];c?(n&&n.emit("createWishSucceed",c),console.log(c)):(n&&n.emit("createWishFailed",o),console.log(o))})}),e.on("register",function(c){clearTimeout(o),service.createUser(c,function(o,c){var n=sSocket.of("/flower").connected[e.id];c?(n&&n.emit("createUserSucceed",c),console.log(c)):(n&&n.emit("createUserFailed",o),console.log(o))})}),e.on("login",function(c){clearTimeout(o),service.readUser(c,function(o,c){var n=sSocket.of("/flower").connected[e.id];"verifySucceed"==c?(n&&n.emit("readUserSucceed",c),console.log(c)):(n&&n.emit("readUserFailed",o),console.log(o))})}),e.on("update",function(c){clearTimeout(o),service.updateUser(c,function(o,c){var n=sSocket.of("/flower").connected[e.id];c?(n&&n.emit("updateUserSucceed",c),console.log(c)):(n&&n.emit("updateUserFailed",o),console.log(o))})}),e.on("loginMessage",function(c){clearTimeout(o),message.loginMessage(c.phone,c.product,function(o){var c=sSocket.of("/flower").connected[e.id];c&&c.emit("loginMessageSucceed",o),console.log(o)})}),e.on("registerMessage",function(c){clearTimeout(o),message.registerMessage(c.phone,c.product,function(o){var c=sSocket.of("/flower").connected[e.id];c&&c.emit("registerMessageSucceed",o),console.log(o)})}),e.on("identityMessage",function(c){clearTimeout(o),message.identityMessage(c.phone,c.product,function(o){var c=sSocket.of("/flower").connected[e.id];c&&c.emit("identityMessageSucceed",o),console.log(o)})}),e.on("updateMessage",function(c){clearTimeout(o),message.updateMessage(c.phone,c.product,function(o){var c=sSocket.of("/flower").connected[e.id];c&&c.emit("updateMessageSucceed",o),console.log(o)})}),e.on("disconnect",function(){clearTimeout(o)}),e.on("error",function(){console.log("error")})})}()}var service=require("./lib/service/service"),message=require("./lib/service/sendMessage"),sSocket=null;exports=module.exports=work;