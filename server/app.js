const http = require('http')
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === '/') {
   res.setHeader('content-type', 'text/html');
  res.write("<html><head><title>complete codding</title></head>");
  res.write('<body<h1>Wellcome to home</h1></body>')
  res.write('</html>')
return  res.end();
   } else if (req.url === '/products') {
  res.setHeader('content-type', 'text/html');
  res.write("<html><head><title>complete codding</title></head>");
  res.write('<body<h1>checkout the products</h1></body>')
  res.write('</html>')
return res.end();
  }else if (req.url === '/contact') {
  res.setHeader('content-type', 'text/html');
  res.write("<html><head><title>complete codding</title></head>");
  res.write('<body<h1>wellcome to contact</h1></body>')
  res.write('</html>')
return res.end();
};
  res.setHeader('content-type', 'text/html');
  res.write("<html><head><title>complete codding</title></head>");
  res.write('<body<h1>like/ share/</h1></body>')
  res.write('</html>')
  res.end();
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server running on address http://localhost:${PORT}`);
});