import { defineStore } from "pinia";
import axios from "axios";
import router from "@/router/routes";

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
    searchValue: [],
    count: 1,
  }),
  getters: {
    allProducts() {
      return this.filteredItems.length;
    },
    //filter items by brand
    getItemsByBrand: (state) => {
      return (brandName) =>
        Object.values(state.products).filter(
          (item) => item.brand === brandName
        );
    },
    filteredItems() {
      let filtered = this.products;
      //search input
      if (this.searchValue != "" && this.searchValue) {
        filtered = filtered.filter((item) => {
         return item.productName
            .toUpperCase()
            .includes(this.searchValue.toUpperCase());
        });
      }
      // checked input by brands
      if (this.checked == 0) {
        return filtered;
      } else {
        return filtered = filtered.filter(
          (product) => this.checked.indexOf(product.brand) !== -1
        );
      }
    },
    //prices in descending order
    getByDescendingOrder: (state) => {
      return state.products.sort((a, b) => (a.price > b.price ? 1 : -1));
    },
  },
  actions: {
    // get all products in db.json
    async fetchProducts() {
      try {
        const response = await axios.get(`${baseUrl}/products`);
        this.products = response.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    // add new product in db.json
    async createProduct(payload) {
      try {
        const { data } = await axios.post(`${baseUrl}/products`, payload);
        this.products.push(data);
        alert("Produsul a fost creat cu succes");
        // router.go(-1)
      } catch (error) {
        alert(error);
      } finally {
        router.push({ path: "/admin-panel" });
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
      this.count = this.user.cart.findIndex((product) => product.id == item.id);
      if (this.count !== -1) {
        this.products[this.count].quantity += 1;
      } else {
        item.quantity = 1;
        this.user.cart.push(item);
      }
      localStorage.setItem("cart", JSON.stringify(item));
    },

    incrementQuantity(id) {
      this.user.cart.forEach((item) => {
        if (item.id === id) {
          return this.count++;
        }
      });
    },
    // edit product
    async updateProducts(id) {
      try {
        await axios.put(`${baseUrl}/products/${id}`, {
          id: this.products.id,
          productCode: this.products.productCode,
          img: this.products.img,
          productName: this.products.productName,
          price: this.products.price,
          discount: this.products.discount,
          brand: this.products.brand,
          waterConsumption: this.products.waterConsumption,
          energyEfficiencyClass: this.products.energyEfficiencyClass,
          type: this.products.type,
          spinSpeed: this.products.spinSpeed,
          loadCapacity: this.products.loadCapacity,
          noiseLevelCentrifugation: this.products.noiseLevelCentrifugation,
          noiseLevelWashing: this.products.noiseLevelWashing,
          typeControl: this.products.typeControl,
          numberOfPrograms: this.products.numberOfPrograms,
          weightInPackage: this.products.weightInPackage,
          depth: this.products.depth,
          weight: this.products.weight,
          color: this.products.color,
          countryOfAssembly: this.products.countryOfAssembly,
          guarantee: this.products.guarantee,
        });

        // this.router.push({name: "ProductPage"})
      } catch (err) {
        console.error(err);
      } finally {
        router.push({ path: "/admin-panel" });
      }
    },
    // get product info  by id
    async getProducts(id) {
      try {
        const response = await axios.get(`${baseUrl}/products/${id}`);
        this.products = response.data;
      } catch (err) {
        console.error("Updae ERROR:", err);
      }
    },
    // amount of saved money
    getMoneySaved(price) {
      return (discount) =>
        Math.floor(price - (price - (price * discount) / 100));
    },
    // get new price after apply discount
    getNewPrice(price) {
      return (discount) => Math.floor(price - (price * discount) / 100);
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
