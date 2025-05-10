//getters.ts
import type { ProductState } from './state';
import type { Product } from "@/models/product"

export const getters =  {
  //chart getters for admin page
  promoCount(this: ProductState):number{  return this.products.filter((p) => p.discount).length},
  inStockCount(this: ProductState):number { return this.products.filter((p) => p.stock).length},
  outOfStockCount(this: ProductState):number { return this.products.filter((p) => !p.stock).length},
  categoryCounts(this: ProductState): Record<string, number> {
    const map: Record<string, number> = {};
    this.products.forEach(p => {
      map[p.brand] = (map[p.brand] || 0) + 1;
    });
    return map;
  },
  colorCounts(this:ProductState): Record<string, number> {
    const map: Record<string, number> = {};
    this.products.forEach(p => {
      map[p.color] = (map[p.color] || 0) + 1;
    });
    return map;
  },
   // filteredItems.length
  allProducts(this: ProductState):number{ return this.products.length},
   //giltered products length
  filteredProducts(this: ProductState, getters: Record<string, any>):number { return getters.filteredItems.lenght},
   //filter items by brand for brand view
  getItemsByBrand(this: ProductState){
    return (brandName: string): Product[] => Object.values(this.products).filter( (item) => item.brand === brandName);
   },
  //get promo items for promo page
   getPromoItems(this: ProductState): Product[] {
    return this.products.filter((item) => item.discount > 0 && item.discount < 60 && item.stock !== false);
   },
  //filters Products view
   filteredItems(this: ProductState):Product[] {
     let filtered: Product[] = [...this.products];
     
     //filter by search 
     const search = this.searchValue?.trim().toUpperCase();
     if (search) {
       filtered = filtered.filter((item) =>
         item.productName?.toUpperCase().includes(search)
       );
     }

     // show Promo items
     if (!this.promo) {
       filtered = filtered.filter((item) => {
         return item.discount > 0 && item.discount < 60;
       });
     }
     // checked input by brands
     if (this.checked?.length) {
       filtered = filtered.filter(item => this.checked.includes(item.brand)
     );
     }

     //sort by price
     filtered.sort((a, b):number => {
       const priceCompare = this.ascending ? a.price - b.price : b.price - a.price;
   
       // Push out-of-stock items to the end
       if (a.stock === false && b.stock !== false) return 1;
       if (a.stock !== false && b.stock === false) return -1;
   
       return priceCompare;
     });

return filtered;
   },
 };