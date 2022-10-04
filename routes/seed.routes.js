const Product = require("../models/product.model");
const data =require('../data');

const router = require("express").Router();

router.get("/", (req, res, next) => {
  Product.deleteMany({})
  .then(()=> Product.insertMany(data))
.then( (createdProducts) => res.send({createdProducts}))
});

module.exports = router;