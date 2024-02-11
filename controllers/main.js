const CustomAPIError = require('../errors/custom-error');




const login = async (req, res) => {
     const {username, password} = req.body;

     if(!username || !password){
          throw new CustomAPIError("Please provide a username and password", 400);
     }


     // console.log(username, password);

     res.send("Login Successfully!");
}

const dashboard = async (req, res) => {
     const luckNum = Math.floor(Math.random() * 100);
     res.status(200).send({msg: `Hello john`, secret: `here is your lucky num ${luckNum}`});
}



module.exports = {
     login,
     dashboard
}; 