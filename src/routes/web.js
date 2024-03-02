const express=require('express');
const router=express.Router();

const {getHomepage} = require('../controllers/homeController');
const {getimagepage,getimagepage1}=require('../controllers/imgPage');
//khai bao route
router.get('/', getHomepage);
router.get('/abc',getimagepage);
router.get('/a1',getimagepage1);
module.exports=router;