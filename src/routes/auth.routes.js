const { Router } = require('express');
const router = Router();
const passport = require('../controllers/auth.controller');

router.post('/login', (req, res, next) => {
    return passport.authenticate('login', (err, accessToken) => {
        if (err) {
            return res.status(404).json({
                error: err
            });
        }

        return res.status(200).json({
            accessToken: accessToken
        });
    })(req, res, next);
});


router.post('/register', (req, res, next) => {
    return passport.authenticate('register', (err, data) => {
        if (err) {
            return res.status(404).json({
                error: err
            });
        }

        return res.status(200).json({
            success: `${data.username} user successfully registered!`
        });
    })(req, res, next);
});


module.exports = router;
