<template>

  <!-- brand item -->
  <router-link :to="'/brands/' + brand">
      <img class="brands__img" :src="img" alt="brand" />
  </router-link>

</template>

<script setup>
//vue
import { defineOptions, defineProps } from "vue";

//component information
defineOptions({
  name: "BrandsSectionItem",
});

//props
defineProps({
  id: {
    type: String,
  },
  brand: {
    type: String,
  },
  img: {
    type: String,
  },
});

</script>