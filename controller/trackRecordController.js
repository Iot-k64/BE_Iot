const { TrackRecordModel } = require("../models/trackRecord");

const getAllTrackRecords = async (req, res) => {
  const data = await TrackRecordModel.find();
  return res.json(data);
}
const getTrackRecordById = async (req, res) => {
  const data = await TrackRecordModel.findById(req.body.id);
  return res.json(data);
}
const addNewTrackRecord = async (req, res) => {
  const data = await TrackRecordModel.create(req.body);
  return res.json(data);
}
const deleteTrackRecordById = async (req, res) => {
  const data = await TrackRecordModel.findByIdAndDelete(req.body.id);
  return res.json(data);
}
const updateTrackRecordById = async (req, res) => {
  const data = await TrackRecordModel.findByIdAndUpdate(req.body.id, req.body.data);
  return res.json(data);
}

module.exports = {
  getAllTrackRecords,
  getTrackRecordById,
  addNewTrackRecord,
  deleteTrackRecordById,
  updateTrackRecordById
}