const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db.connection');

class Movie extends Model { }
Movie.init({
    imageUrl: DataTypes.STRING,
    title: DataTypes.STRING,
    creation_date: DataTypes.DATEONLY,
    score: DataTypes.ENUM('1', '2', '3', '4', '5')
}, { 
    sequelize, 
    modelName: 'movies',
    timestamps: false
});

module.exports = Movie;
