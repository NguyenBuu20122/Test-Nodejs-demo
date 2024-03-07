const connection = require('../config/database')

const getHomepage =(req,res) =>{
   return res.render('home.ejs')

}
const createNewuser=(req,res)=>{
    let email=req.body.email;
    let name=req.body.username;
    let city=req.body.city;
    //hoac viet khai bao bien nhu sau
    //let{email,name,city}=req.body;
   

   connection.query(
    "INSERT INTO `user` (email,name,city) Values (?,?,?)",[email,name,city],
    function (err,result)
    {
        console.log('results= ', result)
        console.log('err= ', err)
        res.send('create new done!')
    }
   )
    console.log("email= ",email," Name =",name," city= ",city)

    
}


module.exports={
    getHomepage,createNewuser
}