import ApiCallData from "./ApiCallData";

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
          <div className="card" key={product.id}>
            <img
              className="product-image"
              src={product.imageUrl}
              alt={product.description}
            />
            <div className="card-body">
              <h3 className="card-title">{product.title}</h3>
              <p className="card-info">{product.description}</p>
              <button className="btn-primary to-product">Go to product</button>
            </div>
          </div>
        ))}
      </>
    );
  }
}
export default ProductCard;
