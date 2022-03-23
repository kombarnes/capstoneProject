const router = require('express').Router();
let Sport = require('../models/sport.model');

router.route('/').get((req, res) => {
    Sport.find()
    .then(nights => res.json(sports))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/add').post((req, res) => {
    const image = req.body.image;
    const title = req.body.title;
    const link = req.body.link;
    const text = req.body.text;
    const newSport = new Sport ({
      image,
      title,
      link,
      text
    });
    newSport.save()
    .then(() => res.json('Sport added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').get((req, res) => {
    Sport.findById(req.params.id)
    .then(sport => res.json(sport))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
    Sport.findByIdAndDelete(req.params.id)
    .then(() => res.json('Sport deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
    Sport.findById(req.params.id)
    .then(sport => {
        sport.image = req.body.image;
        sport.title = req.body.title;
        sport.link = req.body.link;
        sport.text = req.body.text;
        sport.save()
        .then(() => res.json('Sport updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;