const { ProductModel } = require("../models/product");

const getAllProducts = async (req, res) => {
  const data = await ProductModel.find();
  return res.json(data);
}
const getProductById = async (req, res) => {
  const data = await ProductModel.findById(req.body.id);
  return res.json(data);
}
const addNewProduct = async (req, res) => {
  const data = await ProductModel.create(req.body);
  return res.json(data);
}
const deleteProductById = async (req, res) => {
  const data = await ProductModel.findByIdAndDelete(req.body.id);
  return res.json(data);
}
const updateProductById = async (req, res) => {
  const data = await ProductModel.findByIdAndUpdate(req.body._id, req.body);
  return res.json(data);
}

module.exports = {
  getAllProducts,
  getProductById,
  addNewProduct,
  deleteProductById,
  updateProductById
}