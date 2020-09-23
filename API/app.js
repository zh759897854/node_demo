//引入 要使用到的模块 express morgan body-parser 
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const router = require("./routes/index");
const multer  = require('multer');

//实例化 express
const app = express();

//使用中间件 app.use()
//设置日志以开发环境显示
app.use(logger("dev"));

//设置数据处理方式
app.use(bodyParser.json()); //处理 json 数据
app.use(bodyParser.urlencoded({extended:false})); //处理 post 提交的数据
app.use(multer({ dest: '/tmp/'}).array('image'));

// 参数校验中间件
app.use(function (req, res, next) {
    let params = null;
    try {
        params = req.body;
    }catch (e) {
        params = req.query;
    }

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
        console.log('====','start','====')
        console.log(curData)
        console.log('====','end','====')
    }catch (e) {
        console.log("参数错误");
        return res.status(808).json({
            status: 808,
            text: "加密串错误！"
        })
    }
    next();
});

// 路由请求超时的中间件
app.use(function (req, res, next) {
    // 这里必须是Response响应的定时器【15秒】
    res.setTimeout(15*1000, function () {
        console.log("Request has timed out.");
        return res.status(408).json({
            status: 408, 
            text: "请求超时,请检查请求参数与上传文件名是否一致！"
        })
    });
    next();
});

//设置静态资源 
express.static("public") // 设置静态资源
path.join(__dirname , "public")  // 动态获取服务器地址 与静态资源文件夹进行地址拼接 .join()
app.use(express.static(path.join(__dirname , "public")));

//设置路由
app.use(router);
//端口号监听
const server = app.listen(3000 , '192.168.20.14', () => {
    const host = server.address().address
    const port = server.address().port

    console.log("server is running http://%s:%s",  host, port)
});
