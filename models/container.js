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
    type: String,
    require: true,
  },
  status: {
    type: Number,
    default: 1,
    required: true
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product'
  }
})

const ContainerModel = mongoose.model('Container', containerSchema);

module.exports = {
  ContainerModel
};