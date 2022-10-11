const Router = require('koa-router')

const router = new Router({
    prefix: '/web'
})

const login = require('./controller/login')

router.use('/login', login.routes(), router.allowedMethods())

module.exports = { router }