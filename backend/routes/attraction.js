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
<<<<<<< HEAD
   
=======
    const address = req.body.address;
    const city = req.body.city;
    const state = req.body.state;
    const zipcode = req.body.zipcode;
>>>>>>> 2a82b031c969784aeb8eaba8f04133afb9bec13b

    const newAttraction = new Attraction ({
        name,
        imageUrl,
        description,
<<<<<<< HEAD
        
=======
        address,
        city,
        state,
        zipcode
>>>>>>> 2a82b031c969784aeb8eaba8f04133afb9bec13b
    });

    newAttraction.save()
    .then(() => res.json('Attraction added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

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

router.route('/update/:id').post((req, res) => {
    Attraction.findById(req.params.id)
    .then(attraction => {
        attraction.name = req.body.name;
        attraction.imageUrl = req.body.imageUrl;
        attraction.description = req.body.description;
        attraction.address = req.body.address;
        attraction.city = req.body.city;
        attraction.state = req.body.state;
        attraction.zipcode = req.body.zipcode;

<<<<<<< HEAD
        Attraction.save()
        .then(() => res.json('Attraction added!'))
=======
        attraction.save()
        .then(() => res.json('Attraction updated!'))
>>>>>>> 2a82b031c969784aeb8eaba8f04133afb9bec13b
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;