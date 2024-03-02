const getHomepage =(req,res) =>{
    //xử lý dữ liệu ở đây- gọi vào thư mục modules
    res.send('Đây là trang chủ!')
}


module.exports={
    getHomepage
}
