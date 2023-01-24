const { Router } = require("express");
const { genreController } = require("../controllers/genres.controller");

const router = Router();

router.post('/adminGenre', genreController.addGenre)
router.delete('/adminGenre', genreController.deleteGenre)
router.patch('/adminGenre', genreController.editGenre)
router.get('/adminGenre', genreController.getGenre)




module.exports = router;
