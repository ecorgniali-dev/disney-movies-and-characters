const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db.connection');

class User extends Model { }
User.init({
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { 
    sequelize, 
    modelName: 'users',
    timestamps: false
});

module.exports = User;
