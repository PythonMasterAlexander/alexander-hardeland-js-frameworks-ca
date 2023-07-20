import * as React from "react";
import * as Styles from "./index.styles";
import ProductCard from "../../components/ProductCard";

export const handleInputChange = (
  event: React.ChangeEvent<HTMLInputElement>
) => {
  const userSearchInputValue = event.target.value.trim().toLowerCase();
  console.log(userSearchInputValue);
};

function HomePage() {
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
