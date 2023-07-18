import * as React from "react";
import { useParams } from "react-router-dom";

function GetIndividualProductData() {
  // State for each product
  const [individualProductData, setIndividualProductData] =
    React.useState(null);

  // State for loading
  const [isLoading, setIsLoading] = React.useState(false);

  // State for error
  const [isError, setIsError] = React.useState(false);

  // id value for each product
  //const { id }  = useParams();
  const url: string = `https://api.noroff.dev/api/v1/online-shop`;

  React.useEffect(() => {
    async function getApiData() {
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

    getApiData();
  }, []);
}
export default GetIndividualProductData;
