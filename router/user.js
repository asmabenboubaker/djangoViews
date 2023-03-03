const express=require('express');
const router=express.Router();
const usercontroller=require("../controller/UserController");
const validate=require('../midill/validate')
const User=require('../models/user');
router.get('/show',(req,res,next)=>{
res.send('bonjour asma');
});
 
  //   router.get('/get/:name/:email/:cin', (req, res, next) => {
  //       console.log("notre data:" + JSON.stringify(req.params));
  //       const { name, email, cin } = req.params;
  //       const newUser = new User({
  //         name,
  //         email,
  //         cin
  //       }).save((err, data) => {
  //           if (err) {
  //             console.log(err);
  //             return res.status(500).send(err);
  //           }
        
  //           console.log(data);
  //           return res.json(data);
  //         });
       
  //     });
    
  //   /* add user */
  //  /*   router.post('/add', function(req, res, next) {
  //       console.log("resultat:" + req.body);
      
  //       try {
  //         const user = new User(req.body);
  //         user.save((err, data) => {
  //           if (err) {
  //             console.log(err);
               
  //           }
  //           console.log(data);
  //           return res.json(data);
  //         });
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     });*/
  //     /*
  //     router.put('/update2/:id', async function(req, res, next) {
  //       try{
  //        await User.findByIdAndupdate(req.params.id,req.body,{new:true})
  //         res.send("updated")
  //       }catch(err){
  //         res.send(err);
  //       }
  //     })*/
  //    /* router.put('/update/:id', function(req, res, next) {
  //       const id = req.params.id;
  //       const user = req.body; 
  //       User.updateOne({ _id: id }, user, function(err, data) {
  //         if (err) {
  //           console.log(err);
  //         }
  //         console.log(data);

  //         return res.json({ message: 'user updated' });
  //       });
  //     });*/
  //   /*router.delete("/delete2/:id", async function(req,res){
  //     try{
  //       await User.findByIdAndRemove(req.params.id);
  //       //console.log()
  //       res.send("deleted")
  //     }catch(err){
  //       res.send(err)
  //     }
  //   })*/
  //   /* find all */
  //   router.get("/getall",async function(req,res){
  //     try{
  //       const data= await User.find();
  //       res.send(data)
  //     }catch(err){
  //       res.send(err)
  //     }
  //   })
  //   /*get by id */

  //   router.get("/getbyid/:id",async function(req,res){
  //     try{
  //       const data =await User.findById(req.params.id);
  //       res.send(data);
  //     }catch(err){
  //       res.send(err)
  //     }
  //   })
  //     router.delete('/delete/:id', function(req, res, next) {
  //       const id = req.params.id;
      
  //       User.deleteOne({ _id: id }, function(err, data) {
  //         if (err) {
  //           console.log(err);
  //         }
  //         console.log(data);
  //         return res.json({ message: 'user deleted ' });
  //       });
  //     });
  //     router.get('/get/:id', function(req, res, next) {
  //       const id = req.params.id;
      
  //       User.findOne({ _id: id }, function(err, user) {
  //         if (err) {
  //           console.log(err);
         
  //         }
      
  //         return res.json(user);
  //       });
  //     });

    router.post("/add",validate,usercontroller.add);
    router.put("/update/:id",usercontroller.update)
module.exports=router;