var express = require('express');
var router = express.Router();
 
 
/* GET users listing. */
var ran1 = Math.random() * 100;
var ran2 = Math.random() * 200;
var num1 = 0;
var num2 = 0;
var num3 = 0;
 
router.get('/', function(req, res, next) {
 
 
    num1 = Math.atanh(ran1);
    num2 = Math.atanh(ran2);
    num3 = Math.atanh(ran1);
 
    res.send(`The Random Numbers are ${ran1} and ${ran2} <br><br> atanh applied to ${ran1} is ${num1} <br><br> atanh applied to ${ran2} is ${num2} <br><br> atanh applied to ${ran1} is ${num3}`);
 
});
 
module.exports = router;