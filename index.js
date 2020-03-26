const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const routerNavigation = require('./src')
const morgan = require('morgan')

app.listen(3001, "127.0.0.1", () => {
    console.log("listening on 127.0.0.1:3001");
    
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true }))
app.use(morgan("dev"))
app.use('/', routerNavigation)