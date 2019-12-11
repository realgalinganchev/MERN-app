const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        models.Venues.find()
            .then((venues) => {
                //console.log(venues)
                let data = venues.map(element => {
                    return {
                        name: element.name,
                        _id: element._id,
                        description: element.description,
                        img: element.img,
                        location: element.location,
                        fbUrl: element.fbUrl,
                    }

                })
                res.send(data)

            })
            .catch(next);
    },
    getOne: (req, res, next) => {
        const { id } = req.body;
        
        models.Venues.find({ _id: id })
        .then((venue) => res.send(venue))
        .catch(next)
            .catch(next)
    },
    getOneByFbUrl: (req, res, next) => {
        const { fbUrl } = req.body;
        
        models.Venues.find({ fbUrl })
            .then((venue) => res.send(venue))
            .catch(next)
    },

}

