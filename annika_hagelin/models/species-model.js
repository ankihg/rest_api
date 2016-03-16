'use strict';
const mongoose = require('mongoose');

const speciesSchema = new mongoose.Schema({
  name: String,
  cmnName: String
});

module.exports = mongoose.model('Species', speciesSchema);
