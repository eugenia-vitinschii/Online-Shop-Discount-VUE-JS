<template>
<the-chart/>
<admin-header/>

</template>
 
 
 
<script setup>
import AdminHeader from "@/components/Admin/AdminHeader.vue";
import { defineOptions } from "vue";

//components
import TheChart from "@/components/Admin/TheChart.vue"

defineOptions({
  name: "AdminView",
});
</script> 
