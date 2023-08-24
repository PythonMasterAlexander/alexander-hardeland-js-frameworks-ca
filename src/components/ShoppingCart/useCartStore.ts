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

  //Function takes one parameter > product with a type of the Product interface
  //which are the object added when clicking the add product to cart button
  //If other parameters are needed, just add them here
  addProductToCartStore: (product: Product) => void;

  //removeProductFromCartStore: () => void;
  //clearAllProductsFromCartStore: () => void;
}

const UseCartStore = Zustand.create<CartStore>()(
  devtools(
    persist(
      (set) => ({
        numberOfProductsInCartStore: 0,

        cartStore: [],
        addProductToCartStore: (product) =>
          set((state) => ({ cartStore: [...state.cartStore, product] })),
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
