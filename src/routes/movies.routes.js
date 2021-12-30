const { Router } = require('express');
const router = Router();
const controller = require('../controllers/movie.controller');

// getAll movies
router.get('/', async (req, res) => {
    try {
        res.json(await controller.getAll());
    } catch (error) {
        console.log(error);
    }
});

// get movie by id
router.get('/:id', async (req, res) => {
    try {
        res.json(await controller.getById(req.params.id));
    } catch (error) {
        console.log(error);
    }
});

// create new movie
router.post('/', async (req, res) => {
    try {
        res.json(await controller.create(req.body));
    } catch (error) {
        console.log(error);
    }
});

// update movie by id
router.put('/:id', async (req, res) => {
    try {
        res.json(await controller.update(req.params.id, req.body));
    } catch (error) {
        console.log(error);
    }
});

// delete movie by id
router.delete('/:id', async (req, res) => {
    try {
        res.json(await controller.delete(req.params.id));
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;