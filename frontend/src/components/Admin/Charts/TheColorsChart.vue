<template>
  <div class="chart">
   <div class="container">
      <div class="chart__wrapper">
         <p class="subheading">category: {{store.categoryCounts}}</p>
         <canvas ref="chartCanvas"></canvas>
      </div>
   </div>
  </div>
</template>

<script setup>
//vue 
import { defineOptions, ref, onMounted} from 'vue'

//chart import
import Chart from "chart.js/auto"

//Component settings
defineOptions({
  name: 'TheColorsChart'
})

//pinia 
import { useProductStore } from "@/stores/product"
const store = useProductStore();

//canvas variable
const chartCanvas = ref(null);

//hooks
onMounted(() => {
  new Chart(chartCanvas.value, {
    type: 'pie',
    data: {
      labels: ['Promo Price', 'In Stock', 'Out of Stock'],
      datasets: [{
        label: 'Product Count',
        data: [store.categoryCounts],
        backgroundColor: [
          '#002B6F',
          '#4FA77D',
          '#D92B2B',
        ],
        borderColor: [
          '#B0B0B0',
          '#B0B0B0',
          '#B0B0B0',

        ],
        borderWidth: 2,
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Product Overview'
        },
        legend: {
          display: false
        }
      }
    }
  });
});
</script>
