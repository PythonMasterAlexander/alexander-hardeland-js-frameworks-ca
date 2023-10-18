import * as Styles from "./index.styles";
import { ReviewData } from "./types";
function ShowProductReview(review: ReviewData) {
  return (
    <div>
      <ul className="product-review__list-container">
        <li>
          <Styles.ProductReviewStrongMarkedTextHeader>
            <strong>Username :</strong> {review.username}
          </Styles.ProductReviewStrongMarkedTextHeader>
        </li>
        <li>
          <Styles.ProductReviewText>
            <strong>Description :</strong> {review.description}
          </Styles.ProductReviewText>
        </li>
        <li>
          <Styles.ProductReviewStrongMarkedTextHeader>
            <strong>Rating :</strong> {review.rating}
          </Styles.ProductReviewStrongMarkedTextHeader>
        </li>
      </ul>
    </div>
  );
}
export default ShowProductReview;
