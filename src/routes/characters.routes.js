const { Router } = require('express');
const router = Router();
const controller = require('../controllers/character.controller');


/**
 * @swagger
 * tags:
 *   name: Characters
 */
/**
 * @openapi
 * /characters:
 *   get:
 *     summary: 'Listar todos los personajes'
 *     description: Endpoint que devuelve un arreglo de objetos con imagen y nombre de todos los personajes cargados
 *     tags: [Characters]
 *     responses:
 *       200:
 *         description: operación exitosa
 *         schema:
 *           type: array
 *           items: 
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 descripcion: id del personaje
 *                 example: 1
 *               imageUrl:
 *                 type: string
 *                 descripcion: Url de la foto del personaje
 *                 example: http://image.com
 *               name:
 *                 type: string
 *                 descripcion: Nombre del personaje
 *                 example: Buzz Lightyear
 */
router.get('/', async (req, res) => {
    try {
        if(Object.keys(req.query).length) { 
            return res.json(await controller.searchCharacter(req.query));
        }
        res.json(await controller.getAll());
    } catch (error) {
        console.log(error);
    }
});


/**
 * @openapi
 * /characters/{id}:
 *   get:
 *     summary: 'Listar un personaje por su id'
 *     description: Endpoint que devuelve el personaje correspondiente al id enviado 
 *     tags: [Characters]
 *     parameters:
 *     - name: 'id'
 *       in: 'path'
 *       description: 'ID del personaje a retornar'
 *     responses:
 *       200:
 *         description: operación exitosa
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: integer
 *               descripcion: id del personaje
 *               example: 1
 *             imageUrl:
 *               type: string
 *               descripcion: Url de la foto del personaje
 *               example: http://image.com
 *             name:
 *               type: string
 *               descripcion: Nombre del personaje
 *               example: Buzz Lightyear
 *             age:
 *               type: integer
 *               descripcion: Edad del personaje
 *               example: 25
 *             weight:
 *               type: number
 *               descripcion: Peso del personaje
 *               example: 25.8
 *             history:
 *               type: string
 *               descripcion: Breve historia del personaje
 *               example: En las películas Buzz es un juguete con forma de guerrero espacial, el cual llega hasta las manos de Andy, un niño con una gran colección de juguetes. En casa de Andy conocerá al resto de juguetes como son Woody, el Sr. Patata o Rex, entre otros.
 *             movies:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     descripcion: Id de la pelicula o serie relacionada al personaje
 *                     example: 1
 *                   imageUrl:
 *                     type: string
 *                     descripcion: Url de la foto de la pelicula o serie
 *                     example: http://image.com
 *                   title:
 *                     type: string
 *                     descripcion: Título de la pelicula o serie
 *                     example: Toy Story
 */
router.get('/:id', async (req, res) => {
    try {
        res.json(await controller.getById(req.params.id));   
    } catch (error) {
        console.log(error);
    }
});


/**
 * @openapi
 * /characters:
 *   post:
 *     summary: 'Crear un nuevo personaje'
 *     description: Crea un nuevo personaje y lo agrega a la Base de Datos
 *     tags: [Characters]
 *     parameters:
 *     - name: 'body'
 *       in: body
 *       description: 'Campos necesarios para crear un nuevo personaje'
 *       schema:
 *         type: object
 *         properties:
 *           imageUrl:
 *             type: string
 *             descripcion: Url de la foto del personaje
 *             example: http://image.com
 *           name:
 *             type: string
 *             descripcion: Nombre del personaje
 *             example: Buzz Lightyear
 *           age:
 *             type: integer
 *             descripcion: Edad del personaje
 *             example: 25
 *           weight:
 *             type: number
 *             descripcion: Peso del personaje
 *             example: 25.8
 *           history:
 *             type: string
 *             descripcion: Breve historia del personaje
 *             example: En las películas Buzz es un juguete con forma de guerrero espacial, el cual llega hasta las manos de Andy, un niño con una gran colección de juguetes. En casa de Andy conocerá al resto de juguetes como son Woody, el Sr. Patata o Rex, entre otros.
 *           movies_id:
 *             type: array
 *             description: id de las peliculas o series en las que participó el personaje
 *             example: [1, 2, 3]
 *     responses:
 *       200:
 *         description: operación exitosa
 */
router.post('/', async (req, res) => {
    try {
        res.json(await controller.create(req.body));
    } catch (error) {
        console.log(error);
    }
});


/**
 * @openapi
 * /characters/{id}:
 *   put:
 *     summary: 'Actualizar un personaje por su id'
 *     description: Actualiza el personaje del id pasado como parametro
 *     tags: [Characters]
 *     parameters:
 *     - name: 'id'
 *       in: 'path'
 *       description: 'ID del personaje a actualizar'
 *     - name: 'body'
 *       in: body
 *       description: 'Campos necesarios para actualizar un nuevo personaje'
 *       schema:
 *         type: object
 *         properties:
 *           imageUrl:
 *             type: string
 *             descripcion: Url de la foto del personaje
 *             example: http://image.com
 *           name:
 *             type: string
 *             descripcion: Nombre del personaje
 *             example: Buzz Lightyear
 *           age:
 *             type: integer
 *             descripcion: Edad del personaje
 *             example: 25
 *           weight:
 *             type: number
 *             descripcion: Peso del personaje
 *             example: 25.8
 *           history:
 *             type: string
 *             descripcion: Breve historia del personaje
 *             example: En las películas Buzz es un juguete con forma de guerrero espacial, el cual llega hasta las manos de Andy, un niño con una gran colección de juguetes. En casa de Andy conocerá al resto de juguetes como son Woody, el Sr. Patata o Rex, entre otros.
 *           movies_id:
 *             type: array
 *             description: id de las peliculas o series en las que participó el personaje
 *             example: [1, 2, 3]
 *     responses:
 *       200:
 *         description: operación exitosa
 */
router.put('/:id', async (req, res) => {
    try {
        res.json(await controller.update(req.params.id, req.body));
    } catch (error) {
        console.log(error);
    }
});


/**
 * @openapi
 * /characters/{id}:
 *   delete:
 *     summary: 'Eliminar un personaje por su id'
 *     description: Elimina el personaje del ID indicado
 *     tags: [Characters]
 *     parameters:
 *     - name: 'id'
 *       in: 'path'
 *       description: 'ID del personaje a eliminar'
 *     responses:
 *       200:
 *         description: 'operación exitosa'
 */
router.delete('/:id', async (req, res) => {
    try {
        res.json(await controller.delete(req.params.id));
    } catch (error) {
       console.log(error); 
    }
});

module.exports = router;
