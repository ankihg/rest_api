'use strict';
const mongoose = require('mongoose');

const treeSchema = new mongoose.Schema({
  name: String,
  lat: Number,
  lng: Number
});

module.exports = mongoose.model('Tree', treeSchema);
