const { Router } = require('express');
const router = Router();
const controller = require('../controllers/movie.controller');


/**
 * @swagger
 * tags:
 *   name: Movies
 *   description: Endpoints para manejar toda la información de las peliculas o series
 */
/**
 * @openapi
 * /movies:
 *   get:
 *     summary: 'Listar todas las peliculas y series'
 *     description: Endpoint que devuelve un arreglo de objetos con imagen y nombre de todos los personajes cargados
 *     tags: [Movies]
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
 *                 descripcion: id de la pelicula o serie
 *                 example: 1
 *               imageUrl:
 *                 type: string
 *                 descripcion: Url de la pelicula o serie
 *                 example: http://image.com
 *               name:
 *                 type: string
 *                 descripcion: Título de la pelicula o serie
 *                 example: Toy Story
 *               creation_date:
 *                 type: date
 *                 descripcion: Fecha de creación de la película o serie
 *                 example: "1996-03-14"
 * 
 * 
 * /movies?name=nombre&genre=idGenero&order=ASC|DESC:
 *   get:
 *     summary: 'Buscar una pelicula por su nombre o genero'
 *     description: Busca una pelicula o serie por su nombre o genero y las ordena de forma ascendente o descendente
 *     tags: [Movies]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *       - in: query
 *         name: genre
 *         schema:
 *           type: integer
 *       - in: query
 *         name: order
 *         schema:
 *         enum:
 *           - ASC
 *           - DESC
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
 *                 descripcion: id de la pelicula o serie
 *                 example: 1
 *               imageUrl:
 *                 type: string
 *                 descripcion: Url de la pelicula o serie
 *                 example: http://image.com
 *               name:
 *                 type: string
 *                 descripcion: Título de la pelicula o serie
 *                 example: Toy Story
 *               creation_date:
 *                 type: date
 *                 descripcion: Fecha de creación de la película o serie
 *                 example: "1996-03-14"
 *               score:
 *                 type: string
 *                 descripcion: Puntaje/calificación de la pelicula o serie
 *                 example: 4
 *               genre:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: "Animación"
 *                   imageUrl:
 *                     type: string
 *                     example: https://image.com
 */
router.get('/', async (req, res) => {
    try {
        if(Object.keys(req.query).length) { 
            return res.json(await controller.searchMovie(req.query));
        }
        res.json(await controller.getAll());
    } catch (error) {
        console.log(error);
    }
});


/**
 * @openapi
 * /movies/{id}:
 *   get:
 *     summary: 'Listar una pelicula o serie por su id'
 *     description: Endpoint que devuelve el la pelicula o serie correspondiente al id enviado 
 *     tags: [Movies]
 *     parameters:
 *     - name: 'id'
 *       in: 'path'
 *       description: 'ID de la pelicula o serie a retornar'
 *     responses:
 *       200:
 *         description: operación exitosa
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: integer
 *               descripcion: id de la pelicula o serie
 *               example: 1
 *             imageUrl:
 *               type: string
 *               descripcion: Url de la imagen de la pelicula o serie
 *               example: http://image.com
 *             title:
 *               type: string
 *               descripcion: Nombre de la pelicula o serie
 *               example: Toy Story
 *             creation_date:
 *               type: date
 *               descripcion: Fecha de creación de la pelicula o serie
 *               example: "1996-03-14"
 *             score:
 *               type: string
 *               description: Puntaje/calificación de la pelicula o serie
 *               example: 4
 *             genre:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   description: Genero de la pelicula o serie
 *                   example: Animación
 *             characters:
 *               type: array
 *               description: Array de objetos con los personajes de la pelicula o serie
 *               items:
 *                 type: object
 *                 properties:
 *                   imageUrl:
 *                     type: string
 *                     descripcion: Url de la foto del personaje
 *                     example: http://image.com
 *                   name:
 *                     type: string
 *                     descripcion: Nombre del personaje
 *                     example: Buzz Lightyear
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
 * /movies:
 *   post:
 *     summary: 'Crear una nueva pelicula o serie'
 *     description: Crea una nueva pelicula o serie y lo agrega a la Base de Datos
 *     tags: [Movies]
 *     parameters:
 *     - name: 'body'
 *       in: body
 *       description: 'Campos necesarios para crear un nuevo registro'
 *       schema:
 *         type: object
 *         properties:
 *           imageUrl:
 *             type: string
 *             descripcion: Url de la imagen de la pelicula o serie
 *             example: http://image.com
 *           title:
 *             type: string
 *             descripcion: Nombre de la pelicula o serie
 *             example: Toy Story
 *           creation_date:
 *             type: date
 *             descripcion: Fecha de creación de la pelicula o serie
 *             example: "1996-03-14"
 *           score:
 *             type: string
 *             description: Puntaje/calificación de la pelicula o serie
 *             example: 4
 *           genres_id:
 *             type: integer
 *             description: Id del genero correspondiente a la pelicula o serie
 *             example: 1
 *           characters_id:
 *             type: array
 *             description: id de los personajes de la pelicula o serie
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
 * /movies/{id}:
 *   put:
 *     summary: 'Actualizar una pelicula o serie'
 *     description: Actualizar una pelicula o serie en la Base de Datos
 *     tags: [Movies]
 *     parameters:
 *     - name: 'id'
 *       in: path
 *       description: 'id de la pelicula o serie a actualizar'
 *     - name: 'body'
 *       in: body
 *       description: 'Campos necesarios para actualizar un registro'
 *       schema:
 *         type: object
 *         properties:
 *           imageUrl:
 *             type: string
 *             descripcion: Url de la imagen de la pelicula o serie
 *             example: http://image.com
 *           title:
 *             type: string
 *             descripcion: Nombre de la pelicula o serie
 *             example: Toy Story
 *           creation_date:
 *             type: date
 *             descripcion: Fecha de creación de la pelicula o serie
 *             example: "1996-03-14"
 *           score:
 *             type: string
 *             description: Puntaje/calificación de la pelicula o serie
 *             example: 4
 *           genres_id:
 *             type: integer
 *             description: Id del genero correspondiente a la pelicula o serie
 *             example: 1
 *           characters_id:
 *             type: array
 *             description: id de los personajes de la pelicula o serie
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
 * /movies/{id}:
 *   delete:
 *     summary: 'Eliminar un pelicula o serie por su id'
 *     description: Elimina la pelicula o serie del id indicado
 *     tags: [Movies]
 *     parameters:
 *     - name: 'id'
 *       in: 'path'
 *       description: 'ID la pelicula o serie a eliminar'
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
