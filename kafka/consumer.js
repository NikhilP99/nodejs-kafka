const kafka = require("./kafka")

const consumer = kafka.consumer({
    groupId: "demoGroupId"
})

const kakfaConsumer = async (topic) => {
    await consumer.connect()
    await consumer.subscribe(topic)

    await consumer.run({

        eachMessage: (message) => {
            console.log("Received a message")
            console.log(message.value.toString())
        }

    })

}

module.exports = kakfaConsumer;