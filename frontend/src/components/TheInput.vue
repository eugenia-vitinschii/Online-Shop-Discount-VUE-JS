<template>
<!-- input wrapper -->
  <div class="input__wrapper">
    <label>{{ label }}</label>
    <input type="text" 
      :value="modelValue" 
      @input="onInput"
      :placeholder="placeholder" />
  </div>
</template>

<script setup lang="ts">
//components settings
defineOptions({
  name: "TheInput",
});

//props
const props = defineProps<{
   modelValue: string | number;
   label?: string,
   placeholder?: string
}>();

// emit 
const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>();

const onInput = (e: Event) =>{
  const target = e.target as HTMLInputElement
  const value = typeof props.modelValue === "number" ? Number (target.value) : target.value 
  emit('update:modelValue', value)
}


</script>
