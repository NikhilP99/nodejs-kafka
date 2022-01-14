const kafka = require("./kafka")

const producer = kafka.producer()

const kafkaProducer = async (topic, messages) => {
    await producer.connect()

    try {
        console.log("Trying to send messages: ", messages)
        await producer.send({
            topic,
            messages
        })
        console.log("Messages sent successfully")
    } catch (err) {
        console.log("Messages could not be sent. ", err)
    }
}

module.exports = kafkaProducer