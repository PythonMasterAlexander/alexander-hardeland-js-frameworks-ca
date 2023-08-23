import * as Styles from "./index.styles";
import * as React from "react";
import NotFoundPage from "../../pages/NotFoundPage";
import GetIndividualProductData from "./GetIndividualProductData";
import { useParams } from "react-router-dom";

function IndividualProduct() {
  const { id } = useParams();
  const { isLoading, individualProductData, isError } =
    GetIndividualProductData(id);

  const [cartProduct, setCartProduct] = React.useState<object | null>([]);

  //I have the products as an object in one value -> individualProductData
  //This value are a object and TS types are object | null
  console.log("individualProductData: ", individualProductData);

  function AddProductToCart() {
    setCartProduct(individualProductData);
  }

  //When I click the button -> the cartProduct state gets the value of the product which are an array of the product object
  console.log("cartProduct value: ", cartProduct);

  if (isLoading || !individualProductData || isError) {
    return (
      <>
        <NotFoundPage />
      </>
    );
  } else {
    const productTitle = individualProductData.title;
    const productDescription = individualProductData.description;
    const productImageUrl = individualProductData.imageUrl;
    // TODO Call a function that fetch the reviews
    return (
      <>
        <Styles.IndividualProductCardContainer>
          <Styles.Img src={productImageUrl} alt={productDescription} />
          <Styles.IndividualProductCardBody>
            <h3>{productTitle}</h3>
            <p>{productDescription}</p>
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
