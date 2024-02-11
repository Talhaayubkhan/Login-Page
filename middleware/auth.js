

const CustomAPIError = require('../errors/custom-error');
const jwt = require('jsonwebtoken');


const authenticationMiddleware = async (req, res, next) => {
     const authHeader = req.headers.authorization;

     // console.log(authHeader);

     if(!authHeader || !authHeader.startsWith('Bearer ')) {
          throw new CustomAPIError(" No Token Provided", 401); 
     }

     const token = authHeader.split(' ')[1];

     try {
          const decoded = jwt.verify(token, process.env.JWT_SECRET);
          

          // console.log(decoded);
     } catch (error) {
          throw new CustomAPIError("Not authorized to access this route", 401);
     }


}

module.exports = authenticationMiddleware;