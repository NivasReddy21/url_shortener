const validator = require('validator');

const Url = require('../models/Url')

const Redirect = async(req, res) => {
    const { shortId } = req.params

    if (!shortId) return res.status(400).json({ msg: "No Id Found" })

    try {
        const URL = await Url.findOne({ shortId })
        if (!URL) return res.status(400).json({ msg: "Invalid Id" })
        return res.redirect(URL.url)
    } catch (e) {
        return res.status(400).json({ msg: e.message })
    }

}

const AddUrl = async(req, res) => {
    const { url } = req.body

    if (!url) return res.status(400).json({ msg: "No Url Provided" })

    if (!validator.isUrl(url, { require_protocol: true, })) return res.status(400).json({ msg: "Invalid Url" })

    try {
        let URL = await Url.findOne({ url })
        if (!URL) {
            let newUrl = new Url({ url })
            await newUrl.save();
            return res.status(201).json({ shortId: newUrl.shortId, url })
        }
    } catch (e) {
        console.log(e)
        return res.status(400).json({ msg: "Internal Server Error" })
    }

}

module.exports = {
    Redirect,
    AddUrl,
};