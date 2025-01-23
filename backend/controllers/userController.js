import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import validator from 'validator';
import bcrypt from 'bcrypt';


//login user
const loginUser = async (req , res) => {
  const {email , password} = req.body;
  try {
    const user = await userModel.findOne({email});

    if(!user){
      return res.json({
        success: false,
        message: "User doesn't exist"
      })
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
      return res.json({
        success: false,
        message: "Invalid Credentials"
      })
    }
    const token = createToken(user._id);
    res.json({
      success: true,
      token,
    })
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error",
    })
  }
}


const createToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET)
}





//register user
const registerUser = async (req, res) => {
  const {name, password, email} = req.body;
  try {
    //checking User already exist
    const exists = await userModel.findOne({email});
    if(exists){
      return res.json({
        success: false,
        message: "User already exists"
      })
    }
    //validating email format & Strong password
    if(!validator.isEmail(email)){
      return res.json({
        success: false,
        message: "Please Enter a valid Email"
      })
    }
    // checking password length greater than 8
    if(password.length <8){
      return res.json({
        success: false,
        message: "Please enter a strong password"
      })
    }
    
    //if all is Okk then hash the password and store in the db
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    })

    //save the data in db;

    const user = await newUser.save();
    const token = createToken(user._id)
    res.json({
      success: true,
      token,
    })

  } catch (error) {
    console.log(error)
    res.json({
      success: false,
      message: "Error"
    })
  }
}

export {loginUser, registerUser}