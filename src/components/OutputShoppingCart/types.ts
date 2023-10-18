export interface Product {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  discountedPrice: number;
  price: number;
  reviews: Array<object>;
}
export interface CartStore {
  numberOfProductsInCartStore: number;
  cartStore: Array<Product>;
  totalProductPrice: number;
}
export interface CartStoreActions {
  addProductToCartStore: (product: Product) => void;
  removeProductFromCartStore: (productToRemove: Product) => void;
  clearAllProductsFromCartStore: () => void;
}
