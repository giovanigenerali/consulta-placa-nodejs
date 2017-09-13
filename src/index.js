import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import sinesp from 'sinesp-nodejs';

// declare app
let app = express();

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors());

// set constants
app.set('port', process.env.PORT || 3000);
app.set('site', 'https://github.com/wgenial/consulta-placa');

// default and redirect to github project
app.get("/", (req, res) => {
  res.redirect(app.get('site'));
});

// get plate info
app.get("/:plate", (req, res) => {
  let plate = req.params.plate.replace(/-/g,'');
  sinesp.consultaPlaca(plate, function(response) {
    res.setHeader('Cache-Control', 'public, max-age=86400'); // 1 day
    res.json(response);
  });
});

// start server
app.listen(app.get('port'), () => {
  return console.log("Listening on " + app.get('port') + "\nPress CTRL-C to stop server.");
});

export default app;