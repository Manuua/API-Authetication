const  Koa = require('koa')
const Router = require('koa-router')
const applyRoutes = require('./routes')

const app = new Koa()
const router = new Router()

// exporta para que ele possa ser usado em outro arquivo
module.exports = () => {

console.log('[Koa] Creat a new server')


applyRoutes(router)

app.use(router.routes())

app.listen(8080)
}