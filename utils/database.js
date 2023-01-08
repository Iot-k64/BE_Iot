const mongoose = require('mongoose');


const dbName = 'testxxx';
const DB_URI = `mongodb://localhost:27017/${dbName}`

const connectDB = mongoose.connect(DB_URI, (error) => {
	if (error) {
		console.log("Error " + error);
	} else {
		console.log("Connected to Database")
	}
});

module.exports = connectDB;