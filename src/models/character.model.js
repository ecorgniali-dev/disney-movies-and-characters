const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db.connection');

class Character extends Model { }
Character.init({
    imageUrl: DataTypes.STRING,
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    weight: DataTypes.FLOAT,
    history: DataTypes.TEXT
}, { 
    sequelize, 
    modelName: 'characters',
    timestamps: false
});

module.exports = Character;
