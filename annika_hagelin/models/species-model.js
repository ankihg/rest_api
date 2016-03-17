'use strict';
module.exports = (mongoose, models) => {

  const speciesSchema = new mongoose.Schema({
    name: String,
    cmnName: String
  });

  models.Species = mongoose.model('Species', speciesSchema);
}
