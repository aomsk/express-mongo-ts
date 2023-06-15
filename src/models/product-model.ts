import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  product_name: {
    required: true,
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    required: true,
    type: Number,
  },
});

export const ProductModel = mongoose.model("Product", productSchema);
