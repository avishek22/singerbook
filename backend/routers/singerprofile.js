const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../keys");
const requireLogin = require("../middleware/requireLogin");

router.get("/singerprofile", requireLogin, (req, res) => {
    User.findById(req.user._id)
      .select("-password")
      
      .then((result) => {
        res.json({ user: result });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  module.exports=router;