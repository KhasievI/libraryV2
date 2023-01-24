const { Router } = require("express");
const { reviewController } = require("../controllers/reviews.controller");

const router = Router();

router.post('/user/review', reviewController.AddReview)

module.exports = router;
