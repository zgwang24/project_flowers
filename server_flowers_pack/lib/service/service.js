var flowerInfo=require("./service_data/flowerInfo"),userInfo=require("./service_data/userInfo"),Service=function(){};Service.prototype.createWish=function(e,r){flowerInfo.createWish(e,r)},Service.prototype.readWishByPhoneAndShop=function(e,r,o){flowerInfo.readWishByPhoneAndShop(e,r,o)},Service.prototype.readWishBySetPhoneAndShop=function(e,r,o,n){flowerInfo.readWishBySetPhoneAndShop(e,r,o,n)},Service.prototype.createUser=function(e,r){userInfo.createUser(e,r)},Service.prototype.readUser=function(e,r){userInfo.readUser(e.phone,function(o,n){o?r(o,n):null!=n&&n.password==e.password?(n="verifySucceed",r(o,n)):(n="verifyFailed",r(o,n))})},Service.prototype.updateUser=function(e,r){userInfo.updateUser(e,r)},Service.prototype.deleteUser=function(e,r){userInfo.deleteUser(e,r)},exports=module.exports=new Service;