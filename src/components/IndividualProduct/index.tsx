import * as Styles from "./index.styles";
import NotFoundPage from "../../pages/NotFoundPage";
import GetIndividualProductData from "./GetIndividualProductData";
import UseCartStore from "../ShoppingCart/UseCartStore";
import ShowProductReview from "../ShowProductReview";
import checkForReview from "./checkForReview";
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
    const { title, description, imageUrl, reviews } = individualProductData;
    const isReviewOnProduct = checkForReview(reviews);

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
                <ShowProductReview />
              ) : (
                <p>There are no reviews for this product</p>
              )}
            </div>
          </Styles.IndividualProductCardBody>
          <Styles.IndividualPriceInformationContainer>
            <p>Product price</p>
            <span>Put price here</span>
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
