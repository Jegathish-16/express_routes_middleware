const express = require("express")
const contactRouter = express.Router()

contactRouter.get('/',(request,response) =>{
    response.send('This is Contact page')
})

module.exports = contactRouter;