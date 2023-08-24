import * as Styles from "./index.styles";
import * as React from "react";
import NotFoundPage from "../../pages/NotFoundPage";
import GetIndividualProductData from "./GetIndividualProductData";
import { useParams } from "react-router-dom";
import UseCartStore from "../ShoppingCart/UseCartStore";

function IndividualProduct() {
  const { id } = useParams();
  //This is how I will try and add the object in individualProductData to the cart when button is clicked

  const { isLoading, individualProductData, isError } =
    GetIndividualProductData(id);

  function AddProductToCart() {
    console.log("hello World");
  }

  if (isLoading || !individualProductData || isError) {
    return (
      <>
        <NotFoundPage />
      </>
    );
  } else {
    const { title, description, imageUrl } = individualProductData;
    // TODO Call a function that fetch the reviews
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
            <Styles.ButtonLink onClick={AddProductToCart}>
              Add to cart
            </Styles.ButtonLink>
          </Styles.IndividualLinkButtonContainer>
        </Styles.IndividualProductCardContainer>
      </>
    );
  }
}
export default IndividualProduct;
