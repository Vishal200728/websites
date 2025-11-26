import express from "express";
import path from "path";
 
const app = express();

app.get('/', (req, res) => {
  const dir = path.resolve();
  const url = path.join(dir, "index.html");
  console.log('fullpath =', url);
  res.sendFile(url);
});

const port = 3001;
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
})