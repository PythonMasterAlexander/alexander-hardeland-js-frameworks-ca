import GetIndividualProductData from "./GetIndividualProductData";

function IndividualProduct() {
  const product = GetIndividualProductData();
  console.log(product);

  return (
    <>
      <div>
        <img />
        <div>
          <h3>Product header</h3>
          <p>Product Text</p>
          <button>Add Product to cart</button>
        </div>
      </div>
    </>
  );
}
export default IndividualProduct;
