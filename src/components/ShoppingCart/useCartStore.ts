import * as Zustand from "zustand";
import { devtools, persist } from "zustand/middleware";

interface CartState {
  cartCount: number;
  cartProductsList: [];
  addProductToCart: object;
  addToCart: () => void;
  removeProductFromCart: () => void;
}

const UseCartStore = Zustand.create<CartState>()(
  devtools(
    persist(
      (set, get) => ({
        cartCount: 0,
        cartProductsList: [],
        addProductToCart: {},
        addToCart: () => set((state) => ({ cartCount: state.cartCount + 1 })),
        removeProductFromCart: () =>
          set((state) => ({ cartCount: state.cartCount - 1 })),
      }),
      {
        name: "cartStore",
      }
    )
  )
);
export default UseCartStore;
