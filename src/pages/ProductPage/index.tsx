import OutputIndividualProduct from "../../components/OutputIndividualProduct";
import * as React from "react";
import * as Styles from "./index.styles";

function ProductPage() {
  return (
    <React.Fragment>
      <Styles.ProductPageHeading>
        Hello From Product Page
      </Styles.ProductPageHeading>
      <section>
        <OutputIndividualProduct />
      </section>
    </React.Fragment>
  );
}
export default ProductPage;
