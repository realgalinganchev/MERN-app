const User = require('./User');
const Favourites = require('./Favourites');
const Venues = require('./Venues')
const TokenBlacklist = require('./TokenBlacklist');

// Favourite.create({data})
module.exports = {
    User,
    Favourites,
    TokenBlacklist,
    Venues
};