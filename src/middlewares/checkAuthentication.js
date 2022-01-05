const jwt = require('jsonwebtoken');
const config = require('../config/config');

// middleware de authentication
const checkAuthentication = (req, res, next) => {
    try {
        let token = req.headers.authorization;
        if (!token) {
            return res.status(403).json({ error: 'You must provide the access token' });
        }

        jwt.verify(token, config.ACCESS_TOKEN_SECRET, (err, value) => {
            if (err) return res.status(500).json({ error: 'Invalid Token' });

            req.user = value.data;
            next();
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = checkAuthentication;
