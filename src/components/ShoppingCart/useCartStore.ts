import * as Zustand from "zustand";
import { devtools, persist } from "zustand/middleware";

interface NumbersOfItemsInCart {
  cartCount: number;
}

interface CartState {
  productsInCartList: [];
  addProductToCart: object;
  addToCart: () => void;
}

const UseCartStore = Zustand.create<NumbersOfItemsInCart & CartState>()(
  devtools(
    persist(
      (set, get) => ({
        cartCount: 0,
        productsInCartList: [],
        addProductToCart: {},
        addToCart: () => set((state) => ({ cartCount: state.cartCount + 1 })),
      }),
      {
        name: "cartStore",
      }
    )
  )
);
export default UseCartStore;
