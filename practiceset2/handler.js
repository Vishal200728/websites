const { sumRequestHandler } = require('./sum');

const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === '/') {
    res.setHeader('content-type', 'text/html');
    res.write(`
      <html>
      <head><title>welcome to calculator</title></head>
      <body>
      <h1>welcome to calculator</h1>
      <a href="/calculator">go to calculator</a>
      </body>
      </html>
    `);
    return res.end();
  }

  else if (req.url.toLowerCase() === '/calculator') {
    res.setHeader('content-type', 'text/html');
    res.write(`
      <html>
      <head><title>calculator</title></head>
      <body>
      <h1>here is the calculator</h1>

      <form action="/calculate-result" method="post">
        <input type="text" name="first" placeholder="first number" />
        <input type="text" name="second" placeholder="second number" />
        <button type="submit">calculate</button>
      </form>

      </body>
      </html>
    `);
    return res.end();
  }

  else if (req.url === '/calculate-result' && req.method === 'POST') {
    return sumRequestHandler(req, res);
  }

  // 404
  res.setHeader('content-type', 'text/html');
  res.write(`
    <html>
    <head><title>404</title></head>
    <body>
    <h1>404 page not found</h1>
    <a href="/">go home</a>
    </body>
    </html>
  `);
  res.end();
};

exports.requestHandler = requestHandler;
