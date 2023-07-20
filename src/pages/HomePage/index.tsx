import * as React from "react";
import * as Styles from "./index.styles";
import ProductCard from "../../components/ProductCard";
import ApiCallData from "./ApiCallData";

function HomePage() {
  const { products, isLoading, isError } = ApiCallData();

  // Filter value will be used as the state to determen the value of the input field
  const [filterValue, setFilterValue] = React.useState<string | undefined>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // When ever the user write someting in the input field, the value will be set in the filter state
    setFilterValue(event.target.value);
  };
  // Test to see if it works
  console.log(filterValue);

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
    console.log(product);
  });
  // Test to see if it works
  console.log(filteredProducts);

  return (
    <React.Fragment>
      <section>
        <Styles.Input onChange={handleInputChange} />
        <button>Search</button>
      </section>
      <Styles.HeadingOne>Hello from the home page</Styles.HeadingOne>
      <Styles.HomePageMainContainer>
        <ProductCard />
      </Styles.HomePageMainContainer>
    </React.Fragment>
  );
}
export default HomePage;
