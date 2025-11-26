const fs = require('fs')
fs.writeFile('output.pdf',"hello wellcome", (err) => {
  if (err) console.log("error occured");
  else console.log('file written successfully');
});