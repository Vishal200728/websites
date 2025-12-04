const express = require("express");
const app = express();


app.get("/", (req, res) => {
  res.json({message: "hello wellcome to main page"})
});

app.get("/home", (req, res) => {
  res.json({message: "hello wellcome to home page",
   name: "john",
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`server is running on address http://localhost:${port}`);
}) ;