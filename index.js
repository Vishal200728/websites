import express from "express";
import path from "path";

const app = express();

let product = [
  {
    title: "iphone-16", price: 70000},
    {title: "samsung-galaxy", price: 80000},
]

app.get("/", (req, res) => {
  let name = "vishal";
  res.render("index.ejs", {name, product});
})

// app.set("view engine", "ejs");

// app.set("views", path.join(path.resolve(), "views"));

app.use(express.static(path.join(path.resolve(), "public")));

app.get("/", (req, res) => res.render("index.ejs"));

const port = 3000;
app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});