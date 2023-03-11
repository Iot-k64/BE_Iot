const mongoose = require('mongoose');
const { TrackRecordModel } = require('../models/trackRecord');
const clientMQTT = require('./mqtt');


const dbName = 'testxxx';
const DB_URI = `mongodb://localhost:27017/${dbName}`

const connectDB = mongoose.connect(DB_URI, (error) => {
	if (error) {
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
		clientMQTT.on('connect', function () {
			clientMQTT.subscribe('64059a445ec5f5d21fa9a2f7', function (err) {
				console.log("subscribe success")
				// if (!err) {
				// 	clientMQTT.publish('6404a6b8e4d496ec4a125bb5', JSON.stringify({ 
				// 		containerX: {
				// 			humidity: Math.round(Math.random() * 100),
				// 			temperature: Math.round(Math.random() * 100),
				// 			containerId: '63ef5e033dd404e990e8454c'
				// 		},
				// 		containerY: {
				// 			humidity: Math.round(Math.random() * 100),
				// 			temperature: Math.round(Math.random() * 100),
				// 			containerId: '63ef5e033dd404e990e8454c'
				// 		},
				// 		containerZ: {
				// 			humidity: Math.round(Math.random() * 100),
				// 			temperature: Math.round(Math.random() * 100),
				// 			containerId: '63ef5e033dd404e990e8454c'
				// 		},
				// 	}))
				// }
			})
		})
		clientMQTT.on('message', function (topic, message) {
			// message is Buffer
			console.log(topic);

			const data = message.toString().split(',');
			TrackRecordModel.insertMany([
				{ containerId: '64059a445ec5f5d21fa9a2f7', humidity: parseFloat(data[1]) + Math.round(Math.random() * 10), temperature: parseFloat(data[0]) + Math.round(Math.random() * 10) }
			])
			// clientMQTT.end()
		})
	}

});

module.exports = connectDB;