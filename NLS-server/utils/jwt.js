const jwt = require('jsonwebtoken');
require('dotenv').config()
const secret = process.env.TOKEN_SECRET;

function createToken(data) {
    return jwt.sign(data, secret, { expiresIn: '1h' }); //to be repaired
}

function verifyToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, (err, data) => {
            if (err) { reject(err); return; }
            resolve(data);
        });
    });
}

module.exports = {
    createToken,
    verifyToken
}