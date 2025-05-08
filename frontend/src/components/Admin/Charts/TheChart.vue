<template>
<!-- promo in Stock -->
  <div class="chart__item">
    <p class="subheading">Promo & Stock value</p>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup lang="ts">
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
const chartCanvas = ref<HTMLCanvasElement | null>(null);

// color generator
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
  if(!chartCanvas.value) return;
  const values = [store.promoCount, store.inStockCount, store.outOfStockCount];
  const colors = generateColors(values.length);

  new Chart(chartCanvas.value, {
    type: "bar",
    data: {
      labels: ["Promo Price", "In Stock", "Out of Stock"],
      datasets: [
        {
          label: "Product Count",
          data: values,
          backgroundColor: colors,
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
