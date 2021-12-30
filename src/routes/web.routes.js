const { Router } = require('express');
const router = Router();

// index route
router.get('/', (req, res) => {
    res.send(`
        <h1>Bienvenidos</h1>
        <p>Esta es una API diseñada para explorar el mundo de Disney, a traves de ella se puede conocer personajes del mundo Disney y peliculas donde participaron.</p>
    `)
});

module.exports = router;
