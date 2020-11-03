const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema({
    url: { type: String, required: true },
    shortId: { type: String, required: true, },
    shortUrl: { type: String, required: true, },
});

module.exports = mongoose.model("url", UrlSchema);