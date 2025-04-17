<template>
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
      <td class="small-text">{{ getMonthlyPrice(item.month) }} lei/lunar</td>
      <td class="small-text">{{ getPrice(item.percent) }} lei</td>
    </tr>
  </table>
</template>
 
 

<script setup>
import { useProductStore } from "@/stores/product";
import { storeToRefs } from "pinia";
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { defineOptions } from "vue";

defineOptions({
  name: "CreditPayment",
});
//variables
const product = computed(() => products.value.find((p) => p.id === id));

const store = useProductStore();

const { getProducts } = store;

const { products } = storeToRefs(store);

const route = useRoute();

const id = route.params.id;

const months = [
  { id: 3, month: 3, percent: 20},
  { id: 6, month: 6, percent: 23 },
  { id: 9, month: 9, percent: 27 },
  { id: 12, month: 12, percent: 28 },
  { id: 24, month: 24, percent: 33 },
  { id: 36, month: 36, percent: 40 },
];

let price = product.value.price;

let creditPrice;

function getPrice(percent) {
  creditPrice = Math.round(+price + (price * percent) / 100);
  return creditPrice;
}

let monhlyPrice;

function getMonthlyPrice(month) {
  monhlyPrice = Math.round(creditPrice / month);
  return monhlyPrice;
}
onMounted(() => {
  getProducts(id);
});
</script>