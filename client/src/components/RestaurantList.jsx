import React, { useEffect, useContext } from 'react'
import RestaurantFinder from '../apies/RestaurantFinder'
import { RestaurantsContext } from '../context/RestaurantsContext'
import { useHistory } from 'react-router-dom'
import StarRating from './StarRating'
const RestaurantList = (props) => {
  //consume context to see api
  const { restaurants, setRestaurants } = useContext(RestaurantsContext)
  // represent history of browser
  let history = useHistory()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get('/')
        setRestaurants(response.data.data.restaurants)
      } catch (err) {
        console.log(err)
      }
    }

    fetchData()
  }, [])

  const handleUpdate = async (e, id) => {
    e.stopPropagation()
    // pushing url
    history.push(`/restaurants/${id}/update`)
  }

  const handleSelectRestaurant = (id) => {
    history.push(`/restaurants/${id}`)
  }

  const renderRating = (el) => {
    if (!el.count) {
      return <span className="text-warning">0 reviews</span>
    }
    return (
      <>
        <StarRating rating={el.id} />
        <span className="text-warning ml-1">({el.count})</span>
      </>
    )
  }

  const handleDelete = async (e, id) => {
    //to prevent the default bubbling  DOM behaviour
    e.stopPropagation()
    try {
      await RestaurantFinder.delete(`/${id}`)
      setRestaurants(
        restaurants.filter((restaurant) => {
          return restaurant.id !== id
        })
      )
    } catch (err) {
      console.log(err)
    }
  }
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
          {/* if successfully fetched data */}
          {restaurants &&
            restaurants.map((el) => {
              return (
                <tr onClick={() => handleSelectRestaurant(el.id)} key={el.id}>
                  <td>{el.name}</td>
                  <td>{el.location}</td>
                  <td>{'$'.repeat(el.price_range)}</td>
                  <td>{renderRating(el)}</td>
                  <td>
                    <button
                      onClick={(e) => handleUpdate(e, el.id)}
                      className="btn btn-sm btn-warning"
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={(e) => handleDelete(e, el.id)}
                      className="btn btn-sm  btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default RestaurantList
