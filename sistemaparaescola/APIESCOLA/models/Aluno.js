const Sequelize = require('sequelize')
const connection = require('../database/ConnectionDB')
const Series = require('./Serie')

const Alunos = connection.define('alunos', {
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    group: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

Series.hasMany(Alunos)
Alunos.belongsTo(Series)

Alunos.sync({force: false})
module.exports = Alunos