const express = require('express')
const { Redirect, AddUrl } = require('../controllers/ShortenerController')

var shortenerRoute = express.Router()

shortenerRoute.get("/:shortId", Redirect)

shortenerRoute.post("/", AddUrl)

module.exports = shortenerRoute