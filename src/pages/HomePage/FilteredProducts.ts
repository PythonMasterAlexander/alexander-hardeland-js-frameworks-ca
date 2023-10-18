import ApiCallData from "./ApiCallData";
import { filterValue } from "./HandleInputChange";
import { Product } from "./types";
const { products } = ApiCallData();
const FilteredProducts: Product[] = products.filter((product) => {
  const productTitle: string = product.title.trim().toLowerCase();

  if (productTitle.startsWith(filterValue)) {
    return product;
  }
});
export default FilteredProducts;
