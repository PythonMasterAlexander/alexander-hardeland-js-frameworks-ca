import { useParams } from "react-router-dom";
import * as React from "react";
import NotFoundPage from "../../pages/NotFoundPage";

function IndividualProduct() {
  const { id } = useParams();

  interface ApiReturnData {
    id: string;
    title: string;
    description: string;
    discountedPrice: number;
    price: number;
    imageUrl: string;
  }

  // State for each product
  const [individualProductData, setIndividualProductData] = React.useState();

  // State for loading
  const [isLoading, setIsLoading] = React.useState(false);

  // State for error
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    console.log("UseEffect runs...");
    async function getApiData(url: string) {
      try {
        setIsError(false);
        setIsLoading(true);

        const response = await fetch(url);
        const json = await response.json();

        setIndividualProductData(json);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    }
    getApiData(`https://api.noroff.dev/api/v1/online-shop/${id}`);
  }, [id]);
  if (isLoading || !individualProductData || isError) {
    return (
      <>
        <NotFoundPage />
      </>
    );
  }

  return (
    <>
      <div>{id}</div>
    </>
  );
}
export default IndividualProduct;
