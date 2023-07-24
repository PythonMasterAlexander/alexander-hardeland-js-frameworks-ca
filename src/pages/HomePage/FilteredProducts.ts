import ApiCallData from "./ApiCallData";
import { filterValue } from "./HandleInputChange";

const { products } = ApiCallData();

// Create a interface for the Products return array when its been filtered out
interface Product {
  id: string;
  title: string;
  description: string;
  discountedPrice: number;
  price: number;
  imageUrl: string;
}

// Filter the products array
const FilteredProducts: Product[] = products.filter((product) => {
  const productTitle: string = product.title.trim().toLowerCase();

  if (productTitle.startsWith(filterValue)) {
    return product;
  }
});
export default FilteredProducts;
