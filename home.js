const express = require("express")
const homeRouter = express.Router()

homeRouter.get('/',(request,response) =>{
    response.send('Welcome!! This is home page')
})

module.exports = homeRouter;