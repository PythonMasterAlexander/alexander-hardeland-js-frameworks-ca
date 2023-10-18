import OutputIndividualProduct from "../../components/OutputIndividualProduct";
import { Helmet } from "react-helmet";
function ProductPage() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="This is where each single product are displayed when the user clicks each product"
        />
        <title>Show Single Product</title>
      </Helmet>
      <OutputIndividualProduct />
    </>
  );
}
export default ProductPage;
