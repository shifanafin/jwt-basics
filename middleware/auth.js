const jwt = require('jsonwebtoken')
const customApiError = require('../errors/custom-error')


const authenticationMiddleware = async(req,res,next)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new customApiError("no token provided",401)
    }
   const token = authHeader.split(' ')[1]
   try {
    let decode = jwt.verify(token,process.env.JWT_SECRET)
   const {id,username} = decode
   req.user = {id,username}
    
   next()
    
   } catch (error) {
    throw new customApiError("the token is expired or no authorization to acess this route",401)
    
   }
}


module.exports = authenticationMiddleware