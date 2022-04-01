var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  let products = [{
    name: 'iphone 11',
    catagorry: "phone",
    description: 'this is a phone',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNgYLoUSiGinP7VCbwmYPIYC2ZihqRPFWf8A&usqp=CAU'
  },
  {
    name: 'one plus',
    catagorry: "phone",
    description: 'this is a phone',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNgYLoUSiGinP7VCbwmYPIYC2ZihqRPFWf8A&usqp=CAU'  
  }, {
    name: 'oppo',
    catagorry: "phone",
    description: 'this is a phone',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNgYLoUSiGinP7VCbwmYPIYC2ZihqRPFWf8A&usqp=CAU'  
  }, {
    name: 'vivo',
    catagorry: "phone",
    description: 'this is a phone',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNgYLoUSiGinP7VCbwmYPIYC2ZihqRPFWf8A&usqp=CAU'
    }]

  res.render('index', { products });
});

module.exports = router;
