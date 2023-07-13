import * as React from "react";

function ApiCallData() {
  const url: string = "https://api.noroff.dev/api/v1/online-shop";
  interface ApiReturnData {
    id: string;
    title: string;
    description: string;
    discountedPrice: number;
    price: number;
    imageUrl: string;
  }

  // Api call state
  const [products, setProducts] = React.useState<Array<ApiReturnData>>([]);

  // When loading API, use loading state
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  // If an error when loading API, use error state
  const [isError, setIsError] = React.useState<boolean>(false);

  React.useEffect(() => {
    async function getUrlData() {
      try {
        // If an error happens before, reset the error state
        setIsError(false);

        // When waiting for products to load, set loading state on
        setIsLoading(true);

        // API call
        const response = await fetch(url);
        const json = await response.json();

        // The result from the API call becomes the  products state
        setProducts(json);

        // When the API result are a success, clear the loading state
        setIsLoading(false);
      } catch (error) {
        // If there is an error, loading state is stopped
        setIsLoading(false);

        // If an error, the error state is activated
        setIsError(true);
      }
    }
    // Call the function getUrlData
    getUrlData();
  }, []);

  return { products, isLoading, isError };
}
export default ApiCallData;
