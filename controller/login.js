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
    static async Login(ctx) {
        const {username, password} = ctx.body
        const data = await LoginDao.findAll({
            where: {
                username,
                password
            },
            attributes: ['uid']
        })
        console.log(data)
    }
}


router.get('/', Login.List)

router.post('/', Login.Login)

module.exports = router