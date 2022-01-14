const kafka = require("./kafka")

const consumer = kafka.consumer({
    groupId: "demoGroupId"
})

const kakfaConsumer = async (topic) => {
    await consumer.connect()
    await consumer.subscribe(topic)

    await consumer.run({
        eachMessage: ({topic,partition,message}) => {
            console.log("Message received: ", {
                topic,
                partition,
                offset: message.offset,
                value: message.value.toString()
            })
        }

    })

}

module.exports = kakfaConsumer;