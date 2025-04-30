//state.ts

import { Product } from "@/models/product"

export interface ProductState {
  products: Product[],
  user: {
    cart: Product[],
    favorite: Product[],
  },
  checked: string[],
  ascending: boolean,
  promo: boolean,
  searchValue: string,
}

export const  state = ():ProductState => ({
   products: [],
   user: {
     cart: [],
     favorite: [],
   },
   checked: [],
   ascending: true,
   promo: true,
   searchValue: '',
})