import React from 'react'
import StarRating from './StarRating'
// reviews we have fetched
const Reviews = ({ reviews }) => {
  return (
    <div className="row row-cols-3 mb-2">
      {reviews.map((el) => {
        return (
          <div
            key={el.id}
            className="card text-white bg-primary mb-3 mr-4"
            style={{ maxWidth: '30%' }}
          >
            <div className="card-header d-flex justify-content-between">
              <span>{el.name}</span>
              <span>
                <StarRating rating={el.rating} />
              </span>
            </div>
            <div className="card-body">
              <p className="card-text">{el.review}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Reviews
