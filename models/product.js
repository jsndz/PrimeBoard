import mongoose, { Schema } from "mongoose";

const productSchema = new mongoose.Schema(
  {
    team: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    productName: {
      type: String,
    },
    revenue: {
      type: Number,
    },
    sales: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
