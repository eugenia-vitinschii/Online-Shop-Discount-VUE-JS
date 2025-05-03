<template>
<!-- delivery item -->
  <div class="delivery__item">
    <div class="delivery__item-top">
      <div class="delivery__img">
      <img :src="img" alt="Not found" />
    </div>
     <p class="subheading">{{ name }}</p>
    </div>
    <div class="delivery__item-bottom">
      <p class="small-text">{{ body }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
//components settings
defineOptions({
  name: "DeliveryItem",
});

const props = defineProps<{
  img: string
  id: string
  name: string
  body: string
}>()

</script>