const { Router } = require("express");
const { clientController } = require("../controllers/clients.controller");

const router = Router();

router.post('/client', clientController.addClient)
router.get('/client', clientController.getClient)
router.patch('/client/rent/:clientId/:bookId', clientController.toRentBook)
router.patch('/client/return/:clientId/:bookId', clientController.returnBook)
router.patch('/admin/bann/:clientId', clientController.userBanned)

module.exports = router;
