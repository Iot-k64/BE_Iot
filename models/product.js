const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  standardTemp: {
    type: Number,
    required: true,
  },
  standardHumi: {
    type: Number,
    required: true
  }, 
  maxDeviationTemp: {
    type: Number,
    require: true
  },
  maxDeviationHumi: {
    type: Number,
    require: true
  }

})

const ProductModel = mongoose.model('Product', productSchema);

module.exports = {
  ProductModel
};