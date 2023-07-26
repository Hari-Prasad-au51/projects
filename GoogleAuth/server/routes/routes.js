const express=require("express")
const router=express.Router()
const passport = require('passport');


router.get("/login/success",(req,res)=>{
  if(req.user){
  res.status(200).json({
    success:true,
    message:"success",
    user:req.user
   
  })
}
else{
  res.json({
    success:false,
    message:"failure"
  });
}
})


router.get("/login/failed",(req,res)=>{
  
  res.status(401).json({
    success:false,
    message:"failure"
  });

})

router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      console.error("Error logging out:", err);
      return res.status(500).json({ success: false, message: "Failed to logout" });
    }
    res.redirect("http://localhost:3000/");
  });
});


router.get("/google",passport.authenticate("google",{scope:["profile","email"]}))

router.get('/google/callback',
  passport.authenticate('google', { 
    successRedirect:"http://localhost:3000/home",
    failureRedirect: '/login/failed'
   
 }));



module.exports= router

