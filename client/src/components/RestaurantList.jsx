import React from 'react'

const RestaurantList = () => {
  return (
    <div className="list-group">
      <table className=".table .table-hover table-dark">
        <thead className="bg-priamry">
          <th scope="col">Restaurant</th>
          <th scope="col">Location</th>
          <th scope="col">Price Range</th>
          <th scope="col">Rating</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </thead>
      </table>
    </div>
  )
}

export default RestaurantList
