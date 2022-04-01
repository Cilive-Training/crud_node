var express = require('express');
const { response } = require("express");
var router = express.Router();
var productHelper = require('../helpers/product-helpers')
const AWS=require('aws-sdk')

/* GET users listing. */
const s3 = new AWS.S3({
  credentials: {
      accessKeyId: process.env.AWS_ID,
      secretAccessKey: process.env.AWS_SECRET,
  },
});
router.get('/', function (req, res, next) {

  let products = [{
    name: 'iphone 11',
    catagorry: "phone",
    description: 'this is a phone',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNgYLoUSiGinP7VCbwmYPIYC2ZihqRPFWf8A&usqp=CAU'
  },
  {
    name: 'one plus',
    catagorry: "phone",
    description: 'this is a phone',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNgYLoUSiGinP7VCbwmYPIYC2ZihqRPFWf8A&usqp=CAU'
  }, {
    name: 'oppo',
    catagorry: "phone",
    description: 'this is a phone',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNgYLoUSiGinP7VCbwmYPIYC2ZihqRPFWf8A&usqp=CAU'
  }, {
    name: 'vivo',
    catagorry: "phone",
    description: 'this is a phone',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNgYLoUSiGinP7VCbwmYPIYC2ZihqRPFWf8A&usqp=CAU'
  }]

  res.render('admin/view-product', { admin: true, products });
});

router.get('/add-product', function (req, res) {
  res.render('admin/add-product')
})
router.post('/add-product', (req, res) => {
  console.log(req.body);
  console.log(req.files.image)

  productHelper.addProduct(req.body, (id) => {
    let image = req.files.image
    image.mv('./public/product_images/'+id+'.jpg', (err, done) => {
      if (!err) {
        res.render('admin/add-product')
      }else{
        console.log(err)
      }
    })
//     let myFile=image.name.split(".")
//     const fileType = myFile[myFile.length - 1]
// try{
//   console.log("*****in try params");
//   const params = {
//     Bucket: process.env.AWS_BUCKET_NAME,
//     Key: id.insertedId+"image"+".png",
//     Body: image.data
// }
// console.log(params,"/*****");
// s3.upload(params,(err,data)=>{
//   if (err) {
//     console.log("erererererrrrrrrrrr",err);
//     //  res.redirect("/admin/product-manage");
//      }else{
//        console.log("daTaaaaaaaaaaaaa",data);
//      }
// })
// }catch (error){
//   console.log(error);
//   console.log("************in catch error");
// }
  })
  // res.render('admin/add-product')
})

module.exports = router;
