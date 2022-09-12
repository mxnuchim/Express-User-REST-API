const express = require('express')
const connectDB = require('./config/database')
const { errorHandler } = require('./middleware/error-handler')

const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')

const app = express()

// Connection Database
connectDB()

// set port 
const port = process.env.PORT || 5001
// parse request of content-type - application/json
app.use(express.json())
//define a root route
app.get("/",(req,res)=>{
    res.send("Welcome to the home page everyone. It's my Birthday by the way(13/09). Please go to http://localhost:5000/api-docs/ to test the api")
})
// router
app.use("/api/user", require("./routes/user-routes"))
// main listen
app.listen(port,()=>{
    console.log(`Server running at port ${port}`)
})

// Error
app.use(errorHandler)

//Add swagger
const swaggerUi = require('swagger-ui-express')
swaggerDocument = require('./swagger.json')
app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerDocument))


module.exports = app