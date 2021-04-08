import React, { useContext, useState } from 'react'
import RestaurantFinder from '../apies/RestaurantFinder'
import { RestaurantsContext } from '../context/RestaurantsContext'

const AddRestaurant = () => {
  const { addRestaurantToTable } = useContext(RestaurantsContext)
  //control input
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [priceRange, setPriceRange] = useState('Price Range')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await RestaurantFinder.post('/', {
        // the same as we wrote in body Insomnia
        name,
        location,
        price_range: priceRange,
      })
      addRestaurantToTable(response.data.data.restaurant)
    } catch (err) {}
  }

  return (
    <div className="form-outline">
      <form action="">
        <div
          className="input-group
        row bg-light bg-gradient"
        >
          <div className="col">
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
              className="form-control"
              placeholder="name"
            />
          </div>
          <div className="col">
            <input
              value={location}
              onChange={(e) => {
                setLocation(e.target.value)
              }}
              className="form-control"
              placeholder="location"
            />
          </div>
          <div className="col">
            <select
              value={priceRange}
              onChange={(e) => {
                setPriceRange(e.target.value)
              }}
              className="form-control  my-1 mr-sm-2 custom-select"
            >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
        </div>
        <div className="mb-5"></div>
        <div className="text-center">
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-primary
            btn-lg text-center"
          >
            Add in Here
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddRestaurant
