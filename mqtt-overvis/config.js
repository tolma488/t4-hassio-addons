const config = require('/data/options.json')

module.exports.config = {

	mqtt: {
		host: config.MQTT_HOST,
		username: config.MQTT_USERNAME,
		password: config.MQTT_PASSWORD,
		id: config.MQTT_ID,
		path: config.MQTT_PATH || 'overvis',
	},

	overvis: {
		host: config.OVERVIS_HOST,
		password: config.OVERVIS_PASSWORD,
		interval: config.OVERVIS_INTERVAL,
	},

};
