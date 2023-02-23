const mongoose = require('mongoose');
const { TrackRecordModel } = require('../models/trackRecord');


const dbName = 'testxxx';
const xxx = process.env.DB_URL || "";
const DB_URI = `${xxx}/${dbName}`

const connectDB = mongoose.connect(DB_URI, (error) => {
	if (error) {
		console.log(DB_URI)
		console.log("Error " + error);
	} else {
		console.log("Connected to Database")
	// 	TrackRecordModel.insertMany([
	// 		{containerId: "63ef5e033dd404e990e8454c", humidity: 23, temperature: 25},
	// 		{containerId: "63ef5e033dd404e990e8454c", humidity: 26, temperature: 29},
	// 		{containerId: "63ef5e033dd404e990e8454c", humidity: 29, temperature: 25},
	// 		{containerId: "63ef5e033dd404e990e8454c", humidity: 30, temperature: 26},
	// 		{containerId: "63ef5e033dd404e990e8454c", humidity: 40, temperature: 25},
	// 		{containerId: "63ef5e033dd404e990e8454c", humidity: 24, temperature: 33},
	// 		{containerId: "63ef5e033dd404e990e8454c", humidity: 28, temperature: 37},
	// 		{containerId: "63ef5e033dd404e990e8454c", humidity: 23, temperature: 38},
	// 		{containerId: "63ef5e033dd404e990e8454c", humidity: 35, temperature: 21},
	// 		{containerId: "63ef5e033dd404e990e8454c", humidity: 33, temperature: 27},
	// 		{containerId: "63ef5e033dd404e990e8454c", humidity: 39, temperature: 35},
	// 		{containerId: "63ef5e033dd404e990e8454c", humidity: 49, temperature: 44},
	// 		{containerId: "63ef5e033dd404e990e8454c", humidity: 37, temperature: 40},
	// 		{containerId: "63ef5e033dd404e990e8454c", humidity: 26, temperature: 30},
	// 		{containerId: "63ef5e033dd404e990e8454c", humidity: 23, temperature: 25},
	// ])
	}
});

module.exports = connectDB;