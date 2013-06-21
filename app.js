var express = require('express');
var app = module.exports = express();


//List of websites
var sites = {
  'site1': require('./site1.js'),
  'site2': require('./site2.js')
};

//Route the sites.
for(var i in Object.keys(sites)) {
  (function(j) {
    app.all("/" + Object.keys(sites)[j] + "/*", function(req, res) {
      req.url = req.url.replace("/" + Object.keys(sites)[j], "");
      sites[Object.keys(sites)[j]](req, res);
    });
  })(i);
}

app.get('/id', function(req, res) {
  res.write("My id: Parent site.");
  res.end();
});

if (!module.parent) {
    app.listen(8000);
    console.log("Running parent app!");
}

