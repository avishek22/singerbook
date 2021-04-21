const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  clientname:{
      type:String,
      required:true
  },
  
  phone: {
    type: String,
    required: true,
  },
  userid: {
    type: mongoose.Schema.Types.ObjectId
  },
  
});

const Appointment = mongoose.model("Appointment", userSchema);
module.exports = Appointment;
