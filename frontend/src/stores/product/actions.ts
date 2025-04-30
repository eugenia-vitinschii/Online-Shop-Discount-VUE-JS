//actions product store
import axios from "axios";

//router
import router from "@/router/index";

//product
import type { ProductState } from './state'
import { Product } from "@/models/product"
 
//base url
const baseUrl = "http://localhost:3001";

export const actions= {
//fetch products
   async fetchProducts(this: ProductState & { products: Product[]}): Promise<void> {
     try {
       const response = await axios.get(`${baseUrl}/products`);
       this.products = response.data.map((item:Record<string, any>) => new Product(item));
     } catch (error) {
       alert('Failed to fetch products');
       console.log(error);
     }
   },
//create product
   async createProduct(this: ProductState & { products: Product[]}, payload:Record<string, any>): Promise<void> {
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
   async deleteProducts(this: ProductState & { products: Product[]}, id: string): Promise<boolean> {
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
   addToCart( this: ProductState & { user: object} ,item: object): Record<string, number>  {
    
     const index:string = this.user.cart.findIndex((product) => product.id == item.id)

     if (index !== -1) {
       this.user.cart[index].quantity += 1;
     } else {
       const cartItem = { ...item, quantity: 1}
       this.user.cart.push(cartItem);
     }
     localStorage.setItem("cart", JSON.stringify(this.user.cart));
   },
   //add  product to favorite
   addToFavorite(item) {
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
   removeItemFromFavorite(id) {
     this.user.favorite = this.user.favorite.filter((item) => item.id !== id);
   },
   removeItem(id) {
     this.user.cart = this.user.cart.filter((item) => item.id !== id);
   },
   getSum() {
    return this.user.cart.reduce((sum, item) => {
      const itemTotal = Number(item.price) * (item.quantity || 1);
      return sum + itemTotal;
    }, 0);
  },
   getSavedMoney() {
    return this.user.cart.reduce((sum, item) =>{
        const savedTotal = Number(item.savedMoney) * (item.quantity || 1);
        return sum + savedTotal
    }, 0);
   },
   getDiscountPrice(a) {
     return (b) => {
       return a - b;
     };
   },
   //incrementQuantity
   incrementQuantity(id) {
     const item = this.user.cart.find(item => item.id === id);
     if (item) {
       item.quantity ++;
     }
   },
   decrementQuantity(id) {
    const item = this.user.cart.find(item => item.id === id);
    if (item &&  item.quantity > 1 ) {
      item.quantity --;
    }
  },
   // edit product
   async updateProducts(id) {
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
   async getProducts(id) {
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
   monthlyPrice(price) {
     let totalPrice = Math.round(+price + (price * 40) / 100);
     let monthlyPrice = Math.round(totalPrice / 36);
     return monthlyPrice;
   },

   dicountLabel(discount) {
     if (discount < 9 && discount > 1) {
       return true;
     }
   },
   hugeSaleLabel(discount) {
     if (discount < 100 && discount > 9) {
       return true;
     }
   },
   showPrices(discount) {
     if (discount < 1 || discount > 99) {
       return true;
     }
   },
   showOnePrice(discount) {
     if (discount < 1 || discount > 99) {
       return true;
     }
   },
 }