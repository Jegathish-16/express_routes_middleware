const express = require("express")
const serviceRouter = express.Router()

const listofservices = [
    {
        // 'id' : 1,
        'services' : 'web Development'
    },
    {
        // 'id' : 2,
        'services' : 'Node'
    },
    {
        // 'id' : 3,
        'services' : 'React'
    },
    {
        // 'id' : 4,
        'services' : 'HTML & CSS'
    }
]

serviceRouter.get('/',(request,response) =>{
    response.send('This is service page')
})

serviceRouter.get('/:id([0-9]{1})',(request,response) =>{
    // const serId = Number(request.params.id)
    // const ServiceId = listofservices.find((service)=>
    //     service.id === serId
    // )

    // if(!ServiceId)
    // {
    //     response.send("Service not found")
    // }
    // else
    // {
    //     response.send(ServiceId.services)
    // }
    // response.send('This is service page')
    response.send(request.service.services)
})

serviceRouter.param('id',(request,response,next,id) =>{
    request.service = listofservices[id-1]
    next() 
})

module.exports = serviceRouter;