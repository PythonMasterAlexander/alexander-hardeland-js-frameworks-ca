import * as React from "react";
import ApiCallData from "./ApiCallData";
import * as Styles from "./index.styles";
import { Link } from "react-router-dom";

export const handleInputChange = (
  event: React.ChangeEvent<HTMLInputElement>
) => {
  const userSearchInputValue = event.target.value.trim().toLowerCase();
};

function ProductCard() {
  const { products, isLoading, isError } = ApiCallData();

  // TODO create components for error and loading
  if (isLoading) {
    return <div>Loading</div>;
  } else if (isError) {
    return <div>An error</div>;
  } else {
    return (
      <>
        {products.map((product) => (
          <Styles.CardContainer key={product.id}>
            <Styles.ProductImage
              className="product-image"
              src={product.imageUrl}
              alt={product.description}
            />
            <Styles.CardBody>
              <h3 className="card-title">{product.title}</h3>
              <Styles.CardParagraph className="card-info">
                {product.description}
              </Styles.CardParagraph>
              <Link to={`/product/${product.id}`}>View product</Link>
            </Styles.CardBody>
          </Styles.CardContainer>
        ))}
      </>
    );
  }
}
export default ProductCard;
