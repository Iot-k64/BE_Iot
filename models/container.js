const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var containerSchema = new Schema({
  containerNo: {
    type: Number,
    required: true
  },
  grossWeight: {
    type: Number,
    required: true,
  },
  cubicMeter: {
    type: Number,
    required: true
  },
  tareWeight: {
    type: Number,
    required: true
  },
  netWeight: {
    type: Number,
    required: true
  },
  position: {
    type: Number,
    require: true,
  }
})

const ContainerModel = mongoose.model('Container', containerSchema);

module.exports = {
  ContainerModel
};