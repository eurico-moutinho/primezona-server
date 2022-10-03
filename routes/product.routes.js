const router = require("express").Router();
const data = require("../data");

router.get("/products", (req, res, next) => {
  res.send(data);
});


module.exports = router;