const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Usuario = sequelize.define("Usuario", {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isEmail:true
        }
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = Usuario;