const express = require("express")
const app = express()

const userRouter = require('./user')
const contactRouter = require('./contact')
const homeRouter = require('./home')
const productRouter = require('./product')
const serviceRouter = require('./service')
const aboutRouter = require('./about')

app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))

app.get('/',(request,response) => {
    response.send("Hello! have a nice day..!!")
})




app.use('/user',userRouter)
app.use('/contact',contactRouter)
app.use('/home',homeRouter)
app.use('/product',productRouter)
app.use('/service',serviceRouter)
app.use('/about',aboutRouter)
app.listen(3000)