const mongoose = require('mongoose');
const paymentMethodSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        max: 30
    },
    description: {
        type: String,
        required: true,
        max: 100

    },
    paymentMethodImg: {
        type: String,
        // require: true
    }
}, { timestamps: true });


module.exports = mongoose.model('PaymentMethod', paymentMethodSchema);