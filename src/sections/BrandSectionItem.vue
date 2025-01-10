<template>
  <!-- brand item -->
  <div class="brand__item" v-if="img">
    <router-link :to="'/brand/' + brand">
      <img class="brands__img" :src="img" alt="brand" />
    </router-link>
  </div>
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