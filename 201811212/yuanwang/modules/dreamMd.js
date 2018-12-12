const dbBox = require("./db.js")
const db = new dbBox("dream")

module.exports = {
	//写入接口
	_xieru(req,res){
		
		let data = req.body
		data.time = new Date()
		db.insertOne("dream",data,(err,data)=>{
			if(err) throw err
			res.send({
				status:"1",
				statusText:"yes"
			})
		})
	},
	//获取接口
	_huoqu(req,res){
		db.find("dream",{},(err,dream)=>{
			if(err) throw err
			res.send(dream)
		})
	},
	//删除接口
	_del(req,res){
		let data = req.body
		db.deleteById("dream",data_id,(err,dream)=>{
			if(err) throw err
			res.send(dream)
		})
	},
	_hq(req,res){
		let data = req.body
		db.findById("dream",data_id,(err,dream)=>{
			if(err) throw err
			res.send(dream)
		})
	},
	//变色
	_bs(req,res){
		let data = req.body
		let newData = {}
		newData.content = data.content
		newData.right = "yes"
		db.updateById("dream",data._id,newData,(err,dream)=>{
			if(err) throw Error
			res.send(dream)
		})
	}
}

