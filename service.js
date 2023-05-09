const express = require("express")
const serviceRouter = express.Router()

const listofservices = [
    {
        // 'id' : 1,
        'services' : 'web Development',
        'charge' : 2500,
        'Dur' : 2
    },
    {
        // 'id' : 2,
        'services' : 'Node',
        'charge' : 4500,
        'Dur' : 2
    },
    {
        // 'id' : 3,
        'services' : 'React',
        'charge' : 5000,
        'Dur' : 2


    },
    {
        // 'id' : 4,
        'services' : 'HTML & CSS',
        'charge' : 3500,
        'Dur' : 2
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
    console.log(request.body.servicename,request.body.serviceCost,request.body.serviceduration)
    listofservices.push({services:request.body.servicename,charge:request.body.serviceCost,Dur:request.body.serviceduration})
    response.redirect(`/service/${listofservices.length}`)
})

serviceRouter.get('/:id',(request,response)=>{
    response.send(`${request.service.services} with id =${request.params.id} is cost of =${request.service.charge} and it takes =${request.service.Dur} to complete`)
})

module.exports = serviceRouter;