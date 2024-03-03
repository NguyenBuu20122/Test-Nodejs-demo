const path = require('path');//khai báo sử dụng đường dẫn của file hiện tại
const express=require('express');
const configViewEngine=(app)=>
{
    app.set('view engine', 'ejs');//khai báo sử dụng view engine ejs
    app.set('views', path.join('./src','views'));// khai báo nơi sử dụng  file engine


    //config static file- file css, js, image
    app.use(express.static(path.join('./src','public')))// đường dẫn tới thư mục chứa file tĩnh- vị trí hiện tại là file server.js- cùng thư mục mẹ src- cùng cấp thư mục public(thu mục chứa file tĩnh)

}

module.exports=configViewEngine;