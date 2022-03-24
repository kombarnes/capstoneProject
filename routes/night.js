const router = require('express').Router();
let Night = require('../models/night.model');

router.route('/').get((req, res) => {
    Night.find()
    .then(nights => res.json(nights))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/add').post((req, res) => {
    const image = req.body.image;
    const title = req.body.title;
    const link = req.body.link;
    const text = req.body.text;
    const newNight = new Night ({
      image,
      title,
      link,
      text
    });
    newNight.save()
    .then(() => res.json('Night life added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').get((req, res) => {
    Night.findById(req.params.id)
    .then(night => res.json(night))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
    Night.findByIdAndDelete(req.params.id)
    .then(() => res.json('Night life deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
    Night.findById(req.params.id)
    .then(night => {
        night.image = req.body.image;
        night.title = req.body.title;
        night.link = req.body.link;
        night.text = req.body.text;
        night.save()
        .then(() => res.json('Night life updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;