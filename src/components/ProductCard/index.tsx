import * as React from "react";

function ProductCard() {
  const url: string = "https://api.noroff.dev/api/v1/online-shop";

  interface ApiReturnData {
    id: string;
    title: string;
    description: string;
    discountedPrice: number;
    price: number;
    imageUrl: string;
  }

  const [products, setProducts] = React.useState<Array<ApiReturnData>>([]);

  React.useEffect(() => {
    async function getUrlData() {
      const response = await fetch(url);
      const json = await response.json();

      // Reciving data from the url and then assign it to the setProducts state
      setProducts(json);
    }
    // Call the function getUrlData
    getUrlData();
  }, []);

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
export default ProductCard;
