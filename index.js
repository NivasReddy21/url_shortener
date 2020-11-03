const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
var multer = require('multer');
var bodyParser = require('body-parser');

require('dotenv').config()
const PORT = 8080

const app = express()
const upload = multer();

app.set('view engine', 'pug')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(upload.array())


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