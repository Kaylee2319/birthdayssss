require('./db/config');

const express = require('express'),
  app = express();
 const morgan = require('morgan');

const router = require('./routes/birthdays');


app.use(express.json());

app.use(morgan('dev'));
app.use('/api/birthdays', router);

app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.statusCode || 500);
    res.json({
      message: err.message,
      error: err,
    });
  });

module.exports = app;
