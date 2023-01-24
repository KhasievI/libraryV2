const Genre = require("../models/Genres.model");

module.exports.genreController = {
  addGenre: async (req, res) => {
    try {
      const data = await Genre.create({
        name: req.body.name,
      });
      return res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  deleteGenre: async (req, res) => {
    try {
      const data = await Genre.findByIdAndDelete(req.params.id);
      return res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  editGenre: async (req, res) => {
    try {
      const data = await Genre.findByIdAndUpdate(req.params.id, {name: req.body.name});
      return res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  getGenre: async (req, res) => {
    try {
      const data = await Genre.find();
      return res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
};
