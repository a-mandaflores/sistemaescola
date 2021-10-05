const Sequelize = require('sequelize')
const connection = require('../database/ConnectionDB')

const Series = connection.define('series', {
    teacher: {
        type: Sequelize.STRING,
        allowNull: false
    },schoolGrade: {
        type: Sequelize.STRING,
        allowNull: false
    }
})


module.exports = Series