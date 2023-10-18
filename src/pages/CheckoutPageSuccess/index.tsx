import * as Styles from "./index.styles";
import { Helmet } from "react-helmet";
function CheckoutPageSuccess() {
  return (
    <>
      <Helmet>
        <title>Hello from the Checkout success page</title>
      </Helmet>
      <Styles.CheckoutSuccessPageHeader>
        The order was a success
      </Styles.CheckoutSuccessPageHeader>
      <div>
        <i className="fa-solid fa-arrow-left fa-xl"></i>
        <Styles.GoBackToStoreButton to="/">
          Go back to the store
        </Styles.GoBackToStoreButton>
      </div>
    </>
  );
}
export default CheckoutPageSuccess;
