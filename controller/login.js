const Router = require('koa-router')
const LoginDao = require('../model/login')
const router = new Router()
class Login {
    static async List(ctx) {
        try {
            const data = await LoginDao.findAll()
            console.log(data)
        }catch (e) {
            console.log(e.message)
        }
        ctx.body = {
            test: 'ok'
        }
    }
}


router.get('/', Login.List)


module.exports = router