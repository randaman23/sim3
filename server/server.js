require('dotenv').config()
const express = require('express'),
        // session = require('express-session')
        axios = require('axios'),
        massive = require('massive')
        ctrl = require('./controller')

const app = express()

const {
    SERVER_PORT,
    CONNECTION_STRING
} = process.env

massive(CONNECTION_STRING).then(db => app.set('db', db))

app.listen(SERVER_PORT, () => {
    console.log(`Magic is happenin' on port ${SERVER_PORT}`)
})

app.post('/api/register', ctrl.registerUser)