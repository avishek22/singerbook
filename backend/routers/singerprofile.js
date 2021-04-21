const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Appointment=require('../models/appointment')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../keys");
const requireLogin = require("../middleware/requireLogin");
const e = require("express");

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

router.put("/editprofile", requireLogin, (req, res) => {
  
  // if (req.body.newbio === req.body.bio) {
  //   return res.status(422).json({
  //     error: "Are you mad that you are updating the bio with old bio itself?",
  //   });
  // }
  console.log(req.user._id);
  console.log(req.body.firstname);
  console.log(req.body.lastname);
  User.findByIdAndUpdate(req.user._id, {
    $set: {
      bio: req.body.bio,
      Firstname: req.body.firstname,
      Lastname: req.body.lastname,
    },
  })
    .then((result) => {
      res.json({ user: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

//change it in client later

router.post("/appointmentrequest/:id", (req, res) => {
  //console.log(req.user._id);
  const{date,phone,name}=req.body;
  console.log(date,phone,name)
  const appointment=new Appointment({
      clientname:name,
      phone,
      date,
      userid:req.params.id
  })
  appointment.save()
  .then((result)=>{
    result;
    res.json({appointment:result})
  })
  .catch((err)=>{
    console.log(err)
  })
});

router.get('/showappointmentrequest',requireLogin,(req,res)=>{
  console.log(req.user._id)
  
  Appointment.find({'userid':req.user._id})
  
  .then((result) => {
    res.json({ user: result });
  })
  .catch((e) => {
    res.json({ error: e });
  });
})

router.delete('/rejectappointment/:appointmentid',(req,res)=>{
  Appointment.findOne({_id:req.params.appointmentid})
  .exec((err,appointment)=>{
    appointment.remove()
    .then((result)=>{
      res.json(result)
    })
    .catch((e)=>{
      console.log(e)
    })
  })
})

router.put('/addappointment/:appointmentid',requireLogin,(req,res)=>{
  console.log(req.user._id)
  console.log(req.params.appointmentid)
  User.findByIdAndUpdate(req.user._id,
    {
      $push:{appointmentrequest:req.params.appointmentid}
    })
    
    .then((result)=>{
      res.json(result)
    })
    .catch((e)=>{
      console.log(e)
    })
  
       
      
    
    
   
    
    

})



  module.exports=router;