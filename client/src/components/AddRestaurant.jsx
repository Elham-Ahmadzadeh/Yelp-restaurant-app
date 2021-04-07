import React from 'react'

const AddRestaurant = () => {
  return (
    <div className="form-outline">
      <form action="">
        <div className="input-group row bg-light bg-gradient">
          <div className="col">
            <input className="form-control" placeholder="name" />
          </div>
          <div className="col">
            <input className="form-control" placeholder="location" />
          </div>
          <div className="col">
            <select className="form-control  my-1 mr-sm-2 custom-select">
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
          <button className="btn btn-primary btn-lg text-center">
            Add in Here
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddRestaurant
