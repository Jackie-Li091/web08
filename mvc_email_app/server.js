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

//load controllers
const generalController = require("./controllers/general");
const productController = require("./controllers/product");

//map each controller back to app object
app.use("/",generalController);
        //-> any route that is "/...", will go to generalController in this use
app.use("/product",productController);
        //-> any route that is "/product/..." will go to productController in this use,
        //   but acutally it will go to first midleware first, but will fail match, so move to here



//set the server
const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`email web`);
});







