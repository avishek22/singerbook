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
  bio: {
    type: String,
    default:
      "Hey Guys, I am a pssionate musician willing to sing and focus more on my music career. I am happy to help! Well Done guys, , what do you need ypu assshole",
  },
  salary:{
      type:Number,
      default:0
  },
  appointmentrequest: [{ type: mongoose.Schema.Types.ObjectID, ref: "User" }],
  appointment: [{ type: mongoose.Schema.Types.ObjectID, ref: "User" }],
  category: [{ type: String }],
  genre: [{ type: String }],
  area: [{ type: String,default:"hi" }],
  description:{
      type:String,
      default:"Hello guys"
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
