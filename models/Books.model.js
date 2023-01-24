const express = require("express");
const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  name: String,
  rent: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Client",
    default: null,
  },
  genre: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Genre",
  },
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
