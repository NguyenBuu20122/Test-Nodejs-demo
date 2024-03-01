const express = require('express'); //commonjs
//import express from 'express'; //es modules
const path = require('path');
const app = express(); //app express

const port = 8080     // port

//khai bao round
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//config template engine
app.set('view engine', 'ejs');//khai báo sử dụng view engine gì 
app.set('views', path.join(__dirname,'views'));// khai báo nơi lưu trữ file engine

app.get('/abc',(req,res)=>
{
    res.render('sample.ejs')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})