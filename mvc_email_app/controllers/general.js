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

    //struct the variable so it easy to use
    const {firstName,lastName,email,message} = req.body;

    //static code for send email using SendGrid
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SEND_GRID_API_KEY);
            //your personal key
    const msg = {
      to: `jackienleee@gmail.com`,
      from: `${email}`,
      subject: 'Contact Us Form Submit',
      //text: 'and easy to do anywhere, even with Node.js', -> prefer html for fomat 
      html: 
      `
      Vistor's Full Name ${firstName} ${lastName} <br>
      Vistor's Email Address ${email} <br>
      Vistor's message : ${message} <br>
      `,
    };

    //Asynchornous operation (no idea how long it need take)
    //-> by default, it will jump to next command even if this doesn't finish or fail
    sgMail.send(msg)
    .then(()=>{
        res.redirect("/");
    })
    .catch(err=>{
        console.log(`Error ${err}`);
    })
        //-> this will promise the asynchornous operation finish and catch the error if it fail.
        //-> then() will only run when the operation success.
});


module.exports = router;