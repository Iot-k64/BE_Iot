const mqtt = require('mqtt')
const clientMQTT  = mqtt.connect('mqtt://test.mosquitto.org')
module.exports = clientMQTT