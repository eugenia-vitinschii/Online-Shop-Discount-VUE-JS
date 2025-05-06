//brand.ts store

import { defineStore } from "pinia";
import axios from "axios";
import router from "@/router/index";

const baseUrl = "http://localhost:3001";

export interface Brand {
  id: string;
  name: string;
  img: string;
  brand: string;
}

export const useBrandsStore = defineStore("brands", {
  state: () => ({
    brands: [] as Brand[],
  }),

actions:{
// get all breands from json
  async fetchBrands(): Promise<void> {
    try {
      const response = await axios.get<Brand[]>(`${baseUrl}/brands`);
      this.brands = response.data;
    } catch (error) {
        alert(error);
        console.log(error);
    }
  },
  // add new brand in db.json
  async createBrand(payload: Omit<Brand, 'id'>): Promise<void> {
    try {
      const { data } = await axios.post<Brand>(`${baseUrl}/brands`, payload);
      this.brands.push(data);
      alert("Produsul a fost creat cu succes");
    } catch (error) {
        alert(error);
      } finally {
        router.push({ path: "/admin/panel" });
      }
    },
  },
});

