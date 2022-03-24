const router = require('express').Router();
let Theme = require('../models/theme.model');

router.route('/').get((req, res) => {
    Theme.find()
    .then(themes => res.json(themes))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/add').post((req, res) => {
    const image = req.body.image;
    const title = req.body.title;
    const link = req.body.link;
    const text = req.body.text;
    const newTheme = new Theme ({
      image,
      title,
      link,
      text
    });
    newTheme.save()
    .then(() => res.json('Theme added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').get((req, res) => {
    Theme.findById(req.params.id)
    .then(theme => res.json(theme))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
    Theme.findByIdAndDelete(req.params.id)
    .then(() => res.json('Theme deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
    Theme.findById(req.params.id)
    .then(theme => {
        theme.image = req.body.image;
        theme.title = req.body.title;
        theme.link = req.body.link;
        theme.text = req.body.text;
        theme.save()
        .then(() => res.json('Theme updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;