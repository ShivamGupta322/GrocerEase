import React, { useEffect, useState } from 'react';
import './DescriptionBox.css';

const DescriptionBox = ({ productId }) => {
    const [reviews, setReviews] = useState([]);
    const [userName, setUserName] = useState('');
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState('');

    useEffect(() => {
        fetch(`http://localhost:4000/reviews/${productId}`)
            .then(response => response.json())
            .then(data => setReviews(data));
    }, [productId]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newReview = {
            productId,
            userName,
            rating,
            comment,
        };

        fetch('http://localhost:4000/addreview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newReview),
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    setReviews([...reviews, newReview]);
                    setUserName('');
                    setRating(5);
                    setComment('');
                }
            });
    };

    return (
      <div className="descriptionBox p-5 bg-white shadow-md rounded-md">
      <div className="descriptionbox-navigator mt-7 font-bold flex justify-between">
          <div className="descriptionbox-nav-box text-lg text-gray-700 border-2 border-black px-4 py-2 bg-gray-100 rounded-md fade">
              Reviews({reviews.length})
          </div>
      </div>
      <div className="descriptionbox-description mt-5">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">User Reviews</h3>
          {reviews.map((review, index) => (
              <div key={index} className="review mb-4">
                  <strong className="text-lg text-gray-900"><span className='font-medium mr-2'>{index+1}&#41;</span>{review.userName}</strong>
                  <p className="text-sm text-gray-700 ">Rating: <span className='text-green-700 font-bold'>{review.rating}/5</span></p>
                  <p className="text-sm text-gray-600"><span className='text-red-500 font-semibold'>{review.comment}</span></p>
              </div>
          ))}
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Leave a Review</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
              <input
                  type="text"
                  placeholder="Your Name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
              />
              <select
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
              >
                  {[...Array(5)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                          {i + 1}
                      </option>
                  ))}
              </select>
              <textarea
                  placeholder="Your Review"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
              ></textarea>
              <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
              >
                  Submit
              </button>
          </form>
      </div>
  </div>
  
    );
};

export default DescriptionBox;
