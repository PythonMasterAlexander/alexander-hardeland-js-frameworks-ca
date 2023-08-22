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

  const localStoreKey: string = "key";
  const jsonCartProduct = JSON.stringify(cartProduct);

  React.useEffect(() => {
    const productInLocalStorage = window.localStorage.getItem(localStoreKey);
    if (!productInLocalStorage) {
      [];
    } else {
      setCartProduct(JSON.parse(productInLocalStorage));
    }
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem(localStoreKey, jsonCartProduct);
  }, [jsonCartProduct]);

  function AddProductToCart() {
    setCartProduct(individualProductData);
  }

  // Update the cartProduct if a new product are clicked
  // Whenever I go back to the home page, click a new product and try to add that product, localStore only change the
  // the product already in there. It dose not add a new one
  console.log(cartProduct);

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
