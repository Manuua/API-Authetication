const services = require ('./services')
const response = require('koa/lib/response')
const services = require("../services")

modulo.exports = {
    create = async ctx =>{
         const { request } = ctx 
         const user = await services.create(request.body)
         response.body = user
    }
}