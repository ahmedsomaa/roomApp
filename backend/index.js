const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


// database uri
const uri = 'mongodb://localhost:roomApp/roomApp'

var router = require('./services/router')
// server port & host
var PORT = process.env.PORT || 3001
var HOST = process.env.HOST || '127.0.0.1'

// create the app
var app = express()

// connect to the database
mongoose.connect(uri, {useNewUrlParser: true})

app.use(morgan('combined'))
app.use(bodyParser.json()) 
app.use('/v1', router)   

console.log('Listening on', HOST, PORT)
app.listen(PORT, HOST)
