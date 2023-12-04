import { devOnlyDevtools as devtools } from "./devTools";
import { immer } from "zustand/middleware/immer";
import create from "zustand";

export const productsStore = create(
  devtools(
    immer((set) => ({
      products: [],
      getProducts: () => {
        fetch("https://fakestoreapi.com/products")
          .then((response) => response.json())
          .then((data) =>
            set({ products: data, loading: false }, false, {
              type: "getProducts",
            })
          );
      },
    })),
    { name: "React + Zustand", store: "products" }
  )
);
