const router = require('express').Router();
let Attraction = require('../models/attraction.model');

router.route('/').get((req, res) => {
    Attraction.find()
        .then(attractions => res.json(attractions))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    // const location = req.body.location;

    const newAttraction = new Attraction({
        name,
        imageUrl,
        description,
        // location,
    });

    newAttraction.save()
    .then(() => res.json('Attraction added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//router
router.route('/:id').get((req, res) => {
    Attraction.findById(req.params.id)
        .then(attraction => res.json(attraction))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Attraction.findByIdAndDelete(req.params.id)
    .then(() => res.json('Attraction deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/uplocation/:id').post((req, res) => {
    Attraction.findById(req.params.id)
    .then(Attraction => {
        attraction.name = req.body.name;
        attraction.imageUrl = req.body.imageUrl;
        attraction.description = req.body.description;
        // attraction.location = req.body.location;

        Attraction.save()
        .then(() => res.json('Attraction uplocationd!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error ' + err));
});

module.exports = router;