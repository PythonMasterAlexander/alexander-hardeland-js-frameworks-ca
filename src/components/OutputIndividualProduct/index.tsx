import * as React from "react";
import * as Styles from "./index.styles";
import NotFoundPage from "../../pages/NotFoundPage";
import GetIndividualProductData from "./GetIndividualProductData";
import UseCartStore from "../OutputShoppingCart/UseCartStore";
import ShowProductReview from "../ShowProductReview";
import checkForReview from "./checkForReview";
import checkForDiscount from "./checkForDiscount";
import { PrimaryButtonContainer } from "../../styles/sharedStyles";
import { useParams } from "react-router-dom";
function OutputIndividualProduct() {
  const noDiscount = "No discount";
  const dollarSymbol = " $";
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
              <Styles.NoReviewText>Product has no review</Styles.NoReviewText>
            )}
          </div>
          <Styles.PriceInformationContainer>
            <Styles.ProductItemPriceHeading>
              Product price
            </Styles.ProductItemPriceHeading>
            <Styles.PriceInformationFlexContainer className="product-review__list-container">
              <li>
                <Styles.ProductPriceListItemText>
                  <strong>Price :</strong>{" "}
                  {isDiscount ? discountedPrice : price} $
                </Styles.ProductPriceListItemText>
              </li>
              <li>
                <Styles.ProductPriceListItemText>
                  <strong>Discount :</strong>{" "}
                  {isDiscount
                    ? discountedDifference.toFixed(2) + dollarSymbol
                    : noDiscount}
                </Styles.ProductPriceListItemText>
              </li>
            </Styles.PriceInformationFlexContainer>
          </Styles.PriceInformationContainer>
          <PrimaryButtonContainer>
            <Styles.CartButtonLink
              onClick={() => addProductToCartStore(individualProductData)}
            >
              Add to cart
            </Styles.CartButtonLink>
          </PrimaryButtonContainer>
        </Styles.ProductBodyFlexContainer>
      </Styles.IndividualProductGridContainer>
    );
  }
}
export default OutputIndividualProduct;
