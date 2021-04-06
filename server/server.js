require('dotenv').config()
const express = require('express')
const morgan = require('morgan')

const app = express()
//MIDDLEWARES
app.use(morgan("dev"))
app.use(express.json())

// GET ALL RESTAURANTS
app.get('/api/v1/restaurants', (req, res) => {
res.status(200).json({
  status: "success",
  data: {
  restaurant: [ "McDonald", "Wendys", ]
  }
  })
})
// GET A RESTAURANT
app.get('/api/v1/restaurants/:id', (req, res) => {
 console.log(req)
  })
  app.post('/api/v1/restaurants/', (req, res) => {
    console.log(req)
     })

const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})
