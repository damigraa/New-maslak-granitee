
const mongoose = require("mongoose");
const GraniteTiles = require("../../models/components/graniteTiles")
exports.createGraniteTiles = (req, res) => {

  const { name, size, price, description, weight } = req.body;
  let img = [];

  if (req.files) {
    img = req.files.map((file) => {
      return { img: file.filename };
    });
  }

  const graniteTiles = new GraniteTiles({
    name,
    size,
    price,
    description,
    img,
    weight,
  });
 
  graniteTiles.save((error, graniteTiles) => {
    if (error) return res.status(400).json({ error });
    if (graniteTiles) {
      res.status(201).json({ graniteTiles });
    }
  });
};

exports.getGraniteTiles = (req, res) => {
  try {
    GraniteTiles.find({}).exec((error, graniteTiles) => {
      if (error) return res.status(400).json({ message: "Ошибка при получении данных!" })
      if (graniteTiles) return (
        res.status(200).json({ graniteTiles, message: "Данные успешно получены!" })
      )
    })
  } catch (e) {
    res.status(500).json(e)
  }
}



exports.updateGraniteTiles = async (req, res) => {
  const { id } = req.params;
  const graniteTiles = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No graniteTiles with id: ${id}`);

  const updatedGraniteTiles = await GraniteTiles.findByIdAndUpdate(id, graniteTiles, { new: true });

  res.json(updatedGraniteTiles);
}

exports.deleteGraniteTiles = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No graniteTiles with id: ${id}`);

  await GraniteTiles.findByIdAndDelete(id);

  res.json({ message: "Удален успешно" });
}

