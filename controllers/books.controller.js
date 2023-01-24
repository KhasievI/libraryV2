const Book = require("../models/Books.model");

module.exports.bookController = {
  addBook: async (req, res) => {
    try {
      const data = await Book.create({
        name: req.body.name,
        genre: req.body.genre,
      });
      return res.json(data);
    } catch (error) {
      return res.json(error);
    }
  },
  getBook: async (req, res) => {
    try {
      const data = await Book.find().populate("rent genre");
      return res.json(data);
    } catch (error) {
      return res.json(error);
    }
  },
  deleteBook: async (req, res) => {
    try {
      const data = await Book.findByIdAndDelete(req.params.id);
      return res.json(data);
    } catch (error) {
      return res.json(error);
    }
  },
  editBook: async (req, res) => {
    try {
      const data = await Book.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        genre: req.body.genre,
      });
      return res.json(data);
    } catch (error) {
      return res.json(error);
    }
  },
  getBookByGenre: async (req, res) => {
    try {
      const data = await Book.find({ genre: req.params.id });
      return res.json(data);
    } catch (error) {
      return res.json(error);
    }
  },
  getById: async (req, res) => {
    try {
      const data = await Book.findById(req.params.id);
      return res.json(data);
    } catch (error) {
      return res.json(error);
    }
  },
};
