<template>
<!-- brand item img-->
  <router-link :to="'/brands/' + brand">
      <img class="brands__img" :src="img" alt="brand" />
  </router-link>
</template>


<script setup lang="ts">
//vue
import { defineOptions } from "vue";

//component information
defineOptions({
  name: "BrandsSectionItem",
});

const props = defineProps<{
  id: string
  brand: string
  img: string
}>()

</script>