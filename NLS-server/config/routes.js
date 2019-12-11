const models = require('../models');
const router = require('../routes/');
const config = require('../config/config');
const utils = require('../utils/');


module.exports = (app) => {
    app.get('/auth', (req, res) => {
        const token = req.cookies[config.authCookieName];
        //console.log(token)
        utils.jwt.verifyToken(token)
            .then(({ id }) => models.User.findByID(id))
            .then(user => res.send(user))
            .catch(() => res.status(401).send("401"));
    });

    app.use('/api/user', router.user);

    app.use('/api/favourites', router.favourites);
    app.use('/api/venues', router.venues);

    app.use('*', (req, res, next) => res.send('<h1> Something went wrong. Try again. :thumbsup: </h1>'))
};