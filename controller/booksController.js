const Book = require("../models/Book");

// Get all books
exports.getAll = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get single book by ID
exports.getOne = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// Create new book (✅ fixed coverUrl not saving)
exports.create = async (req, res) => {
  try {
    const { title, author, description, year, plan, videoUrl, coverUrl } =
      req.body;

    const newBook = await Book.create({
      title,
      author,
      description,
      year,
      plan,
      videoUrl,
      coverUrl, // ✅ now saved properly
    });

    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update existing book
exports.update = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a book
exports.remove = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.json({ message: "Book deleted" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
