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

app.post('/get-all-users', getAllUsers);
app.post('/get-user-by-id', getUserById);
app.post('/add-new-user', addNewUser);
app.post('/delete-user-by-id', deleteUserById);
app.post('/update-user-by-id', updateUserById);

app.post('/get-all-trucks', getAllTrucks);
app.post('/get-truck-by-id', getTruckById);
app.post('/add-new-truck', addNewTruck);
app.post('/delete-truck-by-id', deleteTruckById);
app.post('/update-truck-by-id', updateTruckById);

app.post('/get-all-track-records', getAllTrackRecords);
app.post('/get-track-record-by-id', getTrackRecordById);
app.post('/add-new-track-record', addNewTrackRecord);
app.post('/delete-track-record-by-id', deleteTrackRecordById);
app.post('/update-track-record-by-id', updateTrackRecordById);

app.post('/get-all-products', getAllProducts);
app.post('/get-product-by-id', getProductById);
app.post('/add-new-product', addNewProduct);
app.post('/delete-product-by-id', deleteProductById);
app.post('/update-product-by-id', updateProductById);

app.post('/get-all-containers', getAllContainers);
app.post('/get-container-by-id', getContainerById);
app.post('/add-new-container', addNewContainer);
app.post('/delete-container-by-id', deleteContainerById);
app.post('/update-container-by-id', updateContainerById);