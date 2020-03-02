const express = require('express');
const router = express.Router();



//home route
router.get("/",(req,res)=>{

    res.render("general/home",{
        title : "home page"
    });
});

//contact us route
router.get("/contact-us",(req,res)=>{

    res.render("general/contactUs",{
        title : "contact-us page"
    });
});

//user submit the request
router.post("/contact-us",(req,res)=>{

    //res.render();
});


module.exports = router;