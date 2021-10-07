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


Series.sync({force: false})
module.exports = Series