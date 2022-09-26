const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
     userName : {
          type : String,
          required : true
     },
     email : {
          type: String,
          required : true
     },
     password : {
          type: String,
          required : true,
          select : false
     },
     image : {
          type: String,
          required : true
     },
     currentDate: {
          type: Date
     },
},{timestamps : true});

module.exports = mongoose.model('User',UserSchema)