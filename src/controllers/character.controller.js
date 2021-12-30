const Character = require('../models/character.model');
const Movie = require('../models/movie.model');

class CharacterController {

    async getAll() {
        return await Character.findAll();
    }

    async getById(id) {
        const character = await Character.findByPk(id, { include: [Movie] });
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
        if (data.movies_id.length) {
            result.setMovies(data.movies_id);
        }
        return result;
    }

    async delete(id) {
        return await Character.destroy({
            where: {
                id: id
            }
        });
    }

}

module.exports = new CharacterController();
