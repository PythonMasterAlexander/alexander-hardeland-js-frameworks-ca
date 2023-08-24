import * as Zustand from "zustand";
import { devtools, persist } from "zustand/middleware";

interface CartStore {
  numberOfProductsInCartStore: number;
}

const UseCartStore = Zustand.create<CartStore>()(
  devtools(
    persist(
      (set) => ({
        numberOfProductsInCartStore: 0,
      }),
      {
        name: "cartStore",
      }
    )
  )
);
export default UseCartStore;
