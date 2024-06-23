const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());
app.use("/", (req, res, next) => {
  console.log("This Always runs");
  // res.send("<h1>Hello From Express</h1>");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("In the middleware");
  res.send(
    "<form action='/product' method='POST'><input name='title'  type='text'><button type='submit'>Add Product</button></form>"
  );
});
app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  console.log("This Always runs");
  res.send("<h1>Hello From Express</h1>");
});
app.listen(3000);
