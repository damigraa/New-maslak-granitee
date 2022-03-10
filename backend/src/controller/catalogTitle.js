const CatalogTitle = require("../models/catalogTitle");
const mongoose = require("mongoose")


exports.createCatalogTitle = (req, res) => {
  try {
    const CatalogTitleObj = {
      title: req.body.title,
      description: req.body.description,
    }


    const catalogTitle = new CatalogTitle(CatalogTitleObj)
    catalogTitle.save((error, catalogTitle) => {
      if (error) {
        return res.status(400).json({
          error, message: "Ошибка при создании",
        });
      }
      if (catalogTitle) {
        res.status(201).json({ catalogTitle, message: "Успешно создано!" });
      }
    })
  } catch (e) {
    res.status(500).json(e.message)
  }
}
exports.getCatalogTitle = (req, res) => {
  CatalogTitle.find({}).exec((error, catalogTitle) => {
    if (error) return res.status(400).json({ message: "Не удалось получить данные" })
    if (catalogTitle) {
      return res.status(200).json({ catalogTitle, message: "Данные успешно получены" })
    }
  })
}

exports.updateCatalogTitle = async (req, res) => {
  const { id } = req.params;
  const catalogTitle = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No catalogTitle with id: ${id}`);

  const updatedCataloTitle = await CatalogTitle.findByIdAndUpdate(id, catalogTitle, { new: true });

  res.json(updatedCataloTitle);
}


exports.deleteCatalogTitleById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No catalogTitle with id: ${id}`);
  await CatalogTitle.findByIdAndDelete(id);

  res.json({ message: "Блок удален успешно" });
}
