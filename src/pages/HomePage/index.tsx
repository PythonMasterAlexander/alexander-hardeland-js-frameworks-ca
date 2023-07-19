import * as Styles from "./index.styles";
import ProductCard from "../../components/ProductCard";

function HomePage() {
  return (
    <>
      <Styles.HeadingOne>Hello from the home page</Styles.HeadingOne>
      <Styles.HomePageMainContainer>
        <ProductCard />
      </Styles.HomePageMainContainer>
    </>
  );
}
export default HomePage;
