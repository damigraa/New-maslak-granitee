const mongoose = require("mongoose")
const Header = require("../models/header")


exports.addHeader = (req, res) => {
    try {
        const { nameSite, numberOne, descriptionOne, numberTwo, descriptionTwo, mailName, mailDescription } = req.body
        const header = new Header({
            nameSite: nameSite,
            numberOne: numberOne,
            descriptionOne: descriptionOne,
            numberTwo: numberTwo,
            descriptionTwo: descriptionTwo,
            mailName: mailName,
            mailDescription: mailDescription
        })
        header.save((error, header) => {
            if (error) return res.status(400).json({ error, message: "Ошибка при создании шапки" })
            if (header) return (
                res.status(201).json({ header, message: "Шапка создана успешно" })
            )
        })
    } catch (e) {
        res.status(500).json(e.message)
    }

}

exports.getHeader = (req, res) => {
    try {
        Header.find({}).exec((error, header) => {
            if (error) return res.status(400).json({ message: "Не удалось получить данные" })
            if (header) return (
                res.status(200).json({ header, message: "Данные успешно получены" })
            )
        })
    } catch (e) {
        res.status(500).json(e.message)
    }

}
exports.updateHeader = async (req, res) => {
    const { id } = req.params;
    const header = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No header with id: ${id}`);

    const updateHeader = await Header.findByIdAndUpdate(id, header, { new: true });

    res.json(updateHeader);
}
exports.deleteHeader = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No comeToUs with id: ${id}`);
    await Header.findByIdAndDelete(id);

    res.json({ message: "шапка удален успешно" });
}
