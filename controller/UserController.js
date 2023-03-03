const express=require('express');
//const router=express.Router();

const User=require('../models/user');

function add (req, res, next) {
    console.log("resultat:" + req.body);
  
    try {
      const user = new User(req.body);
      user.save((err, data) => {
        if (err) {
          console.log(err);
           
        }
        console.log(data);
        return res.json(data);
      });
    } catch (err) {
      console.log(err);
    }
  }
  function update(req, res, next) {
    const id = req.params.id;
    const user = req.body; 
    User.updateOne({ _id: id }, user, function(err, data) {
      if (err) {
        console.log(err);
      }
      console.log(data);

      return res.json({ message: 'user updated' });
    });
  }
  async function deleteU(req,res){
    try{
      await User.findByIdAndRemove(req.params.id);
      //console.log()
      res.send("deleted")
    }catch(err){
      res.send(err)
    }
  }

  module.exports={add,update,deleteU}