import bcrypt from "bcryptjs"


export const signup =  async(req ,res)=>{
     const {fullName , email , password} =  req.body;

     try {
       if(!fullName || !email || !password) {
          return res.status(400).json({Message:"All fields are required"});
       }

       if(password.length < 6){
        return res.status(400).json({Message:"Password must be atleast 6 characters long"});
       } 

       const user = await UserActivation.findOne({email});

       if(user){
          return res.status(400).json({Message:"User Already exists with this email"});
       }
        const salt = await bcrypt.genSalt(10);

        const

     } catch (error) {
      
     }
}

export const login =  async(req , res)=>{
  
}
export const logout =  async(req , res)=>{
  
}
export const updateProfile =  async(req , res)=>{
  
}

