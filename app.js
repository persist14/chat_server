const Koa = require('koa')
const {PORT, ENV} = require('./config/config')
const {router} = require('./router')
const app = new Koa


app.use(router.routes()).use(router.allowedMethods())
app.listen(PORT, () => {
    console.log(`---------------- 聊天室${ENV.startsWith('prod') ? '线上' : '开发'}地址：---------------------\nhttp://127.0.0.1:${PORT}`)
})