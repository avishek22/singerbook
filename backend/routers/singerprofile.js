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
    if(!req.body.area){
      return res.status(422).json({ error: "Please add an area" });
    }
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

  router.put("/addcategory", requireLogin, (req, res) => {
    console.log(req.user._id);
   console.log(req.body.category);
   if(!req.body.category){
     return res.status(422).json({ error: "Please add a category" });
   }
   User.findByIdAndUpdate(req.user._id, {
     $push: { category: req.body.category},
   })
     .then((result) => {
       res.json({ user: result });
     })
     .catch((e) => {
       res.json({ error: e });
     });
 });

//   router.put("/checkarea", requireLogin, (req, res) => {
//     console.log(req.user._id);
//    console.log(req.body.area);
//    let p=req.body.area
//    if(!req.body.area){
//      return res.status(422).json({ error: "Please add an area" });
//    }
//    User.findByIdAndUpdate(req.user._id,  {  p:{$in:area}
//    })
//      .then((result) => {
//        res.json({ error: 'already' });
//      })
//      .catch((e) => {
//        res.json({ error: e });
//      });
//  });


  router.put("/addgenre",requireLogin,(req,res)=>{
    if(!req.body.genre){
      return res.status(422).json({ error: "Please add a genre" });
    }
    
      User.findByIdAndUpdate(req.user._id,{
        $push:{genre:req.body.genre},
  }).then((result)=>{
      res.json({user:result})
  }).catch((e)=>{
      res.json({error:e})
  })
});

router.put("/removegenre",requireLogin,(req,res)=>{
    User.findByIdAndUpdate(req.user._id,{
      $pull:{genre:req.body.genre},
}).then((result)=>{
    res.json({user:result})
}).catch((e)=>{
    res.json({error:e})
})
});

router.put("/removecategory",requireLogin,(req,res)=>{
  User.findByIdAndUpdate(req.user._id,{
    $pull:{category:req.body.category},
}).then((result)=>{
  res.json({user:result})
}).catch((e)=>{
  res.json({error:e})
})
});

router.put("/removearea",requireLogin,(req,res)=>{
    User.findByIdAndUpdate(req.user._id,{
      $pull:{area:req.body.area},
}).then((result)=>{
    res.json({user:result})
}).catch((e)=>{
    res.json({error:e})
})
});

  module.exports=router;