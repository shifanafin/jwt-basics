const { decode } = require('punycode')
const customApiError = require('../errors/custom-error')
const jwt = require('jsonwebtoken')

const login = async(req,res)=>{
    const {username,password } = req.body
    const id = new Date().getDate()

    if(!username || !password){

        throw new customApiError('Please Provide email and paswword',400)

    }
    const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})
    res.status(200).json({msg:`user created`,token})
    console.log(token)
    res.send('Login')
}



const Dashboard = async (req,res)=>{

   console.log(req.user)
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg:`Hello ${req.user.username}`,secret : `Here is your authorization data ${luckyNumber}`})
 
  
}

module.exports={
    login ,Dashboard
} 