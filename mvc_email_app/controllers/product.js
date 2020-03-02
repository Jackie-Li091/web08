const express = require('express');
const router = express.Router();

//load product model
const productModel = require("../models/product"); //back to local,


//show all product
router.get("/list",(req,res)=>{

    res.render("products/productList",{
        title : "product list page",
        products : productModel.getAllProducts()
    });
});

//show add product form
router.get("/add",(req,res)=>{

    res.render("products/productAdd",{
        title : "add product page"
    });
});

//user submit the add product form
router.post("/add",(req,res)=>{

    res.render();
});

module.exports = router;