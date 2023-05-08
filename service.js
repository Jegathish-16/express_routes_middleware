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

// serviceRouter.get('/:id([0-9]{1})',(request,response) =>{
//     response.send(request.service.services)
// })

serviceRouter.param('id',(request,response,next,id) =>{
    request.service = listofservices[id-1]
    next() 
})

serviceRouter.get('/new',(request,response)=>{
    response.render('users/new')
})

serviceRouter.post('/',(request,response)=>{
    
    //console.log(request.body.firstname)
    listofservices.push({services:request.body.servicename})
    response.redirect(`/service/${listofservices.length}`)
})

serviceRouter.get('/:id([0-9]{1})',(request,response)=>{
    response.send(`${request.service.services} with id ${request.params.id} is cost of ${request.service.servicePrice} and it takes ${request.service.serviceTime} to complete`)
})

module.exports = serviceRouter;