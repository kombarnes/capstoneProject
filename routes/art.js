const router = require('express').Router();
let Art = require('../models/art.model');

router.route('/').get((req, res) => {
    Art.find()
    .then(arts => res.json(arts))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/add').post((req, res) => {
    const image = req.body.image;
    const title = req.body.title;
    const link = req.body.link;
    const text = req.body.text;
    const newArt = new Art ({
      image,
      title,
      link,
      text
    });
    newArt.save()
    .then(() => res.json('Art added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').get((req, res) => {
    Art.findById(req.params.id)
    .then(art => res.json(art))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
    Art.findByIdAndDelete(req.params.id)
    .then(() => res.json('art deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
    Art.findById(req.params.id)
    .then(art => {
        art.image = req.body.image;
        art.title = req.body.title;
        art.link = req.body.link;
        art.text = req.body.text;
        art.save()
        .then(() => res.json('art updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;