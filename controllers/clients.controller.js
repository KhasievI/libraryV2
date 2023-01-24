const Client = require("../models/Clients.model");
const Book = require("../models/Books.model");
const e = require("express");

module.exports.clientController = {
  addClient: async (req, res) => {
    try {
      const data = await Client.create({
        name: req.body.name,
      });
      return res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  getClient: async (req, res) => {
    try {
      const data = await Client.find();
      return res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  selectBook: async (req, res) => {
    try {
      const data = await Client.findByIdAndUpdate(req.params.id, {
        books: [],
        isBlocked: true,
      });
      return res.json(data);
    } catch (error) {
      return res.json(error);
    }
  },
  toRentBook: async (req, res) => {
    try {
      const book = await Book.findById(req.params.bookId);
      const client = await Client.findById(req.params.clientId);
      console.log(book);
      if (
        client.books.length < 3 &&
        client.isBlocked === false &&
        book.rent === null
      ) {
        console.log(client);
        await Client.findByIdAndUpdate(req.params.clientId, {
          $push: { books: req.params.bookId },
        });
        await Book.findByIdAndUpdate(req.params.bookId, {
          rent: req.params.clientId,
        });
        return res.json(client);
      } else {
        return res.json(
          "Ошибка! Нельзя арендовать больше трех книг одновременно, либо вы заблокированны!"
        );
      }
    } catch (error) {
      res.json(error.message);
    }
  },
  returnBook: async (req, res) => {
    try {
      // const book = await Book.findById(req.params.bookId);
      const client = await Client.findById(req.params.clientId);

      await Book.findByIdAndUpdate(req.params.bookId, { rent: null });
      await Client.findByIdAndUpdate(req.params.clientId, {
        $pull: { books: req.params.bookId },
      });
      return res.json(client);
    } catch (error) {
      return res.json(error.message);
    }
  },
  userBanned: async (req, res) => {
    try {
      await Book.updateMany({ rent: req.params.clientId }, { rent: null });
      const data = await Client.findByIdAndUpdate(req.params.clientId, {
        isBlocked: true,
        books: [],
      });
      return res.json(data);
    } catch (error) {
      return res.json(error.message);
    }
  },
};
