<template>
<!-- Brands -->
  <div class="chart__item">
    <p class="subheading">Brands</p>
    <canvas ref="chartCanvasColors"></canvas>
  </div>
</template>


<script setup lang="ts">
//vue
import { defineOptions, ref, onMounted } from "vue";

//chart import
import Chart from "chart.js/auto";

//Component settings
defineOptions({
  name: "TheBrandsChart",
});

//pinia
import { useProductStore } from "@/stores/product";
const store = useProductStore();

//canvas variable
const chartCanvasColors = ref<HTMLCanvasElement | null>(null);

//color generator
function generateColors( count: number): string[]{
  const colors: string[] = [];
  for (let i = 0; i < count; i++) {
    const hue = Math.floor( (360/ count) * i);
    colors.push(`hsl(${hue}, 70%, 60%)`)
  }
  return colors
}

//hooks
onMounted(() => {
  if(!chartCanvasColors.value) return;
  const labels = Object.keys(store.categoryCounts);
  const data = Object.values(store.categoryCounts);
  const colors = generateColors(data.length);

  new Chart(chartCanvasColors.value, {
    type: "pie",
    data: {
      labels,
      datasets: [
        {
          label: "Brands",
          data,
          backgroundColor: colors,
          borderColor: "#fff",
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
