const express = require('express');
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended: true}));

router.get('/',(req,res)=>{
    res.status(200).send("Welcome to ShopEasy");
});

router.get('/products',(req,res)=>{
    res.status(200).json(products);
});

router.get('/products/findByBrand',(req,res)=>{
    var brandIndex = brands.findIndex((item)=>{
        return (item.id == req.query.brandID);
    });
    console.log(brandIndex);
    var productIDs = [];
    if (brandIndex!=-1) {
        productIDs = brands[brandIndex].productIDs;
        productNames = [];
        obj = {};
        for(var i=0; i<productIDs.length; i++){
            for(var j=0; j<products.length; j++){
                if (productIDs[i]==products[j].id){
                    obj["Name"] = products[j].name;
                    obj["SKU"] = products[j].sku;
                    productNames.push(obj);
                    obj = {};
                }
            }
        }
        res.status(200).json(productNames);
    }
    else
        res.status(404).send("Brand not found");
});

router.get('/products/findByTaxSlab',(req,res)=>{
    productNames = [];
    obj = {};
    for(var i=0; i<products.length; i++){
        if (products[i].GST==req.query.slab) {
            obj["Name"] = products[j].name;
            obj["SKU"] = products[j].sku;
            productNames.push(obj);
            obj = {};
        }
    }
    console.log(productNames);
    res.status(200).json(productNames);
});

router.get('/products/:productID',(req,res)=>{
    //res.status(200).send("Welcome to "+req.params.productID);
    var productExists = products.find((item)=>{
        return (item.id==req.params.productID) //check if product exists
    });
    if (productExists){
        res.status(200).json(productExists);}
    else{
        res.status(404).json("Product doesn't exist");}
});

router.post('/products/:productID',(req,res)=>{
    var productExists = products.find((item)=>{
        return (item.id==req.params.productID) //check if product exists
    });
    if (productExists){
        res.status(400).json("Product already exists");}
    else{
        products.push(req.body);
        res.status(201).json("new product added");}
});

router.put('/products/:productID',(req,res)=>{
    var productIndex = products.findIndex((item)=>{
        return (item.id==req.params.productID) //check if product exists
    });
    if (productIndex){
        products[productIndex] = req.body;
        res.status(200).json("Product modified");}
    else{
        res.status(400).json("Invalid ID supplied");}
});

router.delete('/products/:productID',(req,res)=>{
    var productIndex = products.findIndex((item)=>{
        return (item.id==req.params.productID) //check if product exists
    });
    if (productIndex){
        products.splice(productIndex,1);
        res.status(200).json("Product deleted");}
    else{
        res.status(400).json("Invalid ID supplied");}
});

router.get('/products/:productID/getStatus',(req,res)=>{
    var productExists = products.find((item)=>{
        return (item.id==req.params.productID) //check if product exists
    });
    if (productExists){
        res.status(200).json(productExists.status);}
    else{
        res.status(404).json("Product not found with matching ID");}
})

router.get('/products/:productID/checkSize',(req,res)=>{
    //res.status(200).send("Welcome to "+req.params.productID);
    var sizes =[];
    var productExists = products.find((item)=>{
        return (item.id==req.params.productID) //check if product exists
    });
    if (productExists){
        for(var i=0; i<products.length; i++){ //get all the available sizes
            if( products[i].id==req.params.productID )
                sizes.push(products[i].size)
        }
        console.log(sizes);
        if (sizes.includes(req.query.size))
            res.status(200).send(true);
        else
            res.status(404).send("Size unavailable");
    }   
    else{
        res.status(400).json("Product doesn't exist in our database");}
});

router.get('/products/:productID/checkColour',(req,res)=>{
    //res.status(200).send("Welcome to "+req.params.productID);
    var colours =[];
    var productExists = products.find((item)=>{
        return (item.id==req.params.productID) //check if product exists
    });
    if (productExists){
        for(var i=0; i<products.length; i++){ //get all the available sizes
            if( products[i].id==req.params.productID )
            colours.push(products[i].colour)
        }
        console.log(colours);
        if (colours.includes(req.query.colour.toString()))
            res.status(200).send(true);
        else
            res.status(404).send("Colour unavailable");
    }   
    else{
        res.status(400).json("Product doesn't exist in our database");}
});

router.get('/brands',(req,res)=>{
    res.status(200).json(brands);
});

router.get('/categories/:category',(req,res)=>{
    var categoryExists = categories.find((item)=>{
        return (item.name==req.params.category) //check if category exists
    });
    if (categoryExists){
        res.status(200).json(categoryExists);}
    else{
        res.status(404).json("Category doesn't exist in our database");}
});

module.exports = router;