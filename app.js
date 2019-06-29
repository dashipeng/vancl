//创建服务器
const express=require("express");
const bodyParser=require("body-parser");
const userRouter=require("./routers/user.js");
var server=express();
//监听接口
server.listen(8080);
//引入express body-pareser模块，托管静态资源到public文件夹
server.use( express.static('public') );
server.use( bodyParser.urlencoded({
	extended:false
}));
	//引入用户路由器
server.use('/user',userRouter);