import { useParams } from "react-router-dom";
import * as React from "react";

function IndividualProduct() {
  const { id } = useParams();

  // State for each product
  const [individualProductData, setIndividualProductData] =
    React.useState(null);

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
    getApiData(
      `https://api.noroff.dev/api/v1/online-shop/f99cafd2-bd40-4694-8b33-a6052f36b435`
    );
  }, [id]);
  console.log(individualProductData);

  return (
    <>
      <div>{id}</div>
    </>
  );
}
export default IndividualProduct;
