import * as Styles from "./index.styles";
import { handleClickOnButton } from "./AddToCart";
import GetIndividualProductData from "../IndividualProduct";

function AddProductToCart() {
  GetIndividualProductData();
  return (
    <Styles.IndividualLinkButtonContainer>
      <Styles.ButtonLink onClick={handleClickOnButton}>
        Add to cart
      </Styles.ButtonLink>
    </Styles.IndividualLinkButtonContainer>
  );
}
export default AddProductToCart;
