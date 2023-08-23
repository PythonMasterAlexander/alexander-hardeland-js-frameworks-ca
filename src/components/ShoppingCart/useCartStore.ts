import * as Zustand from "zustand";
import { devtools, persist } from "zustand/middleware";

interface StateCounter {
  count: number;
}

interface CounterActions {
  addOne: () => void;
  clearCount: () => void;
}

const UseCartStore = Zustand.create<StateCounter & CounterActions>(
  (set, get) => ({
    count: 0,
    addOne: () => set((state) => ({ count: state.count + 1 })),
    clearCount: () => set({ count: 0 }),
  })
);
export default UseCartStore;
