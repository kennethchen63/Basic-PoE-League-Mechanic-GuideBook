const express = require('express')
const colors = require('colors')
const dotev = require('dotenv').config()
const port = process.env.PORT || 5000
const connectDB = require('./Config/db')
const {errorHandler} = require('./Middleware/errorMiddleware')

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./Routes/goalRoutes'))
app.use('/api/users', require('./Routes/userRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))

