const getimagepage = (req,res) => {
     //xử lý dữ liệu ở đây- gọi vào thư mục modules
    res.render('sample.ejs')
}

const getimagepage1 = (req,res) => {
     //xử lý dữ liệu ở đây- gọi vào thư mục modules
    res.render('sample1.ejs')
}
module.exports={
    getimagepage,getimagepage1
}
