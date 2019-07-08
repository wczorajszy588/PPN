const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const appRoute = require("./routes/index");

app.listen(8080, "localhost", function() {
    console.log("Server is running on port 8080");
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/", appRoute);

app.set("views", __dirname + "\\views");
app.set("view engine", "pug");

module.exports = app;