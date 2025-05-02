<template>
  <button class="button"><slot></slot></button>
</template>
<script setup lang="ts">
import { defineOptions } from "vue";

defineOptions({
  name: "TheButton",
});
</script>
