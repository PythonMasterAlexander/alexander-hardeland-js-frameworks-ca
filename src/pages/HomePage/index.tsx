import * as React from "react";
import * as Styles from "./index.styles";
import ApiCallData from "./ApiCallData";
import { PrimaryLinkStyle } from "../../styles/sharedStyles";
function HomePage() {
  const { products, isLoading, isError } = ApiCallData();
  const [filterValue, setFilterValue] = React.useState<string>("");
  const HandleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(event.target.value.trim().toLowerCase());
  };
  interface Product {
    id: string;
    title: string;
    description: string;
    discountedPrice: number;
    price: number;
    imageUrl: string;
  }
  const filteredProducts: Product[] = products.filter((product) => {
    const productTitle: string = product.title.trim().toLowerCase();

    if (productTitle.startsWith(filterValue)) {
      return product;
    }
  });
  function OutputProductOnHomePage() {
    return (
      <React.Fragment>
        {filteredProducts.map((product) => (
          <Styles.ProductCardContainer key={product.id}>
            <hgroup>
              <Styles.ProductImage
                src={product.imageUrl}
                alt={product.description}
              />
              <Styles.ProductCardTextHeading>
                {product.title}
              </Styles.ProductCardTextHeading>
            </hgroup>
            <Styles.ProductCardBody>
              <Styles.ProductCardText>
                {product.description}
              </Styles.ProductCardText>
            </Styles.ProductCardBody>
            <Styles.ProductLinkContainer>
              <PrimaryLinkStyle to={`/product/${product.id}`}>
                View product
              </PrimaryLinkStyle>
            </Styles.ProductLinkContainer>
          </Styles.ProductCardContainer>
        ))}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
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
        <OutputProductOnHomePage />
      </Styles.HomePageMainContainer>
    </React.Fragment>
  );
}
export default HomePage;
