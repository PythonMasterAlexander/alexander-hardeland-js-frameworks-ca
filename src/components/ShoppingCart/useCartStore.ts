import * as Zustand from "zustand";
import { devtools, persist } from "zustand/middleware";

interface CartState {
  totalProductsInCart: number;
}

const UseCartStore = Zustand.create<CartState>()(
  devtools(
    persist(
      (set) => ({
        totalProductsInCart: 0,
      }),
      {
        name: "cartStore",
      }
    )
  )
);
export default UseCartStore;
