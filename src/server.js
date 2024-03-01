const express = require('express'); //commonjs
//import express from 'express'; //es modules
const app = express(); //app express
require('dotenv').config() // khai báo sử dụng dotenv
const path = require('path');//khai báo sử dụng đường dẫn của file hiện tại

const port = process.env.PORT || 8888;    
const hostname=process.env.HOST_NAME;

//khai bao round
app.get('/', (req, res) => {
  res.send('Hello World! with nodemon')
})

//config template engine
app.set('view engine', 'ejs');//khai báo sử dụng view engine gì 
app.set('views', path.join(__dirname,'views'));// khai báo nơi lưu trữ file engine

//config static file- file css, js, image
app.use(express.static(path.join(__dirname,'public')))// đường dẫn tới thư mục chứa file tĩnh- vị trí hiện tại là file server.js- cùng thư mục mẹ src- cùng cấp thư mục public(thu mục chứa file tĩnh)

app.get('/abc',(req,res)=>
{
    res.render('sample.ejs')
})

app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})