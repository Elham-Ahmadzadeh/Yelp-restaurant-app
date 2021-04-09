import React, { useState, createContext } from 'react'

export const RestaurantsContext = createContext()
// The provider  provides info to other compo
export const RestaurantsContextProvider = (props) => {
  const [restaurants, setRestaurants] = useState([])
const [selectedRestaurant, setSelectedRestaurant] = useState(null)
  const addRestaurantToTable = (restaurant) => {
    setRestaurants([...restaurants, restaurant])

  }
  return (
    // we wrap the states
    <RestaurantsContext.Provider
      value={{
        restaurants,
        setRestaurants,
        addRestaurantToTable,
        selectedRestaurant,
        setSelectedRestaurant
      }}
    >
      {/* render all child compo */}
      {props.children}
    </RestaurantsContext.Provider>
  )
}
