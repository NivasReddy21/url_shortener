const express = require('express')
const { Redirect, AddUrl, RenderHome } = require('../controllers/ShortenerController')

var shortenerRoute = express.Router()

shortenerRoute.get("/:shortId", Redirect)

shortenerRoute.get("/", RenderHome)

shortenerRoute.post("/", AddUrl)

module.exports = shortenerRoute