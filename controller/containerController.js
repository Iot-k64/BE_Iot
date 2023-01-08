const { ContainerModel } = require("../models/container");

const getAllContainers = async (req, res) => {
  const data = await ContainerModel.find();
  return res.json(data);
}
const getContainerById = async (req, res) => {
  const data = await ContainerModel.findById(req.body.id);
  return res.json(data);
}
const addNewContainer = async (req, res) => {
  const data = await ContainerModel.create(req.body);
  return res.json(data);
}
const deleteContainerById = async (req, res) => {
  const data = await ContainerModel.findByIdAndDelete(req.body.id);
  return res.json(data);
}
const updateContainerById = async (req, res) => {
  const data = await ContainerModel.findByIdAndUpdate(req.body.id, req.body.data);
  return res.json(data);
}

module.exports = {
  getAllContainers,
  getContainerById,
  addNewContainer,
  deleteContainerById,
  updateContainerById
}