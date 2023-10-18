import * as React from "react";
import * as Styles from "./index.styles";
import { Helmet } from "react-helmet";
function CheckoutPageSuccess() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Hello World</title>
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
    </React.Fragment>
  );
}
export default CheckoutPageSuccess;
