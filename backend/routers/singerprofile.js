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

  router.put("/addarea", requireLogin, (req, res) => {
     console.log(req.user._id);
    console.log(req.body.area);
    User.findByIdAndUpdate(req.user._id, {
      $push: { area: req.body.area},
    })
      .then((result) => {
        res.json({ user: result });
      })
      .catch((e) => {
        res.json({ error: e });
      });
  });

  router.put("/addgenre",requireLogin,(req,res)=>{
      User.findByIdAndUpdate(req.user._id,{
        $push:{genre:req.body.genre},
  }).then((result)=>{
      res.json({user:result})
  }).catch((e)=>{
      res.json({error:e})
  })
});

  module.exports=router;