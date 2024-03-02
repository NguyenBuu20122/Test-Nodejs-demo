require('dotenv').config() // khai báo sử dụng dotenv
const express = require('express'); //commonjs
const app = express(); //app express
const configViewEngine=require('./config/viewEngine');// khai báo sử dụng file viewEngine
const webRoutes=require('./routes/web.js') // khai báo sử dụng file web.js (route)
const port = process.env.PORT || 8888;    
const hostname=process.env.HOST_NAME;

//gọi hàm configViewEngine để xử lý route app thực thi file sample.ejs
configViewEngine(app);//gọi hàm trong thư mục config -file ViewEngine- hàm configViewEngine

app.use('/',webRoutes)
app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})