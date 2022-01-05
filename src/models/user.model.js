const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db.connection');

class User extends Model { }
User.init({
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    }
}, { 
    sequelize, 
    modelName: 'users',
    timestamps: false
});

module.exports = User;
