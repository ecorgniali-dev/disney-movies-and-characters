const Movie = require('../models/movie.model');
const Genre = require('../models/genre.model');
const Character = require('../models/character.model');

class MovieController {

    async getAll() {
        return await Movie.findAll();
    }

    async getById(id) {
        const movie = await Movie.findByPk(id, { include: [Genre, Character] });
        if (movie === null) return `Id: ${id} Not found!`;
        return movie;
    }

    async create(movie) {
        const newMovie = await Movie.create(movie, { include: [Character] });
        if (movie.characters_id.length) {
            await newMovie.addCharacters(movie.characters_id);
        }
        return newMovie;
    }

    async update(id, data) {
        const movie = await Movie.findOne({
            where: {
                id: id
            },
            include: [Character]
        })
        if (movie === null) return `Id: ${id} Not found!`;
        const result = await movie.update(data);
        if (data.characters_id.length) {
            result.setCharacters(data.characters_id)
        }
        return result;
    }

    async delete(id) {
        return await Movie.destroy({
            where: {
                id: id
            }
        });
    }

}

module.exports = new MovieController();
