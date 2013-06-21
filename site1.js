var express = require('express');
var app = module.exports = express();

app.get('/id', function(req, res) {
  res.write("My id: Site 1");
  res.end();
});

if (!module.parent) {
    app.listen(8000);
    console.log("Running site 1.");
}

