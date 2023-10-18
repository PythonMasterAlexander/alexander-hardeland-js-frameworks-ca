import * as Styles from "./index.styles";
import { OutputProductOnHomePageProps } from "./types";
function OutputProductOnHomePage({
  filteredProducts,
}: OutputProductOnHomePageProps) {
  return (
    <>
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
            <Styles.ProductLinkStyle to={`/product/${product.id}`}>
              View product
            </Styles.ProductLinkStyle>
          </Styles.ProductLinkContainer>
        </Styles.ProductCardContainer>
      ))}
    </>
  );
}
export default OutputProductOnHomePage;
