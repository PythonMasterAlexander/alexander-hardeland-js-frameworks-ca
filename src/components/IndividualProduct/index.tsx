import * as Styles from "./index.styles";
import NotFoundPage from "../../pages/NotFoundPage";
import GetIndividualProductData from "./GetIndividualProductData";
import UseCartStore from "../ShoppingCart/UseCartStore";
import ShowProductReview from "../ShowProductReview";
import checkForReview from "./checkForReview";
import checkForDiscount from "./checkForDiscount";
import { noDiscount } from "./variables";
import { useParams } from "react-router-dom";

function IndividualProduct() {
  const { id } = useParams();
  const { isLoading, individualProductData, isError } =
    GetIndividualProductData(id);

  const addProductToCartStore = UseCartStore(
    (state) => state.addProductToCartStore
  );

  if (isLoading || !individualProductData || isError) {
    return (
      <>
        <NotFoundPage />
      </>
    );
  } else {
    const { title, description, imageUrl, reviews, price, discountedPrice } =
      individualProductData;

    const isDiscount: boolean = checkForDiscount(price, discountedPrice);
    const discountedDifference: number = price - discountedPrice;
    const isReviewOnProduct = checkForReview(reviews);

    let reviewUserName: string = "";
    let reviewRating: number = 0;
    let reviewDescription: string = "";
    for (let i = 0; i < reviews.length; i++) {
      reviewUserName = reviews[i].username;
      reviewRating = reviews[i].rating;
      reviewDescription = reviews[i].description;
    }

    return (
      <>
        <Styles.IndividualProductCardContainer>
          <Styles.Img src={imageUrl} alt={description} />
          <Styles.IndividualProductCardBody>
            <h3>{title}</h3>
            <p>{description}</p>
            <div>
              <h4>Product Review</h4>
              {isReviewOnProduct ? (
                <ShowProductReview
                  username={reviewUserName}
                  rating={reviewRating}
                  description={reviewDescription}
                />
              ) : (
                <p>There are no reviews for this product</p>
              )}
            </div>
          </Styles.IndividualProductCardBody>
          <Styles.IndividualPriceInformationContainer>
            <h5>Product price</h5>
            <div>
              <h6>Price</h6>
              <p>{isDiscount ? discountedPrice : price}</p>
            </div>
            <div>
              <h6>Your discount on this purchase</h6>
              <p>{isDiscount ? discountedDifference : noDiscount}</p>
            </div>
          </Styles.IndividualPriceInformationContainer>
          <Styles.IndividualLinkButtonContainer>
            <Styles.ButtonLink
              onClick={() => addProductToCartStore(individualProductData)}
            >
              Add to cart
            </Styles.ButtonLink>
          </Styles.IndividualLinkButtonContainer>
        </Styles.IndividualProductCardContainer>
      </>
    );
  }
}
export default IndividualProduct;
