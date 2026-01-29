import express from 'express'


const app = express();

import  Product from './models/productModel.js'  //table and structure
// import User from './models/userModel.js'
import  connectDb from './db/connect.js'   
connectDb();



app.get('/',(req, res)=>{      
   res.send("hello this is home page");
});


app.post('/createProduct', async(req, res)=>{    //API to send can be seen by post man
    let responseData = await Product.create({name:"Apple 12 pro max ", price: 25000});
    console.log(responseData)
    res.send(responseData)
});


app.post('/createUser', async(req, res)=>{
    let userresData = await User.create({name: "Arjun " , Age: 24});
    console.log(userresData)
    res.send(userresData)
});

app.listen(9000, ()=>{
    console.log("App is listening at port 9000!")
})




//mongoose -- framework of mongodb
