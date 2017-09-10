'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _sinespNodejs = require('sinesp-nodejs');

var _sinespNodejs2 = _interopRequireDefault(_sinespNodejs);

var _config = require('./config.json');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// declare app
var app = (0, _express2.default)();

// logger
app.use((0, _morgan2.default)('dev'));

// 3rd party middleware
app.use((0, _cors2.default)({
  exposedHeaders: _config2.default.corsHeaders
}));

// set constants
app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 3000);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || 'localhost');
app.set('site', 'https://github.com/wgenial/consulta-placa');

// default and redirect to github project
app.get("/", function (req, res, next) {
  res.redirect(app.get('site'));
});

// get plate info
app.get("/:plate", function (req, res, next) {
  var plate = req.params.plate.replace(/\-/g, '');
  _sinespNodejs2.default.consultaPlaca(plate, function (response) {
    res.setHeader('Cache-Control', 'public, max-age=86400'); // 1 day
    res.json(response);
  });
});

// start server
app.listen(app.get('port'), app.get('ip'), function () {
  return console.log("Listening on " + app.get('port') + "\nPress CTRL-C to stop server.");
});

exports.default = app;

//# sourceMappingURL=server.js.map