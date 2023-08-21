import * as Styles from "./index.styles";
import ClickToAddProductToCart from "./ClickToAddProductToCart";

function AddProductToCart() {
  return (
    <Styles.IndividualLinkButtonContainer>
      <Styles.ButtonLink onClick={ClickToAddProductToCart}>
        Add to cart
      </Styles.ButtonLink>
    </Styles.IndividualLinkButtonContainer>
  );
}
export default AddProductToCart;
