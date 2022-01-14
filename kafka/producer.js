const kafka = require("./kafka")

const producer = kafka.producer()

const kafkaProducer = async (topic, messages) => {
    await producer.connect()

    try {
        await producer.send({
            topic,
            messages
        })
    } catch (err) {
        console.log(err)
    }
}

module.exports = kafkaProducer