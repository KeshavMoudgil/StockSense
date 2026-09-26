import User from "../Models/user.js";
import bcrypt from 'bcrypt'
import crypto from 'crypto'

export const signup = async(req,res) =>{
    try {

         const {name,email,password} = req.body;
         if(!name || !email || !password) {
            return res.status(400).json({message:"all Feild Are required"});
         }

                let existingUser = await User.findOne({email:email});
                if(existingUser){
            return res.status(400).json({message:"User Already  Exists With Us , Please Login"})
                }

                let newPassword = await bcrypt.hash(password,12);

         const user = await User({
            name:name,
            email:email,
            password:newPassword
         })

         user.save();

         return res.status(201).json({message:"User Registered Succesfully!!"})

        
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
   

}

export const login = async(req,res) =>{
    try {
        const {email,password} = req.body;

        let existingUser = await User.findOne({email:email});
        if(!existingUser){
     return res.status(400).json({message:"User Can't  Exists"})
        }

        const confirmPassword = await  bcrypt.compare(password,existingUser.password);

        if(!confirmPassword){
             return res.status(400).json({message:"Invalid Email OR PassWord"});
     
        }

        let token = await crypto.randomBytes(32).toString("hex");
        await User.updateOne({_id:existingUser._id},{token});
        return res.json({token});

        
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}