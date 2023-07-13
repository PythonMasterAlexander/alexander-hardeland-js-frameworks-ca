import ProductCard from "../../components/ProductCard";
import * as Styles from "./index.styles";

function HomePage() {
  return (
    <>
      <Styles.HeadingOne>Hello from the home page</Styles.HeadingOne>
      <section>
        <ProductCard />
      </section>
    </>
  );
}
export default HomePage;
