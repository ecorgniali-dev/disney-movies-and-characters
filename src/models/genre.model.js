const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db.connection');

class Genre extends Model { }
Genre.init({
    name: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
}, { 
    sequelize, 
    modelName: 'genres',
    timestamps: false
});

module.exports = Genre;
