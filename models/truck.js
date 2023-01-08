const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var truckSchema = new Schema({
  licensePlates: {
    type: String,
    required: true
  },
  vehicleTonnage: {
    type: Number,
    required: true,
  },
  status: {
    type: Number,
    required: true
  }
})

const TruckModel = mongoose.model('Truck', truckSchema);

module.exports = {
  TruckModel
};