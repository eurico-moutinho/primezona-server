
require("dotenv/config");

require("./db");

const express = require("express");

const app = express();

require("./config")(app);

const allRoutes = require("./routes/index.routes");
app.use("/api", allRoutes);

const prodRoutes = require("./routes/product.routes");
app.use("/api", prodRoutes);

const seedRoutes = require("./routes/seed.routes");
app.use("/api/seed", seedRoutes);

const userRoutes = require("./routes/user.routes");
app.use("/api/users", userRoutes);

require("./error-handling")(app);

module.exports = app;
