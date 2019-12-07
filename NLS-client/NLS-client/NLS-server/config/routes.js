const router = require('../routes/');

module.exports = (app) => {
    app.get('/auth', (req, res) => {
        const token = req.cookies[cookies.authCookieName];
        utils.jwt.verifyToken(token)
            .then(({ id }) => models.User.findByID(id))
            .then(user => res.send(user))
            .catch(() => res.status(401).send('HELLO!'));
    });

    app.use('/api/user', router.user);

    app.use('/api/favourites', router.favourites);

    app.use('*', (req, res, next) => res.send('<h1> Something went wrong. Try again. :thumbsup: </h1>'))
};