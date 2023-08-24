import ShoppingCart from "../../components/ShoppingCart";
import * as Styles from "./index.styles";

import UseCartStore from "../../components/ShoppingCart/UseCartStore";

function CartPage() {
  const clearAllProductsFromCartStore = UseCartStore(
    (state) => state.clearAllProductsFromCartStore
  );

  return (
    <>
      <h1>Hello From the Cart page</h1>
      <ShoppingCart />
      <Styles.IndividualLinkButtonContainer>
        <Styles.ButtonLink to={"/checkout"}>Checkout</Styles.ButtonLink>
      </Styles.IndividualLinkButtonContainer>
      <Styles.IndividualLinkButtonContainer>
        <Styles.ClearCartButton onClick={() => clearAllProductsFromCartStore()}>
          Clear shopping cart
        </Styles.ClearCartButton>
      </Styles.IndividualLinkButtonContainer>
    </>
  );
}
export default CartPage;
