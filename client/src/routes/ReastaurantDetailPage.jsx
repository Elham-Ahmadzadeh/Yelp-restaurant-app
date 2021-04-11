// hit rafce
import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import RestaurantFinder from '../apies/RestaurantFinder'
import StarRating from '../components/StarRating'
import { RestaurantsContext } from '../context/RestaurantsContext'
import Reviews from '../components/Reviews'
import AddReview from '../components/AddReview'

const ReastaurantDetailPage = () => {
  const { id } = useParams()
  const { selectedRestaurant, setSelectedRestaurant } = useContext(
    RestaurantsContext
  )
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`)
        // we have reviews and restaurant objs inside data. We want both
        setSelectedRestaurant(response.data.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  // only when selected restaurant defined so we change default value to null
  return (
    <div>
      {selectedRestaurant && (
        <>
          <h1 className="text-center display-1">
            {selectedRestaurant.restaurant.name}
          </h1>
          <div className="text-center">
            <StarRating rating={selectedRestaurant.restaurant.average_rating} />
            <span className="text-warning ml-1">
              {selectedRestaurant.restaurant.count
                ? `(${selectedRestaurant.restaurant.count})`
                : '(0)'}
            </span>
          </div>
          <div className="mt-3">
            <Reviews reviews={selectedRestaurant.reviews} />
          </div>
          <AddReview />
        </>
      )}
    </div>
  )
}

export default ReastaurantDetailPage
