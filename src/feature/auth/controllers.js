const services = require('./services')
const Boom = require('boom') 


module.exports = {
    auth: async (ctx) => {
     const {request , response} = ctx 
     const user = await services.auth(request.body)
     console.log(user)
     if(user){
         response.body= user
     }else{
         response.body= {result: Boom.badRequest() }
     }
    }
}

//ctx = contexto
//controler recebe info