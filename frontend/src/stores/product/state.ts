//state.ts

import { Product } from "@/models/product"


//cart Item
export type CartItem = Product & { quantity: number };


export interface ProductState {
  products: Product[],
  user: {
    cart: CartItem [] ,
    favorite: CartItem [],
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
