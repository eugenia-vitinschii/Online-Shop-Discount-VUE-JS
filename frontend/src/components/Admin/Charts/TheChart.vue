<template>
<!-- promo in Stock -->
  <div class="chart__item">
    <p class="subheading">Promo & Stock value</p>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup>
//vue
import { defineOptions, ref, onMounted } from "vue";

//chart import
import Chart from "chart.js/auto";

//Component settings
defineOptions({
  name: "TheChart",
});

//pinia
import { useProductStore } from "@/stores/product";
const store = useProductStore();

//canvas variable
const chartCanvas = ref(null);

//hooks
onMounted(() => {
  new Chart(chartCanvas.value, {
    type: "bar",
    data: {
      labels: ["Promo Price", "In Stock", "Out of Stock"],
      datasets: [
        {
          label: "Product Count",
          data: [store.promoCount, store.inStockCount, store.outOfStockCount],
          backgroundColor: ["#002B6F", "#4FA77D", "#D92B2B"],
          borderColor: ["#B0B0B0", "#B0B0B0", "#B0B0B0"],
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Product Overview",
        },
        legend: {
          display: false,
        },
      },
    },
  });
});
</script>
