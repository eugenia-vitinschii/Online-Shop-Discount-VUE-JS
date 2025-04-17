//pinia
import {defineStore} from "pinia";

//product contstructor
import {Product} from "@/models/product";

export const useWatchedProductsStore = defineStore("watchedProducts", {
   state: () => ({
      watched: []
   }),
   //actions
   actions: {
      //add to wached
      addWatchedProduct(productData) {
         const exist = this.watched.find((p) => p.id === productData.id);
         if( !exist) {
            const newProduct = new Product(productData);
            this.watched.unshift(newProduct);
            if(this.watched.length > 8){
               this.watched.pop();
            }
            this.saveToLocalStorage();
         }
      },
      //save to ls
      saveToLocalStorage(){
         localStorage.setItem('watchedProducts', JSON.stringify(this.watched))
      },
      //load from storage
      loadFromLocalStorage (){
        const saved = localStorage.getItem('watchedProducts');
      if ( saved){
         this.watched = JSON.parse(saved).map((p) => new Product(p));
      } 
      }
   }
})
