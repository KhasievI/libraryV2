const { Router } = require("express");
const { bookController } = require("../controllers/books.controller");

const router = Router();

router.post("/admin/Book", bookController.addBook);
router.get("/admin/Book", bookController.getBook);
router.delete("/admin/Book/:id", bookController.deleteBook);
router.patch("/admin/Book/:id", bookController.editBook);
router.get("/client/Book", bookController.getBook);
router.get("/client/Book/genre/:id", bookController.getBookByGenre);
router.get("/client/Book/:id", bookController.getById);

module.exports = router;
