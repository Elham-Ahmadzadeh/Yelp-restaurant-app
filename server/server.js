require('dotenv').config()
const express = require('express')
const db = require('./db')
const morgan = require('morgan')

const app = express()
//MIDDLEWARES
app.use(morgan("dev"))
app.use(express.json())

// GET ALL RESTAURANTS
app.get('/api/v1/restaurants', async (req, res) => {
  try{
    const result = await db.query('SELECT * FROM restaurants;')
    console.log(result)
  res.status(200).json({
    status: "success",
    result: result.rows.length,
    data: {
    restaurant: result.rows
    }
  })
  }
  catch (err){
    console.log(err)
  }

})
// GET A RESTAURANT
app.get('/api/v1/restaurants/:id', (req, res) => {
 console.log(req)
  })

  // POST RESTAURANTS
  app.post('/api/v1/restaurants/', (req, res) => {
    console.log(req.body)
    res.status(200).json({
      status: "success",
      data: {
      restaurant: [ "McDonald", "Wendys", ]
      }
      })
     })

// UPDATE A RESTAURANT
app.put('/api/v1/restaurants/:id', (req, res) => {
  console.log(req.params.id)
  console.log(req.body)
  res.status(200).json({
    status: "success",
    data: {
    restaurant: [ "McDonald", "Wendys", ]
    }
    })
   })
// DELETE A RESTAURANT
app.delete('/api/v1/restaurants/:id', (req, res) => {
  console.log(req.params.id)
  console.log(req.body)
  res.status(204).json({
    status: "success",
    data: {
    restaurant: [ "McDonald", "Wendys", ]
    }
    })
   })

const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})
