const express = require("express");
const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
  name: String,
  isBlocked: {
    type: Boolean,
    default: false
  },
  books: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Book'
  }]
});

const Client = mongoose.model("Client", clientSchema);
module.exports = Client;
