<template>
  <div class="chart">
   <div class="container">
      <div class="chart__wrapper">
         <p class="heading"> promo: {{store.promoCount}} in stock:{{store.inStockCount}} out Stock :{{store.outOfStockCount}} /</p>
         <canvas ref="chartCanvas"></canvas>
      </div>
   </div>
  </div>
</template>

<script setup>
//vue 
import { defineOptions, ref, onMounted} from 'vue'

import Chart from "chart.js/auto"

//Component settings
defineOptions({
  name: 'TheChart'
})

//pinia 
import { useProductStore } from "@/stores/product"


const chartCanvas = ref(null);
const store = useProductStore();

onMounted(() => {
  new Chart(chartCanvas.value, {
    type: 'bar',
    data: {
      labels: ['Promo Price', 'In Stock', 'Out of Stock'],
      datasets: [{
        label: 'Product Count',
        data: [store.promoCount, store.inStockCount, store.outOfStockCount],
        backgroundColor: [
          'rgba(255, 159, 64, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
        borderColor: [
          'rgb(255, 159, 64)',
          'rgb(75, 192, 192)',
          'rgb(255, 99, 132)',
        ],
        borderWidth: 2,
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: '📊 Product Overview (From Pinia)'
        },
        legend: {
          display: false
        }
      }
    }
  });
});
</script>
