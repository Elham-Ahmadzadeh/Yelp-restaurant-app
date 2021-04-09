import React, { useState, useContext, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import RestaurantFinder from '../apies/RestaurantFinder'
import { RestaurantsContext } from '../context/RestaurantsContext'
const UpdateRestaurant = (props) => {
  // to have access to ID
  const { id } = useParams()
  let history = useHistory()
  const { restaurants } = useContext(RestaurantsContext)
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [priceRange, setPriceRange] = useState('')

  useEffect(() => {
    // we must not add id as an arg to fetchData() id has taken from params
    const fetchData = async () => {
      const response = await RestaurantFinder.get(`/${id}`)
      setName(response.data.data.restaurant.name)
      setLocation(response.data.data.restaurant.location)
      setPriceRange(response.data.data.restaurant.price_range)
    }
    fetchData()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await RestaurantFinder.put(`/${id}`, {
        // the same as we wrote in body Insomnia
        name,
        location,
        price_range: priceRange,
      })

      history.push('/')
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <form action="">
        <div className="form-group">
          <label htmlFor="Name">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Location">Location</label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Price_Range">Price_Range</label>
          <input
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            min="1"
            max="5"
            id="price_range"
            className="form-control"
            type="number"
          />
        </div>
        <button
          onClick={handleSubmit}
          type="submit" /* must be submit */
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default UpdateRestaurant
