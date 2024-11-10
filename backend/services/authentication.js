const JWT = require('jsonwebtoken')
const SecretKey = "secret key"

function CreateToken(user){
    
   const payload = {
    id:user?._id  || "",
    fullname:user?.fullname || "",
    email:user?.email || "",
    userType:user?.userType || "",
    role:user?.role || ""
   }
   const token = JWT.sign(payload,SecretKey,{ expiresIn: '60d' });
   console.log("token ", token)
   return token
}

function GetUser(token){
    return JWT.verify(token,SecretKey)
}

module.exports = {CreateToken,GetUser}