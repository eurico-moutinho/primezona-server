const router = require("express").Router();
const data = require("../data");

router.get("/products", (req, res, next) => {
  res.send(data);
});

router.get("/products/slug/:slug", (req, res, next) => {
  const product = data.find(e => { console.log(e.slug)
    e.slug === req.params.slug})
  if(product){
  res.send(data);}else{res.status(404).send({message: 'Product Not Found'})}
});


module.exports = router;