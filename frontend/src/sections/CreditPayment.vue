<template>
  <div v-if="product">
  <p class="body-text">Cumpără {{ product.productName }} în credit: </p>
  <p class="body-text-green">Avans : 0% </p>
  <table class="credit__table">
    <tr>
      <th>Termen luni</th>
      <th>Avans</th>
      <th>Lunar</th>
      <th>Total</th>
    </tr>
    <tr v-for="item in months" :key="item.id">
      <td>{{ item.month }}</td>
      <td>0 lei</td>
      <td class="small-text">{{ getMonthlyPrice(item.month, item.percent) }} lei/lunar</td>
      <td class="small-text">{{ getPrice(item.percent) }} lei</td>
    </tr>
  </table>
  </div>
</template> 
 

<script setup lang="ts">
//vue
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { defineOptions } from "vue";

//pinia
import { useProductStore } from "@/stores/product";
import { storeToRefs } from "pinia";

//product settings
defineOptions({
  name: "CreditPayment",
});

//зштшф
const store = useProductStore();
const { getProducts } = store;
const { products } = storeToRefs(store);

//variables
const product = computed(() => {
  return  products.value.find((p) => p.id === id.value) ?? null;
});
//router
const route = useRoute();
const id =  computed (() => route.params.id as string);


//interface Month
interface Month {
  id: number;
  month: number;
  percent: number;
}

//const month
const months: Month[] = [
  { id: 3, month: 3, percent: 20},
  { id: 6, month: 6, percent: 23 },
  { id: 9, month: 9, percent: 27 },
  { id: 12, month: 12, percent: 28 },
  { id: 24, month: 24, percent: 33 },
  { id: 36, month: 36, percent: 40 },
];


let price = computed (() => product.value?.price ?? 0 )

function getPrice(percent:number):number {
return Math.round(+price.value + (price.value * percent) / 100);
}

function getMonthlyPrice(month: number, percent:number): number {
  const creditPrice = getPrice(percent) 
  return  Math.round(creditPrice / month);
}
//hooks
onMounted(() => {
  getProducts(id.value);
});
</script>