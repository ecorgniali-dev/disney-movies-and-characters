const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

module.exports = {


    // validar password
    isValidPassword: (user, password) => {
        return bcrypt.compareSync(password, user.password);
    },

    // generar token
    generateToken: (user) => {
        return jwt.sign(
            { data: user },
            config.ACCESS_TOKEN_SECRET,
            { expiresIn: config.TOKEN_EXPIRATION_TIME }
        )
    },

    // hashear pass
    createHash: (password) => {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
    }

}


