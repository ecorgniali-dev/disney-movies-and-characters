const { Router } = require('express');
const router = Router();
const controller = require('../controllers/character.controller.js');

// getAll characters
router.get('/', async (req, res) => {
    try {
        res.json(await controller.getAll());
    } catch (error) {
        console.log(error);
    }
});

// get character by id
router.get('/:id', async (req, res) => {
    try {
        res.json(await controller.getById(req.params.id));   
    } catch (error) {
        console.log(error);
    }
});

// create new character
router.post('/', async (req, res) => {
    try {
        res.json(await controller.create(req.body));
    } catch (error) {
        console.log(error);
    }
});

// update character by id
router.put('/:id', async (req, res) => {
    try {
        res.json(await controller.update(req.params.id, req.body));
    } catch (error) {
        console.log(error);
    }
});

// delete character by id
router.delete('/:id', async (req, res) => {
    try {
        res.json(await controller.delete(req.params.id));
    } catch (error) {
       console.log(error); 
    }
});

module.exports = router;
