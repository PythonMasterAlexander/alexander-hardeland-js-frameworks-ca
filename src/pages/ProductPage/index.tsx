import IndividualProduct from "../../components/IndividualProduct";
import * as Styles from "./index.styles";

function ProductPage() {
  return (
    <>
      <Styles.HeadingOne>Hello From Product Page</Styles.HeadingOne>
      <section>
        <IndividualProduct />
      </section>
    </>
  );
}
export default ProductPage;
