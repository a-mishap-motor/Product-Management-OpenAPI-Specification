const index = require('./index');
const express = require("express");
var cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/',index);

products = [
    {
        "id": 1,
        "category": { "id": 5, "name": "Electronics" },
        "name": "Pixel 2",
        "sku": "PIXEL2BB",
        "price": 60000,
        "GST": 12,
        "brand": "Google",
        "colour": "Pure Black",
        "model": "base",
        "mediaURLs": [ "1.jpg", "2.jpg" ],
        "metadata": { },
        "tags": [
            { "id": 0, "name": "phone" }
        ],
        "status": "available",
        "checkoutType": "physical"
    },
    {
        "id": 1,
        "category": { "id": 5, "name": "Electronics" },
        "name": "Pixel 2",
        "sku": "PIXEL2WB",
        "price": 60000,
        "GST": 12,
        "brand": "Google",
        "colour": "White",
        "model": "base",
        "mediaURLs": [ "1.jpg", "2.jpg" ],
        "metadata": { },
        "tags": [
            { "id": 0, "name": "phone" }
        ],
        "status": "available",
        "checkoutType": "physical"
    },
    {
        "id": 2,
        "category": { "id": 5, "name": "Electronics" },
        "name": "Kindle Paperwhite",
        "sku": "KINDP88923",
        "price": 10000,
        "GST": 12,
        "brand": "Amazon",
        "colour": "Black",
        "model": "paperwhite",
        "mediaURLs": [ "1.jpg", "2.jpg" ],
        "metadata": { "coverIncluded": "Yes" },
        "tags": [
            { "id": 0, "name": "phone" }
        ],
        "status": "available",
        "checkoutType": "physical"
    },
]

categories = [
    { 
        "id": 1, 
        "name": "Electronics", 
        "subcategories": [
            { "id": 11, "name": "Laptops" },
            { "id": 12, "name": "Mobiles" },
            { "id": 13, "name": "Wearables" },
            { "id": 14, "name": "Smart Home" }, 
        ]
    },    
    { 
        "id": 2, 
        "name": "Home Appliances" ,
        "subcategories": [
            { "id": 21, "name": "Televisions" },
            { "id": 22, "name": "Refrigerators" },
            { "id": 23, "name": "Washers & Dryers" },
            {
                "id": 24, 
                "name": "Kitchen",
                "subcategories": [
                    { "id": 241, "name": "Toasters" },
                    { "id": 242, "name": "Microwaves" },
                    { "id": 243, "name": "Mixer Grinders" },
                ]
            }
        ]
    },
    {
        "id": 3, 
        "name": "Men's Section",
        "subcategories": [
            { "id": 31, "name": "Footwear" },
            { "id": 32, "name": "Top Wear" },
            { "id": 33, "name": "Bottom Wear" },
            { "id": 34, "name": "Grooming" },
        ] 
    },
    { 
        "id": 4, 
        "name": "Women's Section",
        "subcategories": [
            { 
                "id": 41, 
                "name": "Clothing",
                "subcategories": [
                    { "id": 411, "name": "Western Wear" },
                    { "id": 412, "name": "Ethnic Wear" },
                    { "id": 413, "name": "Sports Wear" },
                    { "id": 414, "name": "Swim & Beach Wear" },
                ]},
                { "id": 42, "name": "Footwear" },
                { "id": 43, "name": "Jewellery" },
                { "id": 44, "name": "Beauty & Grooming" },
                { "id": 45, "name": "Accessories" },
        ] 
    },
    { "id": 5, "name": "Kids' Section" },
    { "id": 6, "name": "Home & Furniture" },
    { "id": 7, "name": "Books & Magazines" },
    { "id": 8, "name": "Sports & Fitness" }
]

brands = [
    { "id": 1, "name": "Google", "productIDs": [1] },
    { "id": 2, "name": "Amazon", "productIDs": [2] }
]

app.listen(5000);