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
            <span>
              <strong>Username :</strong> {review.username}
            </span>
            <p>
              <strong>Description :</strong> {review.description}
            </p>
            <span>
              <strong>Rating :</strong> {review.rating}
            </span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}
export default ShowProductReview;
