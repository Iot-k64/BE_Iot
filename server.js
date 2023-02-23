const express = require('express');
const bodyParser = require('body-parser')
const db = require('./utils/database');
const cors = require('cors');
const { getAllUsers, getUserById, addNewUser, deleteUserById, updateUserById } = require('./controller/userController');
const { getAllTrucks, getTruckById, addNewTruck, deleteTruckById, updateTruckById } = require('./controller/truckController');
const { getAllTrackRecords, getTrackRecordById, addNewTrackRecord, deleteTrackRecordById, updateTrackRecordById } = require('./controller/trackRecordController');
const { getAllProducts, getProductById, addNewProduct, deleteProductById, updateProductById } = require('./controller/productController');
const { getAllContainers, getContainerById, addNewContainer, deleteContainerById, updateContainerById } = require('./controller/containerController');
const app = express();
const PORT = 3001;


app.use(bodyParser.json())
app.use(cors({
    origin: '*'
}));

app.listen(PORT, () => console.log(`Server is running on: http://localhost:${PORT}`));

app.get('/', (req, res) => {
    res.send(`Listening on ${PORT}`);
})

app.post('/api/get-all-users', getAllUsers);
app.post('/api/get-user-by-id', getUserById);
app.post('/api/add-new-user', addNewUser);
app.post('/api/delete-user-by-id', deleteUserById);
app.post('/api/update-user-by-id', updateUserById);

app.post('/api/get-all-trucks', getAllTrucks);
app.post('/api/get-truck-by-id', getTruckById);
app.post('/api/add-new-truck', addNewTruck);
app.post('/api/delete-truck-by-id', deleteTruckById);
app.post('/api/update-truck-by-id', updateTruckById);

app.post('/api/get-all-track-records', getAllTrackRecords);
app.post('/api/get-track-record-by-id', getTrackRecordById);
app.post('/api/add-new-track-record', addNewTrackRecord);
app.post('/api/delete-track-record-by-id', deleteTrackRecordById);
app.post('/api/update-track-record-by-id', updateTrackRecordById);

app.post('/api/get-all-products', getAllProducts);
app.post('/api/get-product-by-id', getProductById);
app.post('/api/add-new-product', addNewProduct);
app.post('/api/delete-product-by-id', deleteProductById);
app.post('/api/update-product-by-id', updateProductById);

app.post('/api/get-all-containers', getAllContainers);
app.post('/api/get-container-by-id', getContainerById);
app.post('/api/add-new-container', addNewContainer);
app.post('/api/delete-container-by-id', deleteContainerById);
app.post('/api/update-container-by-id', updateContainerById);