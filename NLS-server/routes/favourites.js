const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.favourites.get);

// Auth middleware
router.post('/', auth(), controllers.favourites.post);

router.put('/:id', auth(), controllers.favourites.put);

router.delete('/:id', auth(), controllers.favourites.delete);

module.exports = router;