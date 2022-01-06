const { Router } = require('express');
const router = Router();
const passport = require('../controllers/auth.controller');


/**
 * @swagger
 * tags:
 *   name: Auth
 */
/**
 * @openapi
 * /auth/login:
 *   post:
 *     summary: 'Login de usuario'
 *     description: Login de usuario
 *     tags: [Auth]
 *     parameters:
 *     - name: 'body'
 *       in: 'body'
 *       description: 'Campos necesarios para el login'
 *       schema:
 *         type: 'object'
 *         properties:
 *           username:
 *             type: 'string'
 *             required: true
 *           password:
 *             type: 'string'
 *             required: true
 *     responses:
 *       200:
 *         description: 'operación exitosa'
 *       404:
 *         description: 'usuario o contraseña incorrecta'
 */
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


/**
 * @openapi
 * /auth/register:
 *   post:
 *     summary: 'Registro de usuario'
 *     description: Registro de un nuevo usuario
 *     tags: [Auth]
 *     parameters:
 *     - name: 'body'
 *       in: 'body'
 *       description: 'Campos necesarios para el registro'
 *       schema:
 *         type: 'object'
 *         properties:
 *           username:
 *             type: 'string'
 *             example: 'miusername'
 *             required: true
 *           password:
 *             type: 'string'
 *             example: 'mypassword'
 *             required: true
 *           email:
 *             type: 'string'
 *             example: 'correo@correo.com'
 *             required: true
 *     responses:
 *       200:
 *         description: 'operación exitosa'
 *       404:
 *         description: 'fallo en el registro'
 */
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
