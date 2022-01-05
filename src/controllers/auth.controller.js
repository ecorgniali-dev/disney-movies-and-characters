const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user.model');
const { isValidPassword, generateToken, createHash } = require('../helpers/helpers');
const { sendEmail } = require('../helpers/sendGrid')


// LocalStrategy "login"
passport.use('login', new LocalStrategy({
    session: false,
    passReqToCallback: true
},
    async (req, username, password, done) => {

        // chequeamos si el usuario existe
        const user = await User.findOne({ where: { username: username } });

        // usuario no existe
        if (user === null) {
            return done('Username does not exist!', false, console.log('Username does not exist!'));
        }

        // usuario existe pero esta mal la contraseña
        if (!isValidPassword(user, password)) {
            return done('Invalid password!', false, console.log('Invalid password!'));
        }

        // credenciales correctas. generamos el token
        return done(null, generateToken(user));

    }
))

// LocalStrategy "register"
passport.use('register', new LocalStrategy({
    session: false,
    passReqToCallback: true
},
    (req, username, password, done) => {

        findOrCreateUser = async () => {
            // find username
            const user = await User.findOne({ where: { username: username } });

            // username already exists
            if (user !== null) {
                return done('Username already exists!', false, console.log('Username already exists!'));
            }

            // create user
            User.create({
                username: username,
                password: createHash(password),
                email: req.body.email
            })
                .then(user => {
                    sendEmail(user.username, user.email);
                    return done(null, user);
                })
                .catch(err => {
                    return done(
                        'An error occurred while saving the user. Check message in console',
                        false,
                        console.log(err.message)
                    );
                });

        }

        process.nextTick(findOrCreateUser);

    }

));

module.exports = passport;
