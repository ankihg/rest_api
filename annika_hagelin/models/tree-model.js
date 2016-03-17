'use strict';
module.exports = (mongoose, models) => {
  const treeSchema = new mongoose.Schema({
    name: String,
    lat: Number,
    lng: Number
  });

  models.Tree = mongoose.model('Tree', treeSchema);
}
