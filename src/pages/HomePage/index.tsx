import * as React from "react";
import * as Styles from "./index.styles";
import ApiCallData from "./ApiCallData";
import OutputProductOnHomePage from "../../components/OutputProductOnHomePage";
import { ApiReturnData } from "./types";
import { Helmet } from "react-helmet";
function HomePage() {
  const { products } = ApiCallData();
  const [filterValue, setFilterValue] = React.useState<string>("");

  const HandleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(event.target.value.trim().toLowerCase());
  };
  const filteredProducts: ApiReturnData[] = products.filter((product) => {
    const productTitle: string = product.title.trim().toLowerCase();
    if (productTitle.startsWith(filterValue)) {
      return product;
    }
  });
  return (
    <>
      <Helmet>
        <title>Hello World</title>
      </Helmet>
      <Styles.HomePageSearchProductContainer>
        <Styles.SearchProductFlexContainer>
          <Styles.SearchProductText>Search</Styles.SearchProductText>
          <Styles.SearchProductInputField
            type="text"
            placeholder="For products"
            onChange={HandleInputChange}
          />
        </Styles.SearchProductFlexContainer>
      </Styles.HomePageSearchProductContainer>
      <Styles.HomePageHeading>Welcome to Us</Styles.HomePageHeading>
      <Styles.HomePageMainContainer>
        <OutputProductOnHomePage filteredProducts={filteredProducts} />
      </Styles.HomePageMainContainer>
    </>
  );
}
export default HomePage;
