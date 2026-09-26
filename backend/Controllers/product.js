import Product from "../Models/product.js";

export const createProduct = async(req , res) =>{

try {

        const {name , code ,category} = req.body;

    if(!name || !code || !category){
        return res.status(400).json({message:"All Feilds Are Required!!"});
    }

    const product = new Product({
        name:name,
        code:code,
        category:category
    })

    product.save();
    return res.status(201).json({message:"Product  Created Succesfully!!!"});
    
} catch (error) {
      return res.status(500).json({message:error.message});
}

}

export const updateProduct = async(req,res)=>{
    try {

        const {name , code ,category} = req.body;

    if(!name || !code){
        return res.status(400).json({message:" Name Feilds Are Required!!"});
    }

    let newProduct = await Product.findOne({code:code});

    if(!newProduct){
        return res.status(400).json({message:"Product Can'T Exists"});
    }

    await Product.updateOne({_id:newProduct._id},{name,code,category})

    return res.status(201).json({message:"Product  Updated Succesfully!!!"});
    
} catch (error) {
      return res.status(500).json({message:error.message});
}
}

export const getAllProducts = async(req,res) =>{
    let product = await Product.find({});
    if(product){
        return res.status(201).json(product);
    }
}