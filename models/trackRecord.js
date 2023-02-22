const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var trackRecordSchema = new Schema({
  temperature: {
    type: Number,
    required: true
  },
  humidity: {
    type: Number,
    required: true,
  },
  containerId: {
    type: String,
    required: true
  }
}, { timestamps: true });

const TrackRecordModel = mongoose.model('TrackRecord', trackRecordSchema);

module.exports = {
  TrackRecordModel
};