import * as Zustand from "zustand";
import { devtools, persist } from "zustand/middleware";

interface CartState {
  totalProductsInCart: number;
  cartProductList: [];
  addProductToCart: object;
  clearProductCart: () => void;
  cartTotalPrice: number;
  addToCart: () => void;
  removeProductFromCart: () => void;
}

const UseCartStore = Zustand.create<CartState>()(
  devtools(
    persist(
      (set, get) => ({
        totalProductsInCart: 0,
        cartProductList: [],
        addProductToCart: {},
        addToCart: () =>
          set((state) => ({
            totalProductsInCart: state.totalProductsInCart + 1,
          })),
        removeProductFromCart: () =>
          set((state) => ({
            totalProductsInCart: state.totalProductsInCart - 1,
          })),
        cartTotalPrice: 0,
        clearProductCart: () => set({ cartProductList: [] }),
      }),
      {
        name: "cartStore",
      }
    )
  )
);
export default UseCartStore;
