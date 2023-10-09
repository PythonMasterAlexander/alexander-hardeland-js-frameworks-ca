import * as Zustand from "zustand";
import { devtools, persist } from "zustand/middleware";
interface Product {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  discountedPrice: number;
  price: number;
  reviews: Array<object>;
}

interface CartStore {
  numberOfProductsInCartStore: number;
  cartStore: Array<Product>;
  totalProductPrice: number;
}

interface CartStoreActions {
  addProductToCartStore: (product: Product) => void;
  removeProductFromCartStore: (productToRemove: Product) => void;
  clearAllProductsFromCartStore: () => void;
}

const UseCartStore = Zustand.create<CartStore & CartStoreActions>()(
  devtools(
    persist(
      (set) => ({
        numberOfProductsInCartStore: 0,
        cartStore: [],
        totalProductPrice: 0,

        addProductToCartStore: (product) =>
          set((state) => ({
            cartStore: [...state.cartStore, product],
            numberOfProductsInCartStore: state.cartStore.length + 1,
          })),

        clearAllProductsFromCartStore: () =>
          set(() => ({ cartStore: [], numberOfProductsInCartStore: 0 })),

        //Add a filter function that removes one product when the user click the remove product button
        removeProductFromCartStore: (productToRemove) =>
          set((state) => ({
            cartStore: state.cartStore.filter(
              (product) => product.id !== productToRemove.id
            ),
            numberOfProductsInCartStore: state.cartStore.length - 1,
          })),
      }),
      {
        name: "cartStore",
      }
    )
  )
);
export default UseCartStore;
