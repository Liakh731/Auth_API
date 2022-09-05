const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config()

const authRoute = require('./routes/auth')

mongoose.connect(
    process.env.DB_CONN,
    () => console.log("Conectado a DB!")
)

app.use(express.json())

app.use('/api/user', authRoute)

app.listen(3000, () => console.log("Server Online!"))