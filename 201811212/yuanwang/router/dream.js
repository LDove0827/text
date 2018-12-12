 const express = require("express");
const router = express.Router();
const dreamMd =require("../modules/dreamMd.js");
//写入数据接口
router.post("/xieru",dreamMd._xieru);

//获取数据接口
router.get("/huoqu",dreamMd._huoqu)

//删除一条数据
router.post("/del",dreamMd._del)

//变色
router.post("/bs",dreamMd._bs)

//获取content
router.post("/huoqu",dreamMd._hq)
module.exports = router;