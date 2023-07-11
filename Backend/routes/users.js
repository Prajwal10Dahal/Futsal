var express = require('express');
var router = express.Router();
const {User} = require('../model')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//http:localhost:3000/user/register
router.post("/register",async function(req,res,next){
  ///TODO Check if User email already exist

  //generate random password
  //Trigger Email so user don't have to insert password
  //And Email is also verified. 
  await User.create(req.body);
  
  res.json({message:"User Created Successfylly",data:null})
})

//http:localhost:3000/user/login
router.post("/login",async function (req,res,next){
  //TODO Write Login logic here.
  console.log(req.body);
  return res.json({token:"123456789012345678901234567890"})
})
module.exports = router;
