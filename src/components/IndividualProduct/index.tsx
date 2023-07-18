import { useParams } from "react-router-dom";

function IndividualProduct() {
  const { id } = useParams();
  console.log(id);

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
