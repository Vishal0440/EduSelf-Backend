import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  title: String,
  author: String,
  description: String,
  year: Number,
  plan: String,
  coverUrl: String,
  videoUrl: String,
});
const Book = mongoose.model("Book", bookSchema);

export default Book;
