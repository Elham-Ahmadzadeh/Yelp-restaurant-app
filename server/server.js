require('dotenv').config()
const express = require('express')
const cors = require('cors')
const db = require('./db')
const morgan = require('morgan')

const app = express()
//MIDDLEWARES
app.use(morgan('dev'))

app.use(cors())
app.use(express.json())

// RETRIEVE ALL RESTAURANTS
app.get('/api/v1/restaurants', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM restaurants;')
  //  console.log(result.rows[0])
    res.status(200).json({
      status: 'success',
      result: result.rows.length,
      data: {
        restaurant: result.rows,
      },
    })
  } catch (err) {
    console.log(err)
  }
})
// RETRIEVE A RESTAURANT
app.get('/api/v1/restaurants/:id', async (req, res) => {
  console.log(req.params.id)
  try {
    const restaurant = await db.query('SELECT * FROM restaurants WHERE id = $1', [
      req.params.id,
    ])

    const reviews = await db.query('SELECT * FROM reviews WHERE restaurant_id = $1', [
      req.params.id,
    ])
    res.status(200).json({
      status: 'success',
      data: {
        restaurant: restaurant.rows[0],
        reviews: reviews.rows
      },
    })
  } catch (err) {
    console.log(err)
  }
})

// CREATE A RESTAURANT
app.post('/api/v1/restaurants', async (req, res) => {
  console.log(req.body)
  try {
    const result = await db.query(
      'INSERT INTO restaurants (name, location, price_range) values ($1, $2, $3) returning *',
      [req.body.name, req.body.location, req.body.price_range]
    )
    console.log(result)
    res.status(201).json({
      status: 'success',
      data: {
        restaurant: result.rows[0],
      },
    })
  } catch (err) {
    console.log(err)
  }
})

// UPDATE A RESTAURANT (change the values of a restaurant which is already created)
app.put('/api/v1/restaurants/:id', async (req, res) => {
  // console.log(req.params.id)
  //console.log(req.body)
  try {
    const result = await db.query(
      'UPDATE restaurants SET name = $1 ,location = $2 ,price_range = $3 WHERE id = $4 RETURNING *',
      [req.body.name, req.body.location, req.body.price_range, req.params.id]
    )
    console.log(result)
    res.status(200).json({
      status: "success",
      data: {
        restaurant: result.rows[0],
      },
    })
  } catch (err) {
    console.log(err)
  }
})

// DELETE A RESTAURANT
app.delete('/api/v1/restaurants/:id', async (req, res) => {
  try {
   console.log(req.params.id)

    const result = db.query('DELETE FROM restaurants WHERE id = $1;',[
      req.params.id
    ])
    console.log(result)
    res.status(204).json({
      status: 'success'
    })
  }
  catch (err) {
    console.log(err)
  }

})

const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})
