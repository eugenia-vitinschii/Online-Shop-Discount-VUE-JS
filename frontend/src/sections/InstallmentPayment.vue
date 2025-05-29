<template>
  <div v-if="product">
  <p class="body-text">Cumpără {{ product.productName }} în rate: </p>
  <p class="body-text-green">Dobândă: 0% </p>
  <table class="credit__table">
    <thead>
      <tr>
      <th>Termen luni</th>
      <th>Avans</th>
      <th>Lunar</th>
      <th>Total</th>
    </tr>
    </thead>
    <tbody> 
      <tr v-for="item in months" :key="item.id">
      <td>{{ item.month }}</td>
      <td>{{installmentPay(item.avans)}}</td>
      <td class="small-text">{{ getMonthlyPrice(item.month, item.avans) }} lei/lunar</td>
      <td class="small-text"> {{ product.price }} lei</td>
    </tr>
  </tbody>
   
  </table>
  </div>
</template>

<script setup lang="ts">
//vue
import { defineOptions, onMounted, computed } from "vue";
import { useRoute } from "vue-router";

//store
import { useProductStore } from "@/stores/product";
import { storeToRefs } from "pinia";

defineOptions({
  name: "InstallmentPayment",
});

//pinia
const store = useProductStore();
const { getProducts } = store;
const { products } = storeToRefs(store);

//variables
const product = computed(() => {
  return products.value.find(p => p.id === id.value) ?? null;
});

//router
const route = useRoute();
const id =  computed(() => route.params.id as string);

//month interface

interface Month{
  id: number;
  month: number;
  avans:number;
}

const months: Month[] = [
{ id: 2, month: 2, avans: 0 },
  { id: 3, month: 3,avans: 0},
  { id: 6, month: 6, avans: 30, },
  { id: 9, month: 9,avans:40},
  { id: 10, month: 10,avans:50 },

];

let price = computed(() => product.value?.price ?? 0);

function installmentPay(avans:number):number{
  if(avans == 0) return 0;
    return Math.round(+price.value - (price.value * avans) / 100);
}

function getMonthlyPrice(month:number, avans: number):number {
  const leftToPay = installmentPay(avans);
  return Math.round( (price.value - leftToPay) / month);
}

onMounted(() => {
  getProducts(id.value);
});
</script>