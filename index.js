import express from 'express'


const app = express();

import  Product from './models/productModel.js'  //table and structure
import User from './models/userModel.js'
import  connectDb from './db/connect.js' 

connectDb();


app.use(express.json())  //middleware to get data 

app.get('/',(req, res)=>{      
   res.send("hello this is home page");
});


// app.post('/createProduct', async(req, res)=>{    //API to send can be seen by post man
//     // let responseData = await Product.create({name:"Apple 12 pro max ", price: 25000});  or
//      let responseData = new Product ({name:"Apple 12 pro max ", price: 25000}) ;  //hardcore data insert from here,,
//      responseData = await responseData.save();
//     console.log(responseData)
//     res.send(responseData)
// });

import upload from './middleware/upload.js';  //image middle ware
app.post('/createProduct',upload.single('image'), async(req, res)=>{       //single //fields-mutiples 
     const image = req.file.filename
     const {name, price} =req.body
     let responseData = new Product ({name, price, image}) ;  
     responseData = await responseData.save();
    console.log(responseData) 
    res.send(responseData)
});




app.post('/createUser', async(req, res)=>{
    let userresData = await User.create({name: "Arjun " , Age: 24});
    console.log(userresData);
    res.send(userresData)
});



app.listen(9000, ()=>{
    console.log("App is listening at port 9000!")
})

// app.get('/getProduct', async (req, res)=>{    
//     // let productInfo = await Product.find(); //finding all 
//     //  let productInfo = await Product.findOne({price: 25000}); //only one
//      let productInfo = await Product.findById({_id: "6979b07f442c260579a69137"})

//      console.log(productInfo)
//     res.send (productInfo);
// });



//dynamic routing trough using params when serch by id in post man then shows 
app.get('/getProduct/:id', async (req, res)=>{    

     let productInfo = await Product.findById({_id:id})

     console.log(productInfo)
    res.send (productInfo);
});





// app.delete('/deleteProduct', async (req, res)=>{
//     let responseData = await Product.findByIdAndDelete({_id: "6979b07f442c260579a69137"})

//     console.log(`${responseData.id } this id is deleted`)

//     res.send(responseData);
// });


app.delete('/deleteProduct', async (req, res)=>{
    let responseData = await Product.findByIdAndDelete({_id: "6979b07f442c260579a69137"})

    console.log(`${responseData.id } this id is deleted`)

    res.send(responseData);
});



// app.put('/updateProduct' , async (req, res)=>{
//     let ProductInfo = await Product.findByIdAndUpdate(
//         {_id:"6979b132ea91ad22ee9526c4"},
//          {price: 12345},
//           {new: true},   //new inserted return 
//         );

//         res.send(ProductInfo)


// })




app.put('/updateProduct/:id' , async (req, res)=>{
    const {id} = req.params;
    const{name}= req.body;
    let ProductInfo = await Product.findByIdAndUpdate(
        {_id: id},
         {name: name},
          {new: true},   //new inserted return 
        );

        res.send(ProductInfo)


})





//mongoose -- framework of mongodb


//crud 
// ---Create  (These two ways)
// let responseData = await Product.create({name:"Apple 12 pro max ", price: 25000});  or
    //  let responseData = new Product ({name:"Apple 12 pro max ", price: 25000}) ;
    //  responseData = await responseData.save();

//Read
//find (All) 
//find one
//findbyid


//Delete