const router = require("express").Router();
const Product = require("../models/product.model");

router.get("/products", async (req, res, next) => {
  const products = await Product.find();
  res.send(products);
});

router.get("/product/slug/:slug", async (req, res, next) => {
  const product = await Product.findOne({ slug: req.params.slug });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

router.get("/product/:id", async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

module.exports = router;
