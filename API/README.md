# web服务器说明文档(node+express)
### 1.首先自定义数据文件，进行上传，上传地址：http://192.168.20.14:3000/pages/upload.html
***
### 2.配置项目跨域：
```
proxy: {
    '/': {
         target: 'http://192.168.20.14:3000/',
         ws: true,
         changeOrigin: true,
         pathRewrite: {
             '^/': ''
         }
     }
}
```
***
### 3.请接口求方式post，请求接口已经调整项目适配，url为上传的文件名称`url: test_data`
```$xslt
axios.post('/get_data', { 
    url: '',
    name: encodeURIComponent('test.data')}).then(function (res) {
        console.log(res.data)
    }).catch(function (error) {
        console.log(error);
    });
```
