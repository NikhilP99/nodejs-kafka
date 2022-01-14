const { Kafka } = require("kafkajs")

const config = {
    clientId: "demoNode",
    brokers: ["localhost:9092"]
}


const kafka = new Kafka({
    brokers: config.brokers,
    clientId: config.clientId
})

module.exports = kafka