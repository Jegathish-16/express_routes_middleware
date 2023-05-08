const express = require("express")
const aboutRouter = express.Router()

aboutRouter.get('/',(request,response) =>{
    response.send('This is about page')
})

module.exports = aboutRouter;