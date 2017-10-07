var express = require('express');
var sinesp = require('sinesp-nodejs');
var app = express();
var cache = require('apicache').options({
  headers: {
    'cache-control': 'no-cache'
  }
})
.middleware;


app.set('port', process.env.PORT || 3000);
app.set('ip', process.env.IP || '127.0.0.1');
app.set('site', 'https://github.com/wgenial/consulta-placa');

app.get("/", function(req, res, next) {
  res.redirect(app.get('site'));
});

app.get("/:plate", cache('1 day'), function(req, res, next) {
  var plate = req.params.plate.replace(/\-/g,'');
  sinesp.consultaPlaca(plate, function(response) {
    res.json(response);
  });
});

app.listen(app.get('port'), app.get('ip'), function() {
  return console.log("Listening on " + app.get('port') + "\nPress CTRL-C to stop server.");
});

exports = module.exports = app;
