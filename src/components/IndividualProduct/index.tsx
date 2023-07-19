import NotFoundPage from "../../pages/NotFoundPage";
import GetIndividualProductData from "./GetIndividualProductData";
import { useParams } from "react-router-dom";

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
    console.log(individualProductData);

    return (
      <>
        <div></div>
      </>
    );
  }
}
export default IndividualProduct;
