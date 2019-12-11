const controllers = require('../controllers');
const router = require('express').Router();


router.get('/', controllers.venues.get);
router.post('/id', controllers.venues.getOne);
router.post('/fbUrl', controllers.venues.getOneByFbUrl);



module.exports = router;