var mongoose=require("./mongodb"),Schema=mongoose.Schema,userSchema=new Schema({phone:{type:String,required:!0,unique:!0},password:{type:String,required:!0}}),userInfoModel=mongoose.model("userinfos",userSchema),UserInfo=function(){},userInfoInstance=null;UserInfo.prototype.createUser=function(e,o){userInfoInstance=new userInfoModel(e),userInfoInstance.save(o)},UserInfo.prototype.readUser=function(e,o){userInfoModel.findOne({phone:e},o)},UserInfo.prototype.updateUser=function(e,o){userInfoModel.findOneAndUpdate({phone:e.phone},e,o)},UserInfo.prototype.deleteUser=function(e,o){userInfoModel.remove({phone:e},o)},exports=module.exports=new UserInfo;