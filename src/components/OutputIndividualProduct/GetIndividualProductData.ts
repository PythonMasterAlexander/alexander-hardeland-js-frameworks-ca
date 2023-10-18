import * as React from "react";
import { ApiReturnData } from "./types";
function GetIndividualProductData(id: string | undefined) {
  const url: string = `https://api.noroff.dev/api/v1/online-shop/${id}`;
  const [individualProductData, setIndividualProductData] =
    React.useState<ApiReturnData | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
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
  }, [id]);
  return { individualProductData, isLoading, isError };
}
export default GetIndividualProductData;
