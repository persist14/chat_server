const {DataTypes} = require('sequelize')
const uuid = require('uuid')
const DB = require('./connnect')

const LoginModel = DB.define('login', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    uid: {
        type: DataTypes.STRING,
        default: uuid.v4()
    }
})


// async function createModel() {await DB.sync({ force: true })}
// createModel()

module.exports = LoginModel