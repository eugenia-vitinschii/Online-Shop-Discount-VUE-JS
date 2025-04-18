<template>
  <admin-header/>
  <the-chart/>
  <the-colors-chart/>
</template>
 
 
 
<script setup>
import AdminHeader from "@/components/Admin/AdminHeader.vue";
import { defineOptions } from "vue";

//components
import TheChart from "@/components/Admin/Charts/TheChart.vue";
import TheColorsChart from "@/components/Admin/Charts/TheColorsChart.vue"

defineOptions({
  name: "AdminView",
});
</script> 
