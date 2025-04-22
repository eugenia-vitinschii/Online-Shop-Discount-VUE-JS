<template>
  <div>

  <button class="button"><slot></slot></button>

  </div>
</template>
<script setup>
import { defineOptions } from "vue";

defineOptions({
  name: "TheButton",
});
</script>
