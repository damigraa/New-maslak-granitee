const Product = require("../models/product");
const shortid = require("shortid");
const slugify = require("slugify");
const Category = require("../models/category");
const mongoose = require("mongoose")

exports.createProduct = (req, res) => {
  //res.status(200).json( { file: req.files, body: req.body } );
  try {
    const { name, price, description, category, quantity, createdBy, weight, size } = req.body;
    let productPictures = [];

    if (req.files.length > 0) {
      productPictures = req.files.map((file) => {
        return { img: file.filename };
      });
    }

    const product = new Product({
      name: name,
      slug: slugify(name),
      price,
      quantity,
      description,
      productPictures,
      category,
      weight,
      size,
      createdBy: req.user._id,
    });

    product.save((error, product) => {
      if (error) return res.status(400).json({ error });
      if (product) {
        res.status(201).json({ product });
      }
    });
  } catch (e) {
    console.log(e)

  }

};

exports.getProductsBySlug = (req, res) => {
  const { slug } = req.params;
  Category.findOne({ slug: slug })
    .select("_id type")
    .exec((error, category) => {
      if (error) {
        return res.status(400).json({ error });
      }

      if (category) {
        Product.find({ category: category._id }).exec((error, products) => {
          if (error) {
            return res.status(400).json({ error });
          }

          if (category.type) {
            if (products.length > 0) {
              res.status(200).json({
                products,
                priceRange: {
                  under5k: 5000,
                  under10k: 10000,
                  under15k: 15000,
                  under20k: 20000,
                  under30k: 30000,
                },
                productsByPrice: {
                  under5k: products.filter((product) => product.price <= 5000),
                  under10k: products.filter(
                    (product) => product.price > 5000 && product.price <= 10000
                  ),
                  under15k: products.filter(
                    (product) => product.price > 10000 && product.price <= 15000
                  ),
                  under20k: products.filter(
                    (product) => product.price > 15000 && product.price <= 20000
                  ),
                  under30k: products.filter(
                    (product) => product.price > 20000 && product.price <= 30000
                  ),
                },
              });
            }
          } else {
            res.status(200).json({ products });
          }
        });
      }
    });
};
// exports.getProductsBySlug = (req, res) => {
//   try {
//     const { slug } = req.params;
//     const { sort } = req.query
//     Category.findOne({ slug: slug })
//       .select("_id type")
//       .exec((error, category) => {
//         if (error) {
//           return res.status(400).json({ error });
//         }
//         switch (category && sort) {
//           case 'name':
//             Product.find({}).sort({ name: 1 })
//             break
//           case 'nameMinus':
//             Product.find({}).sort({ name: - 1 })
//             break
//           case 'price':
//             Product.find({}).sort({ price: - 1 })
//             break
//           case 'priceMinus':
//             Product.find({}).sort({ price: 1 })
//             break
//           case 'updatedAt':
//             Product.find({}).sort({ name: -1 })
//             break
//           case 'updatedAtMinus':
//             Product.find({}).sort({ name: 1 })
//             break
//           default:
//             Product.find({ category: category.id }).exec((error, products) => {
//               if (error) {
//                 return res.status(400).json({ message: "Error products" })
//               }
//               if (category.type) {

//                 if (products.length > 0) {
//                   res.status(200).json({
//                     products,
//                     priceRange: {
//                       under5k: 5000,
//                       under10k: 10000,
//                       under15k: 15000,
//                       under20k: 20000,
//                       under30k: 30000,
//                     },
//                     productsByPrice: {
//                       under5k: products.filter((product) => product.price <= 5000),
//                       under10k: products.filter(
//                         product => product.price > 5000 && product.price <= 10000
//                       ),
//                       under15k: products.filter(
//                         (product) => product.price > 10000 && product.price <= 15000
//                       ),
//                       under20k: products.filter(
//                         (product) => product.price > 15000 && product.price <= 20000
//                       ),
//                       under30k: products.filter(
//                         (product) => product.price > 20000 && product.price <= 30000
//                       ),
//                     },
//                   });


//                 }
//               } else {
//                 res.status(200).json({ products });
//               }
//             });
//         }
//       });
//   } catch (e) {
//     console.log(e)
//     return res.status(500).json({ message: "Can not get products" })
//   }
// };
exports.getProductDetailsById = (req, res) => {
  const { productId } = req.params;
  if (productId) {
    Product.findOne({ _id: productId }).exec((error, product) => {
      if (error) return res.status(400).json({ error });
      if (product) {
        res.status(200).json({ product });
      }
    });
  } else {
    return res.status(400).json({ error: "Params required" });
  }
};


exports.deleteProductById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No product with id: ${id}`);
  await Product.findByIdAndDelete(id);

  res.json({ message: "Блок удален успешно" });
};



exports.getProducts = async (req, res) => {
  try {
    const { sort } = req.query
    const pSort = Product.find({})
    let products
    switch (sort) {
      case 'name':
        products = await pSort.sort({ name: 1 })
        break
      case 'nameMinus':
        products = await pSort.sort({ name: -1 })
        break
      case 'price':
        products = await pSort.sort({ price: -1 })
        break
      case 'priceMinus':
        products = await pSort.sort({ price: 1 })
        break
      case 'updatedAt':
        products = await pSort.sort({ updatedAt: 1 })
        break
      case 'updatedAtMinus':
        products = await pSort.sort({ updatedAt: -1 })
        break
      default:
        products = await Product.find({ updatedAt: 1 })
        break;
    }
    return res.status(200).json({ products });
  } catch (e) {
    console.log(e)
    return res.status(500).json({ message: "Can not get products" })
  }
}


exports.searchFile = async (req, res) => {
  try {
    const searchName = req.query.search
    let products = await Product.find({})
    products = products.filter(product => product.name.includes(searchName))
    return res.status(200).json({ products });
  } catch (e) {
    console.log(e)
    return res.status(400).json({ message: 'Search error' })
  }
}

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No product with id: ${id}`);

    const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });

    res.json(updatedProduct);
  } catch (e) {
    res.status(500).json(e)
  }
}
