const mongoose = require('mongoose');

const urlSchema = mongoose.Schema({
    urlCode: String,
    longUrl: String,
    shortUrl: String,
    clicks: Number,
})