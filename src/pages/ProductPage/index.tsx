import IndividualProduct from "../../components/IndividualProduct";
import * as React from "react";
import * as Styles from "./index.styles";

function ProductPage() {
  return (
    <React.Fragment>
      <Styles.ProductPageHeading>
        Hello From Product Page
      </Styles.ProductPageHeading>
      <section>
        <IndividualProduct />
      </section>
    </React.Fragment>
  );
}
export default ProductPage;
