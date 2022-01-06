const { Router } = require('express');
const router = Router();
const controller = require('../controllers/genre.controller');


/**
 * @swagger
 * tags:
 *   name: Genres
 *   description: Endpoints para manejar toda la información de los generos de peliculas o series
 */
/**
 * @openapi
 * /genres:
 *   get:
 *     summary: 'Listar todos los generos de peliculas o series'
 *     description: Endpoint que devuelve un arreglo de objetos con imagen y nombre de todos los generos de peliculas cargados
 *     tags: [Genres]
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
 *                 descripcion: id del genero
 *                 example: 1
 *               imageUrl:
 *                 type: string
 *                 descripcion: Url de imagen
 *                 example: http://image.com
 *               name:
 *                 type: string
 *                 descripcion: Nombre del genero
 *                 example: Animación
 */
router.get('/', async (req, res) => {
    try {
        res.json(await controller.getAll());
    } catch (error) {
        console.log(error);
    }
});


/**
 * @openapi
 * /genres/{id}:
 *   get:
 *     summary: 'Listar un genero por su id'
 *     description: Endpoint que devuelve el genero correspondiente al id enviado 
 *     tags: [Genres]
 *     parameters:
 *     - name: 'id'
 *       in: 'path'
 *       description: 'ID del genero de pelicula o serie a retornar'
 *     responses:
 *       200:
 *         description: operación exitosa
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: integer
 *               descripcion: id del genero
 *               example: 1
 *             imageUrl:
 *               type: string
 *               descripcion: Url de imagen
 *               example: http://image.com
 *             name:
 *               type: string
 *               descripcion: Nombre del genero
 *               example: Animación
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
 * /genres:
 *   post:
 *     summary: 'Crear un nuevo genero de pelicula o serie'
 *     description: Crea un nuevo genero de pelicula o serie y lo agrega a la Base de Datos
 *     tags: [Genres]
 *     parameters:
 *     - name: 'body'
 *       in: body
 *       description: 'Campos necesarios para crear un nuevo genero'
 *       schema:
 *         type: object
 *         properties:
 *           imageUrl:
 *             type: string
 *             descripcion: Url de imagen para el genero
 *             example: http://image.com
 *           name:
 *             type: string
 *             descripcion: Nombre del genero
 *             example: Animación
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
 * /genres/{id}:
 *   put:
 *     summary: 'Actualizar un genero por su id'
 *     description: Actualiza el genero del id pasado como parametro
 *     tags: [Genres]
 *     parameters:
 *     - name: 'id'
 *       in: 'path'
 *       description: 'ID del genero a actualizar'
 *     - name: 'body'
 *       in: body
 *       description: 'Campos necesarios para actualizar un genero'
 *       schema:
 *         type: object
 *         properties:
 *           imageUrl:
 *             type: string
 *             descripcion: Url de imagen para el genero
 *             example: http://image.com
 *           name:
 *             type: string
 *             descripcion: Nombre del genero
 *             example: Animación
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
 * /genres/{id}:
 *   delete:
 *     summary: 'Eliminar un genero por su id'
 *     description: Elimina el genero del id indicado
 *     tags: [Genres]
 *     parameters:
 *     - name: 'id'
 *       in: 'path'
 *       description: 'ID del genero a eliminar'
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
