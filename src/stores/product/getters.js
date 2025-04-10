export const getters =  {
   // filteredItems.length
   allProducts() {
     return this.products.length;
   },
   filteredProducts() {
     return this.filteredItems.length;
   },
   //filter items by brand for brand view
   getItemsByBrand: (state) => {
     return (brandName) =>
       Object.values(state.products).filter(
         (item) => item.brand === brandName
       );
   },
   getPromoItems() {
     //get promo items for promo page
     let promo = this.products;
     promo = promo.filter((item) => {
       return item.discount > 0 && item.discount < 60;
     });
     return promo;
   },
   filteredItems() {
     let filtered = [...this.products];
     
     //filter by search 
     const search = String(this.searchValue).trim().toUpperCase();
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
     filtered.sort((a, b) => {
       const priceCompare = this.ascending ? a.price - b.price : b.price - a.price;
   
       // Push out-of-stock items to the end
       if (a.stock === false && b.stock !== false) return 1;
       if (a.stock !== false && b.stock === false) return -1;
   
       return priceCompare;
     });

return filtered;
   }
 };