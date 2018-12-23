const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');

const homepagecontroller=(req,res)=>{
  res.render('index',{title: 'Express'});
};
/* GET home page. */
router.get('/', ctrlMain.index);

module.exports = router;
