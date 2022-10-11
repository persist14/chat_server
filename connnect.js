const { Sequelize } = require('sequelize')

const DB = new Sequelize('chat_db', 'root', 'yuannian', {
    host: 'localhost',
    dialect: 'mysql',
    port: '3306'
})
async function testConnect() {
    try {
        await DB.authenticate()
        console.log('数据库连接成功------------')
    }catch (e) {
        console.log('e:', e.message)
        console.log('数据库连接失败------------')
    }
}

testConnect()

module.exports = DB