import * as Styles from "./index.styles";
function CheckoutPageSuccess() {
  return (
    <>
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
