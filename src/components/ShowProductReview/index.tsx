import * as React from "react";
interface reviewData {
  username: string;
  rating: number;
  description: string;
}
function ShowProductReview(review: reviewData) {
  return (
    <React.Fragment>
      <div>
        <ul>
          <li>
            <h4>Username: {review.username}</h4>
            <span>Rating: {review.rating}</span>
            <p>Description: {review.description}</p>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}
export default ShowProductReview;
