const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose.connect(url).then(()=>{
    console.log("MongoDB Connected Successfully!");
  }).catch((err)=>{
    console.log("Connection Failed With MongoDB", err);
  })
}

module.exports = connectDB
