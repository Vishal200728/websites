const express = require("express");

const userRouter = require("./userRouter")

const app = express();

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use(express.urlencoded({ extended: true }));

app.use(userRouter);


app.get("/", (req, res, next) => {
  res.send(`
    <h1>wellcome to airbnb</h1>
    <a href="/host/add-home">add home</a>
    `)
});

app.get("/host/add-home", (req, res, next) => {
  res.send(`
    <h1>register your airbnb</h1>
    <form action="/host/add-home" method="post">
    <input type="text" name="housename" placeholder="enter house name"/>
    <input type="submit" value="register home"/>
    </form
    `)
})

app.post("/host/add-home", (req, res, next) => {
  console.log(req.body)
  res.send(`
    <h1>register is successfully </h1>
    <a href="/">back to main page</a>
    `)
})

app.use((req, res, next) => {
  res.status(404).send(`
    <h1>404 not found</h1>
    `)
})


const port = 3000;
app.listen(port, () => {
  console.log(`server is running on address http://localhost:${port}`);
});