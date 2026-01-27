// console.log("This is Backend")
// console.log("This is Backend")
// console.log("This is Backend")

//npm intit -y 
//npm i -g nodemon    //npm i nodemon 
//nodemon index.js  // for showing output when change



//express
// npm i express

const express = require("express")

const app = express()

//http://localhost:9000/
//method:'GET'
//endpoint = '/'     


app.get('/',(req, res)=>{   //home page
    res.send("This is home page");
})

app.get('/user', (req, res)=>{
    res.send("This is user list")
})


app.get('/blog', (req,res)=>{
    res.send("this is blog")
})

app.listen(9000,()=>{    //app is object.listen is method will get port number and callback function

    console.log('App is running at port 9000');
});


