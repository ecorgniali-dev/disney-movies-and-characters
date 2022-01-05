const express = require('express');
const app = express();
const passport = require('passport');
const sequelize = require('./database/db.connection');
require('./models/associations');

const morgan = require('morgan');
const { PORT } = require('./config/config');

const checkAuthentication = require('./middlewares/checkAuthentication');

const authRouter = require('./routes/auth.routes');
const webRouter = require('./routes/web.routes');
const charactersRouter = require('./routes/characters.routes');
const genresRouter = require('./routes/genres.routes');
const moviesRouter = require('./routes/movies.routes');

// miidlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(morgan('dev'));

// Routes
app.use('/auth', authRouter)
app.use(webRouter);
app.use('/characters', checkAuthentication, charactersRouter);
app.use('/genres', checkAuthentication, genresRouter);
app.use('/movies', checkAuthentication, moviesRouter);



// run server express
app.listen(PORT, async () => {
    console.log(`Server express running on http://localhost:${PORT}`);

    // connection db
    try {
        await sequelize.sync({ force: false });
        console.log('Database connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error.message);
    }

});
