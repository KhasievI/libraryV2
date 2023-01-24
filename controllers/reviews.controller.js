const Review = require("../models/Reviews.model");

module.exports.reviewController = {
    AddReview: async (req, res) => {
        try {
            const data = await Review.create({
                text: req.body.text,
                book: req.body.book,
            })
            return res.json(data)
        } catch (error) {
            return res.json(error)
        }
    },
    
}