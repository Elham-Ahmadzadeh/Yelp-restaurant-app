import React from 'react'

const RestaurantList = () => {
  return (
    <div className="list-group text-center center table-responsive-sm">
      <div className="mb-5"></div>
      <table className="table table-hover table-dark">
        <thead>
          <tr className="bg-primary">
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Rating</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mcdonal</td>
            <td>New york</td>
            <td>$$</td>
            <td>Rating</td>
            <td>
              <button className="btn btn-sm btn-warning">Update</button>
            </td>
            <td>
              <button className="btn btn-sm  btn-danger">Delete</button>
            </td>
          </tr>
          <tr>
            <td>Mcdonal</td>
            <td>New york</td>
            <td>$$</td>
            <td>Rating</td>
            <td>
              <button className="btn btn-sm  btn-warning">Update</button>
            </td>
            <td>
              <button className="btn btn-sm  btn-danger">Delete</button>
            </td>
          </tr>
          <tr>
            <td>Mcdonal</td>
            <td>New york</td>
            <td>$$</td>
            <td>Rating</td>
            <td>
              <button className="btn btn-sm  btn-warning">Update</button>
            </td>
            <td>
              <button className="btn btn-sm btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default RestaurantList
