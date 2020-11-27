const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Firstname: {
    type: String,
    required: true,
  },
  Lastname:{
      type:String,
      required:true
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  
  dp: {
    type: String,
    default:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRk8cyUrYvHcRDy0ogeHCORJ4TnGpXq1PYpwQ&usqp=CAU",
  },
  salary:{
      type:Number,
      default:0
  },
  
  genre: [{ type: String }],
  area: [{ type: String,default:"hi" }],
  description:{
      type:String,
      default:"Hello guys"
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
