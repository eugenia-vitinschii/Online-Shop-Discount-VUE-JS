<template>
  <div>

<div :class="['wrapper', { 'wrapper--promo': isPromoPage }]">
    <the-header />
  <div class="content">
  <router-view></router-view>
  </div>
  <the-footer />
  <scroll-back />
</div>


  </div>
</template>
<script setup>
//vue
import { computed } from 'vue';

//vue router
import { useRoute } from 'vue-router';

//components
import TheFooter from "../../src/layout/TheFooter.vue";
import TheHeader from "../../src/layout/TheHeader.vue";
import ScrollBack from "../../src/layout/ScrollBack.vue";

//varuables
const route = useRoute();

//change promo page color
const isPromoPage = computed(() => route.name === 'PromoView');

</script>

