'use strict';
const express = require('express');
const speciessRouter = module.exports = new express.Router();
let Species = require(__dirname+'/../models/species-model.js');

// speciessRouter.route('/')

speciessRouter.get('/', (req, res) => {
  Species.find({}, (err, speciess) => {
    if (err) return res.status(500).send('error reading speciess').end();
    return res.status(200).json(speciess).end();
  });
});

speciessRouter.get('/:id', (req, res) => {
  Species.findById(req.params.id, (err, species) => {
    if (err) return res.status(500).send('error reading species with id  '+req.params.id).end();
    return res.status(200).json(species).end();
  });
});

speciessRouter.post('/', (req, res) => {
  var newSpecies = new Species(req.body);
  newSpecies.save((err, species) => {
    if (err) return res.status(500).send('error creating species').end();
    return res.status(200).json(species).end();
  });
});

speciessRouter.put('/:id', (req, res) => {
  Species.findByIdAndUpdate(req.params.id, req.body, (err, species) => {
    if (err) return res.status(500).send('error updating species with id '+req.params.id).end();
    return res.status(200).json(species).end();
  });
});

speciessRouter.delete('/:id', (req, res) => {
  Species.findByIdAndRemove(req.params.id, (err) => {
    if (err) return res.status(500).send('error deleting species with id '+req.params.id);
    return res.sendStatus(200);
  });
});
