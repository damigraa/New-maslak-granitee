
const mongoose = require("mongoose");
const Ceramics = require("../../models/components/ceramics");

exports.createCeramics = (req, res) => {

  const { name, size, price, description, weight } = req.body;
  let img = [];

  if (req.files) {
    img = req.files.map((file) => {
      return { img: file.filename };
    });
  }

  const ceramics = new Ceramics({
    name,
    size,
    price,
    description,
    img,
    weight,
  });

  ceramics.save((error, ceramics) => {
    if (error) return res.status(400).json({ error });
    if (ceramics) {
      res.status(201).json({ ceramics });
    }
  });
};

exports.getCeramics = (req, res) => {
  try {
    Ceramics.find({}).exec((error, ceramics) => {
      if (error) return res.status(400).json({ message: "Ошибка при получении данных!" })
      if (ceramics) return (
        res.status(200).json({ ceramics, message: "Данные успешно получены!" })
      )
    })
  } catch (e) {
    res.status(500).json(e)
  }
}



exports.updateCeramics = async (req, res) => {
  const { id } = req.params;
  const ceramics = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No ceramics with id: ${id}`);

  const updatedContact = await Ceramics.findByIdAndUpdate(id, ceramics, { new: true });

  res.json(updatedContact);
}

exports.deleteCeramics = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No ceramics with id: ${id}`);
  await Ceramics.findByIdAndDelete(id);

  res.json({ message: "Удален успешно" });
}

