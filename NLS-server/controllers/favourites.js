const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        models.Favourites.find()
            .populate('author')
            .then((favourites) => {
                // console.log(favourites)
                let data = favourites.map(element => {
                    return {
                        venue: element.venue,
                        _id: element._id,
                        author: element.author.username,
                    }

                })
                res.send(data)

            })
            .catch(next);
    },

    post: (req, res, next) => {
        const { venue } = req.body;
        const { _id } = req.user;

        models.Favourites.create({ venue, author: _id })
            .then((createdFavourites) => {
                return Promise.all([
                    models.User.updateOne({ _id }, { $push: { favourites: createdFavourites } }, { new: true }),
                    models.Favourites.findOne({ _id: createdFavourites._id })
                ]);
            })
            .then(([modifiedObj, favouritesObj]) => {
                res.send(favouritesObj);
            })
            .catch(next);
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { venue } = req.body;
        models.Favourites.updateOne({ _id: id }, { venue })
            .then((updatedFavourites) => res.send(updatedFavourites))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.Favourites.deleteOne({ _id: id })
            .then((removedFavourites) => res.send(removedFavourites))
            .catch(next)
    }
};

