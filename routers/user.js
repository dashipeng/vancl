//引入express模块
const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器
var router=express.Router();
//创建路由
//注册 /login post
router.post('/login',(req,res)=>{
	var obj=req.body;
	console.log(obj);
	pool.query('insert into vc_user set ?',[obj],(err,result)=>{
		if(err)throw err;
		if(result.affectedRows>0){
			res.send('注册成功');
		}else{
			res.send('注册失败');
		}
	});
});

//验证手机号是否已经注册 get /yan
router.get('/yan',(req,res)=>{
	var $phone=req.query.phone
	//console.log($phone);
	pool.query('select * from vc_user where phone=?',[$phone],(err,result)=>{
		if(err)throw err;
		if(result.length>0){
			 res.send('该手机号已经被注册');
		}else{
			res.send('该手机号可用');
		}
	});
});

module.exports=router;