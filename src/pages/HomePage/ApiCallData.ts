import * as React from "react";
import { ApiReturnData } from "./types";
function ApiCallData() {
  const url: string = "https://api.noroff.dev/api/v1/online-shop";
  const [products, setProducts] = React.useState<Array<ApiReturnData>>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isError, setIsError] = React.useState<boolean>(false);
  React.useEffect(() => {
    async function getUrlData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProducts(json);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    }
    getUrlData();
  }, []);
  return { products, isLoading, isError };
}
export default ApiCallData;
