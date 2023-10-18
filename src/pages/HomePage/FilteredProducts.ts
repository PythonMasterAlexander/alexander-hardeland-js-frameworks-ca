import ApiCallData from "./ApiCallData";
import { filterValue } from "./HandleInputChange";
const { products } = ApiCallData();
interface Product {
  id: string;
  title: string;
  description: string;
  discountedPrice: number;
  price: number;
  imageUrl: string;
}
const FilteredProducts: Product[] = products.filter((product) => {
  const productTitle: string = product.title.trim().toLowerCase();

  if (productTitle.startsWith(filterValue)) {
    return product;
  }
});
export default FilteredProducts;
