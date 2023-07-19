import { useParams } from "react-router-dom";

import NotFoundPage from "../../pages/NotFoundPage";
import GetIndividualProductData from "./GetIndividualProductData";

function IndividualProduct() {
  const { id } = useParams();
  const { isLoading, individualProductData, isError } =
    GetIndividualProductData(id);

  if (isLoading || !individualProductData || isError) {
    return (
      <>
        <NotFoundPage />
      </>
    );
  } else {
    const productTitle = individualProductData.title;
    const productDescription = individualProductData.description;
    const productImageUrl = individualProductData.imageUrl;
    // TODO Call a function that fetch the reviews
    return (
      <>
        <div>
          <img src={productImageUrl} alt={productDescription} />
          <div>
            <h3>{productTitle}</h3>
            <p>{productDescription}</p>
            <span>Put price here</span>
          </div>
          <div>
            <h4>Product Review</h4>
            <p>Put product review here</p>
            <button>Add to cart</button>
          </div>
        </div>
      </>
    );
  }
}
export default IndividualProduct;
