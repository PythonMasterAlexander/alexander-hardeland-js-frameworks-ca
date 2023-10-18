import { Helmet } from "react-helmet";
import OutputIndividualProduct from "../../components/OutputIndividualProduct";
function ProductPage() {
  return (
    <>
      <Helmet>
        <title>Hello from single product page</title>
      </Helmet>
      <OutputIndividualProduct />
    </>
  );
}
export default ProductPage;
