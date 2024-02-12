

const {UnauthenticatedError} = require('../errors');
const jwt = require('jsonwebtoken');


const authenticationMiddleware = async (req, res, next) => {
     const authHeader = req.headers.authorization;

     // console.log(authHeader);

     if(!authHeader || !authHeader.startsWith('Bearer ')) {
          throw new UnauthenticatedError("User Must Token Provided"); 
     }

     const token = authHeader.split(' ')[1];

     try {
          const decoded = jwt.verify(token, process.env.JWT_SECRET);
          const {id, username} = decoded;
          req.user = {id, username};
          next();
          // console.log(decoded);
     } catch (error) {
          throw new UnauthenticatedError("Not authorized to access this route");
     }


}

module.exports = authenticationMiddleware;