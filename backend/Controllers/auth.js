import User from "../Models/user";

export const signup = async(req,res) =>{
    try {

         const {name,email,password} = req.body;
         if(!name || !email || !password) {
            return res.status(400).json({message:"all feild Are required"});
         }

         const user = await User({
            name:name,
            email:email,
            password:password
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
        if(existingUser){
     return res.status(400).json({message:"User Already Exists"})
        }
        
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}