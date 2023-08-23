import ShoppingCart from "../../components/ShoppingCart";
import UseCartStore from "../../components/ShoppingCart/UseCartStore";
import * as Styles from "./index.styles";

function CartPage() {
  const clearProductCart = UseCartStore((state) => state.clearProductCart);

  return (
    <>
      <h1>Hello From the Cart page</h1>
      <ShoppingCart />
      <Styles.IndividualLinkButtonContainer>
        <Styles.ButtonLink to={"/checkout"}>Checkout</Styles.ButtonLink>
      </Styles.IndividualLinkButtonContainer>
      <Styles.IndividualLinkButtonContainer>
        <Styles.ClearCartButton onClick={clearProductCart}>
          Clear shopping cart
        </Styles.ClearCartButton>
      </Styles.IndividualLinkButtonContainer>
    </>
  );
}
export default CartPage;
