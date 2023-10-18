import * as Zustand from "zustand";
import { CartStore, CartStoreActions } from "./types";
import { devtools, persist } from "zustand/middleware";
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
        removeProductFromCartStore: (productToRemove) =>
          set((state) => {
            const productIndex = state.cartStore.findIndex(
              (product) => product.id === productToRemove.id
            );
            if (productIndex !== -1) {
              const updatedCartStore = [...state.cartStore];
              updatedCartStore.splice(productIndex, 1);
              return {
                cartStore: updatedCartStore,
                numberOfProductsInCartStore: state.cartStore.length - 1,
              };
            }
            return state;
          }),
      }),
      {
        name: "cartStore",
      }
    )
  )
);
export default UseCartStore;
