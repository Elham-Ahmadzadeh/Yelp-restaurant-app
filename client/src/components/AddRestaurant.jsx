import React from 'react'

const AddRestaurant = () => {
  return (
    <div className="form-outline">
      <form action="">
        <div className="input-group row">
          <div className="col">
            <input className="form-control" placeholder="name" />
          </div>
          <div className="col">
            <input className="form-control" placeholder="location" />
          </div>
          <div className="col">
            <select className="form-select">
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
        </div>
        <div className="mb-4"></div>
        <div className="text-center">
          <button className="btn btn-primary btn-lg text-center">Add</button>
        </div>
      </form>
    </div>
  )
}

export default AddRestaurant
