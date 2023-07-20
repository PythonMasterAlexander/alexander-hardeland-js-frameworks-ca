import * as React from "react";
import * as Styles from "./index.styles";
import { Link } from "react-router-dom";
//import ProductCard from "../../components/ProductCard";
import ApiCallData from "./ApiCallData";
//import FilteredProducts from "./FilteredProducts";
import HandleInputChange from "./HandleInputChange";

function HomePage() {
  const { products, isLoading, isError } = ApiCallData();

  // Filter value will be used as the state to determen the value of the input field
  const [filterValue, setFilterValue] = React.useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
  // Test to see if it works
  console.log(filteredProducts);
  function FilteredProductCard() {
    return (
      <>
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <img
              className="product-image"
              src={product.imageUrl}
              alt={product.description}
            />
            <div>
              <h3 className="card-title">{product.title}</h3>
              <p className="card-info">{product.description}</p>
              <Link to={`/product/${product.id}`}>View product</Link>
            </div>
          </div>
        ))}
      </>
    );
  }

  return (
    <React.Fragment>
      <section>
        <Styles.Input onChange={handleInputChange} />
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
