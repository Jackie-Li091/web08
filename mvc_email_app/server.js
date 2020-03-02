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

app.use(express.static('public'));

//load product model
const productModel = require("./models/product");

const PORT = 3000;

//home route
app.get("/",(req,res)=>{

    res.render("general/home",{
        title : "home page"
    });
});

//contact us route
app.get("/contact-us",(req,res)=>{

    res.render("general/contactUs",{
        title : "contact-us page"
    });
});

//user submit the request
app.post("/contact-us",(req,res)=>{

    res.render();
});

//show all product
app.get("/product/list",(req,res)=>{

    res.render("products/productList",{
        title : "product list page",
        products : productModel.getAllProducts()
    });
});

//show add product form
app.get("/product/add",(req,res)=>{

    res.render("products/productAdd",{
        title : "add product page"
    });
});

//user submit the add product form
app.post("/product/add",(req,res)=>{

    res.render();
});



app.listen(PORT,()=>{
    console.log(`email web`);
});







