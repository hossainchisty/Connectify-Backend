const mongoose = require('mongoose');

// Product Schema Definition

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true }
  },
  { timestamps: true},
);

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
