import User from '../modals/user.modal.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js';
import  Jwt  from 'jsonwebtoken';

//signup controller

export const signup = async (req,res,next)=>{
    const {username,email,password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password,10);

    const newUser = new User({username, email, password:hashedPassword})
    try {
        await newUser.save();
        res.status(201).json({message:"User created Successfully"})  
    } catch (error) {
        next(error)   
    }
    
}

//Login controller
export const signin = async (req,res,next)=>{
    const {email,password} = req.body  
    try {
        //check email
        const validUser = await User.findOne({email});
        if(!validUser) return next(errorHandler(404,"User not found"))
        //check password
        const validPassword = bcryptjs.compareSync(password,validUser.password)
        if(!validPassword) return next(errorHandler(401,"Wrong Credentiala.."))

        //generate token using jsonwebtoken
        const token = Jwt.sign({id: validUser._id},process.env.JWT_SECRET);

        //does not send password to user
        const {password: hashedPassword, ...rest} = validUser._doc

        //generate cookie
        res.cookie('access_token',token,{httpOnly: true}).status(200).json(rest)
    } catch (error) {
        next(error)
    }
}