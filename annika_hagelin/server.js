'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

let app = express();

let DB_PORT = process.env.MONGOLAB_URI || 'mongodb://localhost/db';
mongoose.connect(DB_PORT);

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(`${req.method} request for ${req.url}`);
  next();
});

app.get('/speciess', (req, res) => {
  res.sendStatus(200).end();
});

app.listen(3000, () => console.log('server speaking.'));
