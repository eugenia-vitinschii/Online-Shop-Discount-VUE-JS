import type { ProductState } from './state';
import { Product } from "@/models/product"

export const getters =  {
  //chart getters
  promoCount: (state: ProductState):number => state.products.filter((p) => p.discount).length,
  inStockCount: (state: ProductState):number => state.products.filter((p) => p.stock).length,
  outOfStockCount: (state: ProductState):number => state.products.filter((p) => !p.stock).length,
  categoryCounts: (state: ProductState): Record<string, number> => {
    const map: Record<string, number> = {};
    state.products.forEach(p => {
      map[p.brand] = (map[p.brand] || 0) + 1;
    });
    return map;
  },
  colorCounts: (state:ProductState): Record<string, number>  => {
    const map: Record<string, number> = {};

    state.products.forEach(p => {
      map[p.color] = (map[p.color] || 0) + 1;
    });
    return map;
  },
   // filteredItems.length
   allProducts:(state: ProductState):number =>  state.products.length,

   filteredProducts:(_state: ProductState, getters: Record<string, any>):number => getters.filteredItems.length,

   //filter items by brand for brand view
   getItemsByBrand: (state: ProductState) => {
     return (brandName: string): Product[] => Object.values(state.products).filter( (item) => item.brand === brandName);
   },
     //get promo items for promo page
   getPromoItems:(state: ProductState): Product[]=> {
    return state.products.filter((item) => item.discount > 0 && item.discount < 60);
   },
//filters
   filteredItems(state: ProductState):Product[] {
     let filtered: Product[] = [...state.products];
     
     //filter by search 
     const search = state.searchValue?.trim().toUpperCase();
     if (search) {
       filtered = filtered.filter((item) =>
         item.productName?.toUpperCase().includes(search)
       );
     }

     // show Promo items
     if (!state.promo) {
       filtered = filtered.filter((item) => {
         return item.discount > 0 && item.discount < 60;
       });
     }
     // checked input by brands
     if (state.checked?.length) {
       filtered = filtered.filter(item => state.checked.includes(item.brand)
     );
     }

     //sort by price
     filtered.sort((a, b):number => {
       const priceCompare = state.ascending ? a.price - b.price : b.price - a.price;
   
       // Push out-of-stock items to the end
       if (a.stock === false && b.stock !== false) return 1;
       if (a.stock !== false && b.stock === false) return -1;
   
       return priceCompare;
     });

return filtered;
   }
 };