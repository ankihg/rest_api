'use strict';
const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
let Species = require(__dirname+'/models/species-model.js');

let app = express();

let DB_PORT = process.env.MONGOLAB_URI || 'mongodb://localhost/db';
mongoose.connect(DB_PORT);

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(`${req.method} request for ${req.url}`);
  next();
});

app.use('/speciess', require(__dirname + '/routes/speciess-router.js'));

// app.get('/speciess', (req, res) => {
//   Species.find({}, (err, speciess) => {
//     if (err) return res.status(500).send('error reading speciess').end();
//     return res.status(200).json(speciess).end();
//   });
// });
//
// app.get('/speciess/:id', (req, res) => {
//   Species.findById(req.params.id, (err, species) => {
//     if (err) return res.status(500).send('error reading species with id  '+req.params.id).end();
//     return res.status(200).json(species).end();
//   });
// });
//
// app.post('/speciess', (req, res) => {
//   var newSpecies = new Species(req.body);
//   newSpecies.save((err, species) => {
//     if (err) return res.status(500).send('error creating species').end();
//     return res.status(200).json(species).end();
//   });
// });
//
// app.put('/speciess/:id', (req, res) => {
//   Species.findByIdAndUpdate(req.params.id, req.body, (err, species) => {
//     if (err) return res.status(500).send('error updating species with id '+req.params.id).end();
//     return res.status(200).json(species).end();
//   });
// });
//
// app.delete('/speciess/:id', (req, res) => {
//   Species.findByIdAndRemove(req.params.id, (err) => {
//     if (err) return res.status(500).send('error deleting species with id '+req.params.id);
//     return res.sendStatus(200);
//   });
// });

app.listen(3000, () => console.log('server speaking.'));
