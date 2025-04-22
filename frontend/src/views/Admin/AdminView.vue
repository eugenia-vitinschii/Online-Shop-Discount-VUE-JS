<template>
    <admin-header />
    <!-- chart -->
  <div class="chart">
    <div class="container">
      <div class="chart__wrapper">
        <the-chart />
        <the-brands-chart />
        <the-color-chart/>
      </div>
    </div>

</div>



</template>
 
 
 
<script setup>
import { defineOptions } from "vue";

//components
import AdminHeader from "../../components/Admin/AdminHeader.vue"
import TheChart from "@/components/Admin/Charts/TheChart.vue";
import TheBrandsChart from "@/components/Admin/Charts/TheBrandsChart.vue";
import TheColorChart from "@/components/Admin/Charts/TheColorChart.vue";

defineOptions({
  name: "AdminView",
});
</script> 
