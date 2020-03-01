const express = require("express");
const exphbs = require('express-handlebars');


const app = express();

//handlebars middleware 
//(This tells Express to set handlebars as the template engine)
app.engine('handlebars',exphbs());
app.set('view engine','handlebars');

const PORT = 3000;

app.get("/",(req,res)=>{

    res.render();
});

app.get("/contact-us",(req,res)=>{

    res.render();
})



app.listen(PORT,()=>{
    console.log(`email web`);
})







