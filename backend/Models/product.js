
import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    code:{
        type:Number,
        required:true,
        unique:true
    },
    category:{
        type:String,
        required:true
    },
})

const Product = new mongoose.model("Product",productSchema);
export default Product;