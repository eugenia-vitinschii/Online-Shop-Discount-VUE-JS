//pinia
import { defineStore } from "pinia";

//axios
import axios from "axios";

//router
import router from "@/router/index";

//product
import { Product } from "@/models/product";

//base url
const baseUrl = "http://localhost:3000";

export const useProductStore = defineStore("productId", {
  state: () => ({
    products: [],
    user: {
      cart: [],
      favorite: [],
    },
    admin: [],
    checked: [],
    ascending: true,
    promo: true,
    searchValue: [],
    count: 1,
    total: 0,
    newSum: 0,
  }),
  getters: {
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
    },
  },
  actions: {
    //fetch products
    async fetchProducts() {
      try {
        const response = await axios.get(`${baseUrl}/products`);
        this.products = response.data.map((item) => new Product(item));
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    //create product
    async createProduct(payload) {
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
    async deleteProducts(id) {
      try {
        await axios.delete(`${baseUrl}/products/${id}`);
        this.products = this.products.filter((prev) => prev.id !== id);
      } catch (err) {
        console.error("Post ERROR!", err);
      }
    },
    //add  product to cart
    addToCart(item) {
      const index = this.user.cart.findIndex((product) => product.id == item.id)

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
      this.count = this.user.favorite.findIndex(
        (product) => product.id == item.id
      );
      if (this.count !== -1) {
        this.products[this.count].quantity += 1;
      } else {
        item.quantity = 1;
        this.user.favorite.push(item);
      }
      localStorage.setItem("favorite", JSON.stringify(item));
    },
    //remove item from favorite
    removeItemFromFavorite(id) {
      this.user.favorite = this.user.favorite.filter((item) => item.id !== id);
    },
    removeItem(id) {
      this.user.cart = this.user.cart.filter((item) => item.id !== id);
    },
    getSum() {
      return this.user.cart.reduce(
        (sum, currSum) => sum + Number(currSum.price),
        0
      );
    },
    getSavedMoney() {
      return this.user.cart.reduce(
        (sum, currSum) => sum + Number(currSum.savedMoney),
        0
      );
    },
    getDiscountPrice(a) {
      return (b) => {
        return a - b;
      };
    },
    //incrementQuantity
    incrementQuantity(id) {
      this.user.cart.forEach((item) => {
        if (item.id === id) {
          return this.count++;
        }
      });
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
  },
});
