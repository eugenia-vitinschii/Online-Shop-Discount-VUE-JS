<template>
  <div>

<!-- Brands -->
  <div class="chart__item">
    <p class="subheading">Categories</p>
    <canvas ref="chartCanvasColors"></canvas>
  </div>

  </div>
</template>
<script setup>
//vue
import { defineOptions, ref, onMounted } from "vue";

//chart import
import Chart from "chart.js/auto";

//Component settings
defineOptions({
  name: "TheColorChart",
});

//pinia
import { useProductStore } from "@/stores/product";
const store = useProductStore();

//canvas variable
const chartCanvasColors = ref(null);

//hooks
onMounted(() => {
  const labels = Object.keys(store.colorCounts);
  const data = Object.values(store.colorCounts);

  new Chart(chartCanvasColors.value, {
    type: "pie",
    data: {
      labels,
      datasets: [
        {
          label: "Product Colors",
          data,
          backgroundColor: ["#002B6F", "#4FA77D", "#D92B2B"],
          borderColor: ["#B0B0B0"],
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
      },
    },
  });
});
</script>
