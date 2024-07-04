const express = require('express')
const { connectMongoDB } = require('./connection')
const { checkAPIKey, logRequestResponse } = require('./middlewares')
const userRouter = require('./routes/users')

const app = express()
const PORT = 8000

// Connect MongoDB
connectMongoDB('mongodb://127.0.0.1:27017/structured_user')            
    .then(() => console.log('MongoDB connected!'))
    .catch((err) => console.log(`Something went wrong: ${err}`))

// Middleware 
app.use(express.urlencoded({ extended: false }))
app.use(checkAPIKey()) // verify api 
app.use(logRequestResponse('./log.txt')) // log file

app.use('/users', userRouter)

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))