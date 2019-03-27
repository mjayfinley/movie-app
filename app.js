const express = require("express");
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");

const movieRoutes = require("./routes/movies");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", movieRoutes);
app.use("/public", express.static("public"));

const VIEWS_PATH = path.join(__dirname, "/views");
app.engine("mustache", mustacheExpress(VIEWS_PATH + "/partials", ".mustache"));

app.set("views", "./views");

app.set("view engine", "mustache");

app.listen(3000, () => {
  console.log("Server is running...");
});
