//common JS

// // console.log("This is Backend")
// // console.log("This is Backend")
// // console.log("This is Backend")

// //npm init -y 
// //npm i -g nodemon    //npm i nodemon 
// //nodemon index.js  // for showing output when change



// //express
// // npm i express

// const express = require("express")

// const app = express()

// //http://localhost:9000/
// //method:'GET'
// //endpoint = '/'     


// app.get('/',(req, res)=>{   //home page
//     res.send("This is home page");
// })

// app.get('/user', (req, res)=>{
//     res.send("This is user list")
// })


// app.get('/blog', (req,res)=>{
//     res.send("this is blog")
// })

// app.listen(9000,()=>{    //app is object.listen is method will get port number and callback function

//     console.log('App is running at port 9000');
// });






// working with module - es6 -- also change in pagkage 

import express from 'express'
const app = express()
const PORT =9000


//middleware -- access and modify the request & response --works for authentication(loginOrnot) -- authorization(adminOruser)
//first do its own task and then send

//const mid =(req, res, next)=>{               //can make mutiple middlware first req then mid works then only perfom callbacks 
    //  console.log("I am middleware")
    //next()    
//}


//Types of middle ware: 

//1. Application level middleware  or global middlware
//app.use(mid)  //apply in each routes automaticlly

//2. Route level middleware
//app.post('/createproduct' , mid, (req, res)=>{ 

//3. inbuilt middleware --global
// app.use(express.json)

//4. Third Party middleware  --global
// app.use(cors())

//5. Error Handling middleware  --global & routelevel
// const midError = (req, res, next, error) =>{
//  }



app.use(express.json()) //--global middlware //when data comes in body then it helps to show data other wise undefined 

app.get('/' ,(req , res)=>{
    res.send("This is home page")
})


app.post('/createproduct' ,  (req, res)=>{    //mid is middleware,, first mid peform task  then when it says next then only callback performs
     const {name, clz}  = req.body   //destructre
    console.log(req.body.name)   //req.body ma aauxa data
      console.log(req.body.clz)
    res.send(`this is ${name} and ${clz}`)   //destructre
})


app.put('/updateproduct',  (req, res)=>{
    res.send("This is update page")
})


app.patch('/updatesingleproduct' , (req, res)=>{
    res.send("this is updatesingleproduct page")
})


app.delete('/deleteproduct',  (req, res)=>{

    res.send("This is delete product page")

})



app.get('/search/:id', (req, res)=>{   //dynamic routing also id is send
    console.log(req.params.id)
    const {id} =req.params 
    res.send(`search ${id}`)
})
//data will comes in query , params , body

app.get('/search', (req,res)=>{    //when  query used  we donot needed to provide id like in above
    const {r, q,g} = req.query
    console.log(q)
    console.log(r)
    console.log(g)

    res.send(`search ${r} and ${q} and ${g}`)
})


app.listen(PORT, ()=>{
    console.log(`App is listening at ${PORT}`)
})




//database
//structure (relational) db vs  unstructure db
//mysql vs mongodb
//mongodb
//--schema less db
//--dynamic  like changable datas from sensors

//store fast but  read slow vicevers in mysql

