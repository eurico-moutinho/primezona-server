const router = require("express").Router();
const data = require("../data");

router.get("/products", (req, res, next) => {
  res.send(data);
});

router.get("/product/slug/:slug", (req, res, next) => {
  const product = data.find(e => {return (e.slug == req.params.slug)})
  if(product){
  res.send(product);}else{res.status(404).send({message: 'Product Not Found'})}
});

router.get("/product/:slug", (req, res, next) => {
  const product = data.find(e => {return (e.slug == req.params.slug)})
  if(product){
  res.send(product);}else{res.status(404).send({message: 'Product Not Found'})}
});


module.exports = router;