const mongoose = require("mongoose")
const PaymentMethod = require("../models/paymentMethods")

exports.createPaymentMethod = (req, res) => {
    try {
        const paymentMethodObj = {
            title: req.body.title,
            description: req.body.description
        }

        if (req.file) {
            paymentMethodObj.paymentMethodImg =
                process.env.API + "/public/" + req.file.filename;
        }

        const paymentMethod = new PaymentMethod(paymentMethodObj)
        paymentMethod.save((error, paymentMethod) => {
            if (error) return res.status(400).json({ error });
            if (paymentMethod) {
                res.status(201).json({ paymentMethod });
            }
        })
    } catch (e) {
        res.status(400).json(e)
    }
}


exports.getPaymentMethod = (req, res) => {
    try {
        PaymentMethod.find({}).exec((error, paymentMethod) => {
            if (error) return res.status(400).json({ message: "Проблема при получении данных!" })
            if (paymentMethod) return (
                res.status(200).json({ paymentMethod, message: "Данные успешно плучены" })
            )
        })
    } catch (error) {
        res.status(400).json(error)
    }
}

exports.updatePaymentMethod = async (req, res) => {
    const { id } = req.params;
    const paymentMethod = req.body
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`Нет такого id: ${id}`)
   
    const updatedManufacture = await PaymentMethod.findByIdAndUpdate(id, paymentMethod, { new: true });

    res.json(updatedManufacture);
}




exports.deletePaymentMethod = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`Нет такого id: ${id}`)
    await PaymentMethod.findByIdAndDelete(id)

    res.json({ message: "блок успешно удален" })
}