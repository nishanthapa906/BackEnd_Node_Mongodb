//table 

import mongoose from "mongoose";

const productSchema = new mongoose.Schema({  //structure create
    name: String, 
    price: Number

})


const Product=mongoose.model('Product', productSchema)     //table create table name is product perfrom crud operation here


export default Product;