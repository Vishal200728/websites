const fs = require('fs');

const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  // Home Page (form)
  if (req.url === '/' && req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
      <head><title>Form</title></head>
      <body>
        <h1>Enter your details</h1>
        <form action="/submit-details" method="POST">
          <input type="text" name="username" placeholder="Enter your name" /><br><br>

          <label>Male</label>
          <input type="radio" name="gender" value="male">

          <label>Female</label>
          <input type="radio" name="gender" value="female"><br><br>

          <button type="submit">Submit</button>
        </form>
      </body>
      </html>
    `);
    return res.end();
  }

  // Handle Form POST
  if (req.url === '/submit-details' && req.method === 'POST') {
    let body = [];

    req.on("data", chunk => {
      console.log(chunk); 
      body += chunk.toString();
    });

    req.on("end", () => {
      console.log("FORM DATA:", body);
      const params = new URLSearchParams(body);
      // const bodyobject = {};
      // for (const [key, val] of params.entries()) {
      //   bodyobject[key] = val;
      // }
      const bodyobject = Object.fromEntries(params);
      console.log(bodyobject);
 fs.writeFileSync('user.txt', JSON.stringify(bodyobject));
      return res.end();
    });

    return;
  }

  // Products Page
  if (req.url === '/products') {
    res.setHeader('Content-Type', 'text/html');
    res.write("<html><body><h1>Products Page</h1></body></html>");
    return res.end();
  }

  // Contact Page
  if (req.url === '/contact') {
    res.setHeader('Content-Type', 'text/html');
    res.write("<html><body><h1>Contact Page</h1></body></html>");
    return res.end();
  }

  // Unknown Route
  res.setHeader('Content-Type', 'text/html');
  res.write("<html><body><h1>404 Page Not Found</h1></body></html>");
  res.end();
};
module.exports = requestHandler;

