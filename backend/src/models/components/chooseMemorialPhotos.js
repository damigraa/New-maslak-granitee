const mongoose = require("mongoose")

const chooseMemorialPhotosSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true,
        min: 1,
        max: 30
    },
    title: {
        type: String,
        required: true,
        min: 1,
        max: 100
    },
    description: {
        type: String,
        required: true,
        min: 1,
        max: 300
    },
    image: {
        type: String,
    },
    date: {
        type: Date,
    },
}, { timestamps: true })

module.exports = mongoose.model("ChooseMemorialPhotos", chooseMemorialPhotosSchema)