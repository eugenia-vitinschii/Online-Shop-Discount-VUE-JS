<template>
  <div>

<!-- a component -->
  <a :href="href" class="body-text">
    {{ link }}
  </a>

  </div>
</template> 
<script setup>

import { defineOptions } from "vue";
import { defineProps } from "vue";

defineOptions({
  name: "TheLink",
});

defineProps({
  link: {
    type: String,
  },
  href: {
    type: String,
  },
});
</script>