const express = require("express");
const app = express();
app.use(express.static("./server/static"));
app.use(express.static("./client/dist"));
app.listen(8082, () => {});
app.get('/test', function (req, res) {
  res.send('Just a test');
});
app.get("/*", function(req, res) {
  res.sendFile(__dirname + '/server/static/index.html')
});
