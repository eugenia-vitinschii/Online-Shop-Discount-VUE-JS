<template>
  <div>

  <div class="input__wrapper">
    <label>{{ label }}</label>
    <input
      type="text"
      :value="value"
      @input="$emit('update:value', $event.target.value)"
      :placeholder="placeholder"
    />
  </div>

  </div>
</template>   

<script setup>

import { defineOptions } from "vue";
import { defineProps } from "vue";

defineOptions({
  name: "TheInput",
});

defineProps({
  value: {
    type: [Object, String],
    defaul: "",
  },
  label: {
    type: String,
    default: "",
  },

  placeholder: {
    type: String,
    default: "text",
  },
});
</script>
