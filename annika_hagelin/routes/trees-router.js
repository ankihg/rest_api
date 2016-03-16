'use strict';
const express = require('express');
const router = module.exports = new express.Router();
let Tree = require(__dirname+'/../models/tree-model.js');

router.route('/')
  .get((req, res) => {
    Tree.find({}, (err, trees) => {
      if (err) return res.status(500).send('error reading trees').end();
      return res.status(200).json(trees).end();
    });
  })
  .post((req, res) => {
    var newTree = new Tree(req.body);
    newTree.save((err, tree) => {
      if (err) return res.status(500).send('error creating tree').end();
      return res.status(200).json(tree).end();
    });
  });

router.route('/:id')
  .get((req, res) => {
    Tree.findById(req.params.id, (err, tree) => {
      if (err) return res.status(500).send('error reading tree with id  '+req.params.id).end();
      return res.status(200).json(tree).end();
    });
  })
  .put((req, res) => {
    Tree.findByIdAndUpdate(req.params.id, req.body, (err, tree) => {
      if (err) return res.status(500).send('error updating tree with id '+req.params.id).end();
      return res.status(200).json(tree).end();
    });
  })
  .delete((req, res) => {
    Tree.findByIdAndRemove(req.params.id, (err) => {
      if (err) return res.status(500).send('error deleting tree with id '+req.params.id);
      return res.sendStatus(200);
    });
  });
