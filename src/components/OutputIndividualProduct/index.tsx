import * as React from "react";
import * as Styles from "./index.styles";
import NotFoundPage from "../../pages/NotFoundPage";
import GetIndividualProductData from "./GetIndividualProductData";
import UseCartStore from "../ShoppingCart/UseCartStore";
import ShowProductReview from "../ShowProductReview";
import checkForReview from "./checkForReview";
import checkForDiscount from "./checkForDiscount";
import { noDiscount } from "./variables";
import { useParams } from "react-router-dom";

function OutputIndividualProduct() {
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
      <React.Fragment>
        <Styles.IndividualProductGridContainer>
          <Styles.ImageContainer>
            <Styles.ProductImage src={imageUrl} alt={description} />
          </Styles.ImageContainer>
          <hgroup>
            <Styles.ProductItemHeading>{title}</Styles.ProductItemHeading>
            <Styles.ProductItemDescription>
              {description}
            </Styles.ProductItemDescription>
          </hgroup>
          <Styles.ProductBodyFlexContainer>
            <div>
              <Styles.ProductItemReviewHeading>
                Product Review
              </Styles.ProductItemReviewHeading>
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
            <Styles.PriceInformationContainer>
              <Styles.ProductItemPriceHeading>
                Product price
              </Styles.ProductItemPriceHeading>
              <div>
                <span>
                  <strong>Price :</strong>{" "}
                  {isDiscount ? discountedPrice : price} $
                </span>
              </div>
              <div>
                <p>
                  <strong>Discount :</strong>
                  {isDiscount ? discountedDifference : noDiscount} $
                </p>
              </div>
            </Styles.PriceInformationContainer>
            <Styles.CartLinkButtonContainer>
              <Styles.CartButtonLink
                onClick={() => addProductToCartStore(individualProductData)}
              >
                Add to cart
              </Styles.CartButtonLink>
            </Styles.CartLinkButtonContainer>
          </Styles.ProductBodyFlexContainer>
        </Styles.IndividualProductGridContainer>
      </React.Fragment>
    );
  }
}
export default OutputIndividualProduct;
