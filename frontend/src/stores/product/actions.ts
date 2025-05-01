//actions product store
import axios from "axios";

//router
import router from "@/router/index";

//product
import type { ProductState } from './state'
import { Product} from "@/models/product"
import type { CartItem } from "./state";
//base url
const baseUrl = "http://localhost:3001";

export const actions= {
//fetch products
   async fetchProducts(this: ProductState ): Promise<void> {
     try {
       const response = await axios.get(`${baseUrl}/products`);
       this.products = response.data.map((item:Record<string, any>) => new Product(item));
     } catch (error) {
       alert('Failed to fetch products');
       console.log(error);
     }
   },
//create product
   async createProduct(this: ProductState, payload:Record<string, any>): Promise<void> {
     try {
       const newProduct = new Product(payload);
       const { data } = await axios.post(`${baseUrl}/products`, newProduct);
       this.products.push(new Product(data));
       alert("Produsul a fost creat cu succes");
     } catch (error) {
       alert(error);
     } finally {
       router.push({ path: "/admin/panel" });
     }
   },
// delete product in db.json
   async deleteProducts(this: ProductState , id: string): Promise<boolean> {
     try {
       await axios.delete(`${baseUrl}/products/${id}`);
       this.products = this.products.filter((prev) => prev.id !== id);
       return true;
     } catch (err) {
       console.error("Post ERROR!", err);
       return false
     }
   },
   //add  product to cart
   addToCart( this: ProductState, item: CartItem): void {
    
     const index = this.user.cart.findIndex((product) => product.id == item.id)

     if (index !== -1) {
       this.user.cart[index].quantity += 1;
     } else {
       const cartItem = { ...item, quantity: 1} as CartItem ;
       this.user.cart.push(cartItem);
     }
     localStorage.setItem("cart", JSON.stringify(this.user.cart));
   },
   //add  product to favorite
   addToFavorite(this: ProductState, item: CartItem): void {
     const index  = this.user.favorite.findIndex((product) => product.id == item.id);

     if (index!== -1) {
       this.user.favorite[index].quantity += 1;  
     } else {
       item.quantity = 1;
       this.user.favorite.push(item);
     }
     localStorage.setItem("favorite", JSON.stringify(this.user.favorite));
   },
   //remove item from favorite
   removeItemFromFavorite(this: ProductState, id:string ): void{
     this.user.favorite = this.user.favorite.filter((item) => item.id !== id);
     localStorage.setItem("favorite", JSON.stringify(this.user.favorite))
   },
   //remove item from cart
   removeItem(this: ProductState, id: string): void {
     this.user.cart = this.user.cart.filter((item) => item.id !== id);
     localStorage.setItem("cart", JSON.stringify(this.user.cart))
   },
   getSum(this: ProductState):number {
    return this.user.cart.reduce((sum, item) => {
      const itemTotal = Number(item.price) * (item.quantity || 1);
      return sum + itemTotal;
    }, 0);
  },
   getSavedMoney(this: ProductState):number {
    return this.user.cart.reduce((sum, item) =>{
        const savedTotal = Number(item.savedMoney) * (item.quantity || 1);
        return sum + savedTotal
    }, 0);
   },
   getDiscountPrice(a:number): (b: number) => number {
     return (b:number):number => {
       return a - b;
     };
   },
   //incrementQuantity
   incrementQuantity(this: ProductState, id:string){
     const item = this.user.cart.find(item => item.id === id);
     if (item) {
       item.quantity ++;
     }
   },
   decrementQuantity(this: ProductState, id:string) {
    const item = this.user.cart.find(item => item.id === id);
    if (item &&  item.quantity > 1 ) {
      item.quantity --;
    }
  },
   // edit product
   async updateProducts(this: ProductState, id:string): Promise<void> {
     const product = this.products.find((p) => p.id === id);
     if (!product) return;
     try {
       await axios.put(`${baseUrl}/products/${id}`, product);
     } catch (err) {
       console.error(err);
     } finally {
       router.push({ path: "admin/panel" });
     }
   },
   // get product by id
   async getProducts(this: ProductState, id:string) {
     try {
       const { data } = await axios.get(`${baseUrl}/products/${id}`);

       const foundProduct = new Product(data);
       const index = this.products.findIndex((p) => p.id === id);
       if (index !== -1) {
         this.products[index] = foundProduct;
       } else {
         this.products.push(foundProduct);
       }
     } catch (err) {
       console.error("Updae ERROR:", err);
     }
   },
   monthlyPrice(price:number):number {
     let totalPrice = Math.round(+price + (price * 40) / 100);
     let monthlyPrice = Math.round(totalPrice / 36);
     return monthlyPrice;
   },

   dicountLabel(discount:number):boolean  {
    return !(discount <= 9 && discount >= 1);
   },
   hugeSaleLabel(discount:number):boolean {
    return !(discount <= 100 && discount >= 9);
   },
   showPrices(discount:number):boolean {
    return !(discount >= 1 && discount <= 99);
   },
   showOnePrice(discount:number):boolean {
     return !(discount >= 1 && discount <= 99);
   },
 }