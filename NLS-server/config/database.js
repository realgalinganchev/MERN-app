const mongoose = require('mongoose');
const config = require('./config');

mongoose.Promise = global.Promise

module.exports = () => {
    return mongoose.connect(config.dbURL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    
};
