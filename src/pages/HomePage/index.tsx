import * as React from "react";
import * as Styles from "./index.styles";
import ApiCallData from "./ApiCallData";

function HomePage() {
  const { products, isLoading, isError } = ApiCallData();

  // Filter value will be used as the state to determen the value of the input field
  const [filterValue, setFilterValue] = React.useState<string>("");

  const HandleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // When ever the user write someting in the input field, the value will be set in the filter state
    setFilterValue(event.target.value.trim().toLowerCase());
  };

  // Create a interface for the Products return array when its been filtered out
  interface Product {
    id: string;
    title: string;
    description: string;
    discountedPrice: number;
    price: number;
    imageUrl: string;
  }
  // Filter the products array
  const filteredProducts: Product[] = products.filter((product) => {
    const productTitle: string = product.title.trim().toLowerCase();

    if (productTitle.startsWith(filterValue)) {
      return product;
    }
  });

  function FilteredProductCard() {
    return (
      <>
        {filteredProducts.map((product) => (
          <Styles.ProductCardContainer key={product.id}>
            <Styles.Img
              className="product-image"
              src={product.imageUrl}
              alt={product.description}
            />
            <Styles.ProductCardBody>
              <Styles.HeadingTwo className="card-title">
                {product.title}
              </Styles.HeadingTwo>
              <Styles.CardText className="card-info">
                {product.description}
              </Styles.CardText>
            </Styles.ProductCardBody>
            <Styles.LinkButtonContainer>
              <Styles.StyledLink to={`/product/${product.id}`}>
                View product
              </Styles.StyledLink>
            </Styles.LinkButtonContainer>
          </Styles.ProductCardContainer>
        ))}
      </>
    );
  }

  return (
    <React.Fragment>
      <section>
        <Styles.Input onChange={HandleInputChange} />
        <button>Search</button>
      </section>
      <Styles.HeadingOne>Hello from the home page</Styles.HeadingOne>
      <Styles.HomePageMainContainer>
        <FilteredProductCard />
      </Styles.HomePageMainContainer>
    </React.Fragment>
  );
}
export default HomePage;
