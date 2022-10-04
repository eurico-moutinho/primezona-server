const Product = require("../models/product.model");
const data =require('../data');
const User = require("../models/User.model");
const datauser =require('../datauser');

const router = require("express").Router();

router.get("/", (req, res, next) => {
  Product.deleteMany({})
  .then(()=> Product.insertMany(data))
.then( (createdProducts) => {
    User.deleteMany({}).then(()=> User.insertMany(datauser))
    .then((createdUsers) =>
    res.send({createdProducts, createdUsers}))})
});

module.exports = router;