const express = require("express")
const productRouter = express.Router()

productRouter.get('/',(request,response) =>{
    response.send('This is Product page')
})

module.exports = productRouter;