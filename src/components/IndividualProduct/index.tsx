import * as Styles from "./index.styles";
import NotFoundPage from "../../pages/NotFoundPage";
import GetIndividualProductData from "./GetIndividualProductData";
import { useParams } from "react-router-dom";
import UseCartStore from "../ShoppingCart/UseCartStore";

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
    // TODO Call a function that fetch the reviews
    const { title, description, imageUrl, reviews } = individualProductData;

    return (
      <>
        <Styles.IndividualProductCardContainer>
          <Styles.Img src={imageUrl} alt={description} />
          <Styles.IndividualProductCardBody>
            <h3>{title}</h3>
            <p>{description}</p>
            <h4>Product Review</h4>
            <p>Put product review here</p>
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
