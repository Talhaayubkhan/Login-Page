

const CustomAPIError = require('../errors/custom-error');
const jwt = require('jsonwebtoken');



const login = async (req, res) => {
     const {username, password} = req.body;

     const id = new Date().getDate();


     if(!username || !password){
          throw new CustomAPIError("Please provide a username and password", 400);
     }

     const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: '30d'});
     console.log(token);
     res.status(200).json({msg: "user created successfully!!", token});

     // res.send("Login Successfully!");
}

const dashboard = async (req, res) => {
     const authHeader = req.headers.authorization;

     console.log(authHeader);

     if(!authHeader || !authHeader.startsWith('Bearer ')) {
          throw new CustomAPIError(" No Token Provided", 401); 
     }

     const luckNum = Math.floor(Math.random() * 100);
     res.status(200).send({msg: `Hello john`, secret: `here is your lucky num ${luckNum}`});
}


module.exports = {
     login,
     dashboard
}; 