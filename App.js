const express = require("express")
const app = express()

app.get('/',(request,response) => {
    response.send("Hello! have a nice day..!!")
})

app.listen(3000)