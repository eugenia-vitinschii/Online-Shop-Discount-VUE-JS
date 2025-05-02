<template>
  <div>

  <div class="input__wrapper">
    <label>{{ label }}</label>
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
    />
  </div>

  </div>
</template>   

<script setup>

import { defineOptions } from "vue";
import { defineProps , defineEmits } from "vue";

defineOptions({
  name: "TheInput",
});

defineProps({
  modelValue: {
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

//уьшеы
defineEmits(['update:modelValue']);
</script>
