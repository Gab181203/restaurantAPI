const express = require("express");
const cors = require("cors");
const app = express();
const connection = require("./src/database");
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.status(200).send("restaurant");
});

app.listen(3000, () => console.log("Listening on port 3000"));
//import categories routes and tell app to use them
const categoriesRoute = require("./src/routes/categories/categories_controller");
app.use("/categories", categoriesRoute);

const formulasRoute = require("./src/routes/formulas/formulas_controller");
app.use("/formulas", formulasRoute);

const itemsRoute = require("./src/routes/items/items_controller");
app.use("/items", itemsRoute);
