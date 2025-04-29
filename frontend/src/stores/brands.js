import { defineStore } from "pinia";
import axios from "axios";
import router from "@/router/index";

const baseUrl = "http://localhost:3001";

export const useBrandsStore = defineStore("brands", {
  state: () => ({
    brands: [],
  }),
  actions:{
       // get all breands from json
       async fetchBrands() {
         try {
           const response = await axios.get(`${baseUrl}/brands`);
           this.brands = response.data;
         } catch (error) {
           alert(error);
           console.log(error);
         }
       },
           // add new brand in db.json
    async createBrand(payload) {
      try {
        const { data } = await axios.post(`${baseUrl}/brands`, payload);
        this.brands.push(data);
        alert("Produsul a fost creat cu succes");
        // router.go(-1)
      } catch (error) {
        alert(error);
      } finally {
        router.push({ path: "/admin/panel" });
      }
    },
  }
});