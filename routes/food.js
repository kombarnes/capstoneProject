const router = require('express').Router();
let Food = require('../models/food.model');

router.route('/').get((req, res) => {
    Food.find()
    .then(foods => res.json(foods))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const image = req.body.image;
    const title = req.body.title;
    const text = req.body.text;
    const link = req.body.link;

    const newFood = new Food ({
        image,
        title,
        text,
        link
    });

    newFood.save()
    .then(() => res.json('Food attraction added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Food.findById(req.params.id)
    .then(food => res.json(food))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Food.findByIdAndDelete(req.params.id)
    .then(() => res.json('Food attraction deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;