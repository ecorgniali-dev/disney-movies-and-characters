const Movie = require('./movie.model');
const Character = require('./character.model');
const Genre = require('./genre.model');
const CharacterMovie = require('./characterMovie');

// relación muchos a muchos Characters -> Movies
Movie.belongsToMany(Character, { through: CharacterMovie });
Character.belongsToMany(Movie, { through: CharacterMovie });

// relación uno a muchos Genres -> Movies
Genre.hasMany(Movie, { foreignKey: 'genres_id' });
Movie.belongsTo(Genre, { foreignKey: 'genres_id' });
