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
  cartStore: Array<Product | null>;
  totalProductPrice: number;
}

interface CartStoreActions {
  addProductToCartStore: () => void;
  //removeProductFromCartStore: () => void;
  //clearAllProductsFromCartStore: () => void;
}

const UseCartStore = Zustand.create<CartStore & CartStoreActions>()(
  devtools(
    persist(
      (set) => ({
        numberOfProductsInCartStore: 0,

        cartStore: [],
        addProductToCartStore: () =>
          set((state) => ({ cartStore: state.cartStore })),
        //removeProductFromCartStore: () => set((state) => ({})),
        //clearAllProductsFromCartStore: () => set((state) => ({})),
        totalProductPrice: 0,
      }),
      {
        name: "cartStore",
      }
    )
  )
);
export default UseCartStore;
