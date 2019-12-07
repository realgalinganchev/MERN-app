require('dotenv').config()

const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 3001,
        dbURL: `mongodb+srv://galin:${process.env.SECRET_KEY}@nightlifesofia-fdndm.mongodb.net/test?retryWrites=true&w=majority`,
        authCookieName: 'x-auth-token'
    },
    production: {}
};


module.exports = config[env];

//mongodb+srv://galin:@nightlifesofia-fdndm.mongodb.net/test?retryWrites=true&w=majority
//mongodb://localhost:27017/nightlifesofia