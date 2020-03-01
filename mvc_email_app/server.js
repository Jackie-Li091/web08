const express = require("express");
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');


const app = express();

//handlebars middleware 
//(This tells Express to set handlebars as the template engine)
app.engine('handlebars',exphbs());
app.set('view engine','handlebars');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = 3000;

//home route
app.get("/",(req,res)=>{

    res.render();
});

//contact us route
app.get("/contact-us",(req,res)=>{

    res.render();
});

//user submit the request
app.post("/contact-us",(req,res)=>{

    res.render();
});

//show all product
app.get("/product/list",(req,res)=>{

    res.render();
});

//show add product form
app.get("/product/add",(req,res)=>{

    res.render();
});

//user submit the add product form
app.post("/product/add",(req,res)=>{

    res.render();
});



app.listen(PORT,()=>{
    console.log(`email web`);
});







