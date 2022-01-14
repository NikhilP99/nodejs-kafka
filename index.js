const express = require("express")
const kafkaProducer = require("./kafka/producer")
const kakfaConsumer = require("./kafka/consumer")

const app = express()

const topic = "TEST"
const messages = [
    {
        key: "key",
        value: "test message"
    }
]

app.get("/", (req, res) => {
    kafkaProducer(topic,messages)
    res.send("Message sent")
})

kakfaConsumer(topic)

const PORT = 5000
app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`)
})