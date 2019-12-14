const models = require('../models/');
const config = require('../config/config');
const utils = require('../utils');

module.exports = {
    get: (req, res, next) => {
        models.User.find()
            .then((users) => res.send(users))
            .catch(next)
    },
    getOne: (req, res, next) => {
        const id = req.params.id;

        models.User.find({ _id: id })
            .then((user) => res.send(user))
            .catch(next)
    },
    post: {
        register: (req, res, next) => {
            const { username, password, email } = req.body;
            models.User.create({ username, password, email })
                .then((createdUser) => res.send(createdUser))
                .catch(next)
        },

        login: (req, res, next) => {
            const { username, password } = req.body;
            models.User.findOne({ username })
                .then((user) => !!user ? Promise.all([user, user.matchPassword(password)]) : [null, false])
                .then(([user, match]) => {
                    if (!match) {
                        res.status(401).send('Invalid username or password');
                        return;
                    }

                    const token = utils.jwt.createToken({ id: user._id });
                    res.cookie(config.authCookieName, token).send(user);

                })
                .catch(next);
        },

        logout: (req, res, next) => {
            const token = req.cookies[config.authCookieName];
            //console.log('-'.repeat(100));;
            // console.log(token);
            //console.log('-'.repeat(100));
            models.TokenBlacklist.create({ token })
                .then(() => {
                    res.clearCookie(config.authCookieName).send('Logout successfully!');
                })
                .catch(next);
        }
    },
//////
    put: (req, res, next) => {
        const id = req.params.id;
        const { fbUrl } = req.body;
        //console.log(fbUrl);
        models.User.find({ _id: id })
            .then((user) => {
                //console.log(user)
                if (user[0].favourites.includes(fbUrl)) {
                    res.status(304).send(user)
                    return;
                }

                models.User.findOneAndUpdate({ _id: id }, { $push: { favourites: fbUrl } }, { new: true })
                    .then((updatedUser) => res.status(200).send(updatedUser)).catch(next)
            }).catch(next)

    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.User.deleteOne({ _id: id })
            .then((removedUser) => res.send(removedUser))
            .catch(next)
    }
};