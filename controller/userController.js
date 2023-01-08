const { UserModel } = require("../models/user")

const getAllUsers = async (req, res) => {
  const data = await UserModel.find();
  return res.json(data);
}
const getUserById = async (req, res) => {
  const user = await UserModel.findById(req.body.id);
  return res.json(user);
}
const addNewUser = async (req, res) => {
  const user = await UserModel.create(req.body);
  return res.json(user);
}
const deleteUserById = async (req, res) => {
  const user = await UserModel.findByIdAndDelete(req.body.id);
  return res.json(user);
}
const updateUserById = async (req, res) => {
  const user = await UserModel.findByIdAndUpdate(req.body.id, req.body.data);
  return res.json(user);
}

module.exports = {
  getAllUsers,
  getUserById,
  addNewUser,
  deleteUserById,
  updateUserById,
}