const Genre = require('../models/genre.model');

class GenreController {

    async getAll() {
        return await Genre.findAll();
    }

    async getById(id) {
        const genre = await Genre.findByPk(id);
        if (genre === null) return `Id: ${id} Not found!`;
        return genre;
    }

    async create(genre) {
        const newGenre = await Genre.create(genre);
        return newGenre;
    }

    async update(id, data) {
        return await Genre.update(data, {
            where: {
                id: id
            }
        });
    }

    async delete(id) {
        return await Genre.destroy({
            where: {
                id: id
            }
        });
    }

}

module.exports = new GenreController();
