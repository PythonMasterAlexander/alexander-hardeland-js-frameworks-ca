import * as React from "react";
import { useParams } from "react-router-dom";
export const data: string = "Hello World";

function GetIndividualProductData() {
  // State for each product
  const [individualProductData, setIndividualProductData] =
    React.useState(null);

  // State for loading
  const [isLoading, setIsLoading] = React.useState(false);

  // State for error
  const [isError, setIsError] = React.useState(false);

  // id value for each product
  //let { id }  = useParams();
  const url: string = "https://api.noroff.dev/api/v1/online-shop";

  interface ApiReturnData {
    id: string;
    title: string;
    description: string;
    discountedPrice: number;
    price: number;
    imageUrl: string;
  }

  React.useEffect(() => {
    async function getApiData() {
      try {
        const response = await fetch(url);
        const json = await response.json();

        setIndividualProductData(json);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getApiData();
  }, []);

  return { individualProductData, isLoading, isError };
}
export default GetIndividualProductData;
