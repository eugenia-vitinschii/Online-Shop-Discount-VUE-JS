<template>
<div class="wrapper">
    <the-header />
  <div class="content">
  <router-view></router-view>
  </div>
  <the-footer />
  <scroll-back />
</div>

</template>

<script>
import TheFooter from "./layout/TheFooter.vue";
import TheHeader from "./layout/TheHeader.vue";
import ScrollBack from "./layout/ScrollBack.vue";

export default {
  name: "app",
  components: {
    TheHeader,
    TheFooter,
    ScrollBack,
  },
};
</script>

<style>
</style>
