const { Model } = require('sequelize');
const sequelize = require('../database/db.connection');

class CharacterMovie extends Model { }
CharacterMovie.init({}, { 
    sequelize, 
    modelName: 'characters_has_movies',
    timestamps: false
});

module.exports = CharacterMovie;
