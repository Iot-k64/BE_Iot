const { TruckModel } = require("../models/truck");

const getAllTrucks = async (req, res) => {
  const data = await TruckModel.find();
  return res.json(data);
}
const getTruckById = async (req, res) => {
  const data = await TruckModel.findById(req.body.id);
  return res.json(data);
}
const addNewTruck = async (req, res) => {
  const data = await TruckModel.create(req.body);
  return res.json(data);
}
const deleteTruckById = async (req, res) => {
  const data = await TruckModel.findByIdAndDelete(req.body.id);
  return res.json(data);
}
const updateTruckById = async (req, res) => {
  const data = await TruckModel.findByIdAndUpdate(req.body.id, req.body.data);
  return res.json(data);
}

module.exports = {
  getAllTrucks,
  getTruckById,
  addNewTruck,
  deleteTruckById,
  updateTruckById
}