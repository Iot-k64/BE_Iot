const mongoose = require('mongoose');
const { TrackRecordModel } = require('../models/trackRecord');
const clientMQTT = require('./mqtt');
const { ContainerModel } = require('../models/container');
const { sendNotif } = require('./send_msg');


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
			clientMQTT.subscribe(['63ef5e033dd404e990e8454c', '63ef5e133dd404e990e84551'], function (err) {
				console.log("subscribe success")
				if (!err) {
					// setInterval(() => {
					// 	clientMQTT.publish('63ef5e033dd404e990e8454c', '25,45')
					// 	clientMQTT.publish('63ef5e133dd404e990e84551', '30, 70')
					// 	// clientMQTT.publish('63ef5e033dd404e990e8454c', '25,45')
					// 	// clientMQTT.publish('63ef5e033dd404e990e8454c', '25,45')
					// }, 2000)

				}
			})
		})
		clientMQTT.on('message', function (topic, message) {
			// message is Buffer
			const data = message.toString().split(',');
			const record = {containerId: topic, humidity: parseFloat(data[1]) + Math.round(Math.random() * 10), temperature: parseFloat(data[0]) + Math.round(Math.random() * 10)}
		
			saveTrackRecord(record)
		})

	}

});

const saveTrackRecord = async (data) => {
	const containerInfo = await ContainerModel.findById(data.containerId).populate('product');
	if((data.humidity - containerInfo.product.standardHumi > containerInfo.product.maxDeviationHumi) || (data.temperature - containerInfo.product.standardTemp > containerInfo.product.maxDeviationTemp)) {
		await ContainerModel.findByIdAndUpdate(data.containerId, { status: 3 })
		sendNotif(`WARNING: Điều chỉnh lại các thông số của contaner ${containerInfo.containerNo}!!!`);
	} else {
		await ContainerModel.findByIdAndUpdate(data.containerId, { status: 2 })
	}
		await TrackRecordModel.insertMany([
				data
			])
}

// ACC Sid= AC2e24694f2aed35b260a6de54d85fe7d2
// auth token = 40339373e2704cc3dac69d7e734e2cd6
// phone = +15676011629

module.exports = connectDB;