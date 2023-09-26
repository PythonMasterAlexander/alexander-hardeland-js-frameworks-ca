import IndividualProduct from "../../components/IndividualProduct";
import * as React from "react";
import * as Styles from "./index.styles";

function ProductPage() {
  return (
    <React.Fragment>
      <Styles.HeadingOne>Hello From Product Page</Styles.HeadingOne>
      <section>
        <IndividualProduct />
      </section>
    </React.Fragment>
  );
}
export default ProductPage;
