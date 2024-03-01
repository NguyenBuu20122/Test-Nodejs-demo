const express=require('express');
const router=express.Router();
//khai bao round
router.get('/', (req, res) => {
  res.send('Hello World! with nodemon')
})

router.get('/abc',(req,res)=>
{
    res.render('sample.ejs')
})

module.exports=router;