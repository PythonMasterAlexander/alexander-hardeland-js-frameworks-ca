import { useEffect, useState } from "react";

function ProductCard() {
  const url = "https://api.noroff.dev/api/v1/online-shop";
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getUrlData() {
      const response = await fetch(url);
      const json = await response.json();

      // Reciving data from the url and then assign it to the setPosts state
      setPosts(json);
    }
    // Call the function getUrlData
    getUrlData();
  }, []);

  return (
    <>
      <div className="card">
        <img className="product-image" src="" alt="" />
        <div className="card-body">
          <h3 className="card-title">Product Name</h3>
          <p className="card-info">Info about the card</p>
          <button className="btn-primary to-product">Go to product</button>
        </div>
      </div>
    </>
  );
}
export default ProductCard;
