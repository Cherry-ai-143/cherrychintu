const mongoose = require("mongoose");

const dairyProductSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  originalPrice: { type: Number },
  weight: { type: String },
  platform: { type: String },
  deliveryTime: { type: String },
  inStock: { type: Boolean, default: true },
  isBestDeal: { type: Boolean, default: false },
  category: { type: String, required: true },
});

const DairyProduct = mongoose.model(
  "DairyProduct",
  dairyProductSchema,
  "dairyproducts"
);

module.exports = DairyProduct;
