//引入 express 模块
const express = require("express");
const fs = require("fs")

//实例化路由
const router = express.Router();
const path = require('path')
const rootPath = path.resolve(__dirname, '..')

//设置路由匹配规则
router.get("/" , (req , res) => {
  //打印一下访问路径，控制台查看
  console.log("获取到的参数",req.url);
  res.send("web端服务器demo");
});

//上传模拟数据
router.post('/file_upload', function (req, res) {
  console.log(req.files[0]);  // 上传的文件信息
  // 存储位置
  let des_file = rootPath + "/public/data/" + req.files[0].originalname;
  fs.readFile( req.files[0].path, function (err, data) {
    if (err) {
      console.error( err );
    }else {
      fs.writeFile(des_file, data, function (err) {
        if( err ){
          console.error( err );
        }else{
          response = {
            message:'数据上传成功',
            filename:req.files[0].originalname
          };
        }
        console.log( response );
        // 声明编码 防止会乱码
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
        res.end( JSON.stringify( response ) );
      });
    }
  });
})

//获取模拟数据
router.post("/get_data" , (req , res) => {
  //post获取请求参数是body get获取请求参数是query
  let params = req.body;
  let filePath = rootPath + '/public/data/'+ decodeURIComponent(params.name) +'.js';
  // 异步读取
  fs.readFile(filePath, function (err, data) {
    if (err) {
      return console.error(err);
    }else {
      //将文件数据转为字符串
      let bufferData = JSON.stringify(data)
      //将字符串转为buffer字节
      let jsondata = JSON.parse(bufferData);
      // 处理为buffer数据转换
      let buf = Buffer.from(jsondata , 'utf-8');
      // 处理buffer数据转为json字符串
      let result = buf.toString();
      let jsonArray = JSON.parse(result)
      res.json({
        "data_list": jsonArray
      });
    }
  });
});

//获取模拟数据
router.post("/seeyiiProxy/my/httpProxyMy.dhtml" , (req , res) => {
  //post获取请求参数是body get获取请求参数是query
  let params = req.body;
  let data = null;
  let curData = {};
  try {
    // 提取请求参数
    data = params.params.split('&')
    for (let i = 0; i < data.length; i++) {
      data[i] = data[i].split('=')
    }
    for (let k = 0; k < data.length; k++) {
      curData[data[k][0]] = data[k][1]
    }
  }catch (e) {
    console.log("参数错误");
  }
  let filePath = rootPath + '/public/data/'+ decodeURIComponent(params.url) +'.js';
  // 异步读取
  fs.readFile(filePath, function (err, data) {
    if (err) {
      return console.error(err);
    }else {
      //将文件数据转为字符串
      let bufferData = JSON.stringify(data)
      //将字符串转为buffer字节
      let jsondata = JSON.parse(bufferData);
      // 处理为buffer数据转换
      let buf = Buffer.from(jsondata , 'utf-8');
      // 处理buffer数据转为json字符串
      let result = buf.toString();

      let jsonArray = '',
        date = new Date(),
        nowDate = "" + date.getFullYear()+ (date.getMonth()+1) +date.getDate();
      try {
        jsonArray = eval("("+ result +")")
      }catch (e) {
        jsonArray = JSON.parse(JSON.stringify(result))
      }

      let lastReturn = {
        "msg": {
          "code": "1",
          "text": "OK",
          "time": nowDate
        },
        "data": {
          "data_list": jsonArray.data
        }
      }

      if (jsonArray.count) {
        lastReturn.data.count = jsonArray.count
      }
      
      if (curData.pageNum) {
        let startNum = Number(curData.pageNum),
          pageSize = curData.pageSize || 10;
        console.log(startNum, pageSize, pageSize*startNum)
        lastReturn.data.data_list = lastReturn.data.data_list.splice((startNum-1)*pageSize, pageSize)
      }

      res.json(lastReturn);
    }
  });
});

//暴露路由
module.exports = router;

