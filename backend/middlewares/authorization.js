const GetUser = require("../services/authentication.js");
const SecretKey = "secret key"
const JWT = require('jsonwebtoken')


function Authorize(cookie) {
  return (req, res, next) => {
    if (cookie) {
      const token = req.cookies.token;
      if (!token) return next();
      try {
        const userinfo = JWT.verify(token,SecretKey)
        req.user = userinfo;
      } catch (error) {
        console.log(error);
        throw new Error("Error fetching User data please try again");
      }

      return next();
    }
  };
}
function RestrictTo( roles = []){
  return function ( req, res , next){
      if(!roles.includes(req.user.role)) return res.end('Unauthorized')
      return next()
  }
}

module.exports = { Authorize, RestrictTo };
