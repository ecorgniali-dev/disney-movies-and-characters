require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 8080,
    database: {
        DB_NAME: process.env.DB_NAME,
        DB_USER: process.env.DB_USER,
        DB_PASS: process.env.DB_PASS,
        DB_HOST: process.env.DB_HOST,
        DB_PORT: process.env.DB_PORT
    },
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    TOKEN_EXPIRATION_TIME: process.env.TOKEN_EXPIRATION_TIME || '10m',
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY
}
