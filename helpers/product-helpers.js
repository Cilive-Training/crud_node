var db=require('../config/connection')
module.exports={

                addProduct:(product,callback)=>{
                    console.log(product);
                    db.get().collection('product').insertOne(product).then((data)=>{
                        callback(data.id)

         })
    }

}
// addProduct: (product) => {
//     return new Promise((res, rej) => {

//         console.log(product);
//         db.get().collection('product').insertOne(product).then((data) => {

//             res(data)
//         })
//     })
// }
// }