// backend/models/Book.js
const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    plan: { type: String, required: true, trim: true },
    description: { type: String, default: "" },
    year: { type: Number },
    coverUrl: {
      type: String,
      trim: true,
      default: "", // optional, can be empty if not provided
    },
    videoUrl: {
      type: String,
      trim: true,
      default: "", // ✅ optional video field
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", BookSchema);
