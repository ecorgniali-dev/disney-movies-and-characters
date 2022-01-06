const swaggerOptions = {
    definition: {
        info: {
            title: 'Documentación API Rest Disney Characters',
            description:
                'Esta es una API RESTFul hecha con Express para explorar el mundo de Disney, donde se puede conocer personajes y peliculas en las que participaron.'
        },
        securityDefinitions: {
            JWT: {
                type: 'apiKey',
                description: 'Autorización JWT para la API',
                name: 'Authorization',
                in: 'header',
            },
        },
        security: [
            {
                JWT: []
            }
        ]        
    },
    apis: ['./src/routes/*.js'],
};

module.exports = swaggerOptions;
