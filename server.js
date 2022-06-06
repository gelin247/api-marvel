const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/api-marvel'));
app.listen(process.env.PORT || 8080);

app.get('/*', function (req, res) {
  const fullPath = path.join(__dirname + '/dist/api-marvel/index.html');
  console.log(" Fetching from.." + fullPath);
  res.sendFile(fullPath);
})

console.log('Server started running..');