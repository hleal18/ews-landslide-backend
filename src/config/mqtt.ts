import mqtt from "mqtt";

const topics = ["ews-landslide-test"];
const mqttClient = mqtt.connect('mqtt://semard.com.co', { port: 1883});

console.log('Connecting...............');

mqttClient.on('connect', () => {
    console.log('Successfully connected: ');
});

mqttClient.subscribe(topics, { qos: 2 }, (err, granted) => {
    if (err) console.log(`Not subscribed to: `, err);

    console.log('Subscribed to: ', granted);
});

// mqttClient.on('message', (topic, payload) => {
//     console.log('Message received for topic: ', topic);
// });


export default mqttClient;
