import * as Styles from "./index.styles";
import { Helmet } from "react-helmet";
function CheckoutPageSuccess() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="When the user has checkout out any product this page will be displayed."
        />
        <title>Congratulate</title>
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
