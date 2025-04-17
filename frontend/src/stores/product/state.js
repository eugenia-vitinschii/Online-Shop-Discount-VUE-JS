//pinia
export const  state = () => ({
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