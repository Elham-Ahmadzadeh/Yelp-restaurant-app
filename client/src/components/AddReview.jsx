import React, { useState } from 'react'
import { useHistory, useLocation, useParams } from 'react-router-dom'
import RestaurantFinder from '../apies/RestaurantFinder'

const AddReview = () => {
  // to have access to ID
  const { id } = useParams()
  const history = useHistory()
  const location = useLocation()
  const [name, setName] = useState('')
  // we put rating to see rating in select
  const [rating, setRating] = useState('Rating')
  const [reviewText, setReviewText] = useState('')

  const handleSubmitReview = async (e) => {
    e.preventDefault()
    try {
      const addReview = await RestaurantFinder.post(`/${id}/addReview`, {
        name,
        rating,
        review: reviewText,
      })
      console.log(addReview)
      history.push('/')
      history.push(location.pathname)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="mb-2">
      <form action="">
        <div className="form-row">
          <div className="form-group col-8">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              placeholder="Name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group col-4">
            <label htmlFor="rating">Rating</label>
            <select
              id="rating"
              className="custom-select"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option disabled>Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="Review">Review</label>
          <textarea
            id="Review"
            className="form-control"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          onClick={handleSubmitReview}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddReview
