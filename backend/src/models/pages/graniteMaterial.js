const mongoose = require("mongoose")

const graniteMaterialSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    advantage: {
        type: String,
        // required: true,
    },
    list: [String],
    buttonHref: String,
    colorText: String,
    graniteImg: {
        type: String,
    }

}, { timestamps: true })

module.exports = mongoose.model("GraniteMaterial", graniteMaterialSchema)