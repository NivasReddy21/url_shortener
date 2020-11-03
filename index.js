const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()
const PORT = 8080

const app = express()

app.use(cors())
app.use(express.json())

const route = require("./routes/ShortenerRoute")

app.use("/", route)

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected To Database"))
    .catch(e => console.log(e.message))

app.listen(PORT, () => { console.log(`Server Up and Running on ${PORT}`) })