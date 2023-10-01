import * as React from "react";
function GetIndividualProductData(id: string | undefined) {
  const url: string = `https://api.noroff.dev/api/v1/online-shop/${id}`;
  interface ApiReturnData {
    id: string;
    title: string;
    imageUrl: string;
    description: string;
    discountedPrice: number;
    price: number;
    reviews: Array<{
      id: string;
      username: string;
      rating: number;
      description: string;
    }>;
  }

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
