import { useParams } from "react-router-dom";
import * as React from "react";
import NotFoundPage from "../../pages/NotFoundPage";

function IndividualProduct() {
  const { id } = useParams();

  interface ApiReturnData {
    id: string;
    title: string;
    imageUrl: string;
    description: string;
    discountedPrice: number;
    price: number;
    reviews: Array<object>;
  }

  // State for each product
  const [individualProductData, setIndividualProductData] =
    React.useState<ApiReturnData | null>(null);

  // State for loading
  const [isLoading, setIsLoading] = React.useState(false);

  // State for error
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
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

  // Here you check for possibly of individualProductData being null
  if (isLoading || !individualProductData || isError) {
    return (
      <>
        <NotFoundPage />
      </>
    );
  }
  console.log(individualProductData.reviews);

  return (
    <>
      <div>{id}</div>
    </>
  );
}
export default IndividualProduct;
