<template>
<div :class="['wrapper', { 'wrapper--promo': isPromoPage }]">
    <the-header />
  <div class="content">
  <router-view></router-view>
  </div>
  <the-footer />
<scroll-to-top/>
</div>

</template>
<script setup lang="ts"> 
//vue
import { computed } from 'vue';

//vue router
import { useRoute } from 'vue-router';

//components
import TheFooter from "./layout/TheFooter.vue";
import TheHeader from "./layout/TheHeader.vue";
import ScrollToTop from './layout/ScrollToTop.vue';

//varuables
const route = useRoute();

//change promo page color
const isPromoPage = computed(() => route.name === 'PromoView');

</script>

