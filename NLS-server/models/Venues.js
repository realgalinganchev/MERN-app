const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const venuesSchema = new Schema({

    name: {
        type: String,
        required: true,
    },

    geoLocation: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    fbUrl :{
        type: String,
        required: true,
    }

});

module.exports = new Model('Venues', venuesSchema);