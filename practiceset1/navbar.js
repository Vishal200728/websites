const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/home") {
    res.write("<h1>wellcome to home</h1>");
    return res.end();
  } else if (req.url === "/men") {
    res.write("<h1>wellcome to men</h1>");
    return res.end();
  } else if (req.url === "/women") {
    res.write("<h1>wellcome to women</h1>");
    return res.end();
  } else if (req.url === "/kids") {
    res.write("<h1>wellcome to kids</h1>");
    return res.end();
  } else if (req.url === "/cart") {
    res.write("<h1>wellcome to cart</h1>");
    return res.end();
  }
  res.write(`
     <html>
<head>
  <title>complete cooding</title>
</head>
<body>
  <ul>
    <li><a href="home">home</a></li>
    <li><a href="men">men</a></li>
    <li><a href="women">women</a></li>
    <li><a href="kids">kids</a></li>
    <li><a href="cart">cart</a></li>
  </ul>
</body>
</html>
    `);
  res.end();
});

const port = 3000;
server.listen(port, () => {
  console.log(`server is staring on address ${port}`);
});
