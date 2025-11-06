const express = require('express');
const router = express.Router();


let product = [
  {name:"Laptop",price:1000,brand:"Apple"},
  {name:"Phone",price:500,brand:"Samsung"},
  {name:"Watch",price:300,brand:"Oppo"},
  {name:"Tablet",price:200,brand:"Nokia"},
]



module.exports = router;