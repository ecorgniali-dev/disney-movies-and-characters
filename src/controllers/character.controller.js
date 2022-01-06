const Character = require('../models/character.model');
const Movie = require('../models/movie.model');
const Genre = require('../models/genre.model');
const { Op } = require('sequelize');

class CharacterController {

    async getAll() {
        return await Character.findAll({
            attributes: ['id', 'imageUrl', 'name']
        });
    }

    async getById(id) {
        const character = await Character.findByPk(
            id,
            {
                include: [{
                    model: Movie,
                    attributes: ['id', 'imageUrl', 'title'],
                    through: {
                        attributes: []
                    }
                }]
            }
        );
        if (character === null) return `Id: ${id} Not found!`;
        return character;
    }

    async create(character) {
        const newCharacter = await Character.create(character, { include: [Movie] });
        if (character.movies_id.length) {
            await newCharacter.addMovies(character.movies_id);
        }
        return newCharacter;
    }

    async update(id, data) {
        const character = await Character.findOne({
            where: {
                id: id
            },
            include: [Movie]
        });
        if (character === null) return `Id: ${id} Not found!`;
        const result = await character.update(data);
        result.setMovies(data.movies_id);
        return result;
    }

    async delete(id) {
        return await Character.destroy({
            where: {
                id: id
            }
        });
    }

    async searchCharacter(query) {
        const { name = '', age = '', weight = '', movies = '' } = query;
        return await Character.findAll({
            where: {
                [Op.or]: [
                    { name: name },
                    { age: age },
                    { weight: weight },
                    { '$movies.characters_has_movies.movieId$': movies }
                ]
            },
            include: [{ 
                model: Movie,
                attributes: ['id', 'imageUrl', 'title'],
                through: {
                    attributes: []
                }
            }]

        })
    }

}

module.exports = new CharacterController();
