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
            <h5>Username: {review.username}</h5>
            <p>Rating: {review.rating}</p>
            <p>Description: {review.description}</p>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}
export default ShowProductReview;
