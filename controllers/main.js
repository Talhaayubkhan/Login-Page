

const {BadRequestError} = require('../errors');
const jwt = require('jsonwebtoken');



const login = async (req, res) => {
     const {username, password} = req.body;

     const id = new Date().getDate();


     if(!username || !password){
          throw new BadRequestError("Please provide a username and password");
     }

     const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: '30d'});

     // console.log(token);

     res.status(200).json({msg: "user created successfully!!", token});

     // res.send("Login Successfully!");
}

const dashboard = async (req, res) => {

     console.log(req.user);

     const luckNum = Math.floor(Math.random() * 100);
     res.status(200).send({msg: `Hello ${req.user.username}`, secret: `here is your lucky num ${luckNum}`});

}


module.exports = {
     login,
     dashboard
}; 