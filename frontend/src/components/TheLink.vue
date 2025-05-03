<template>
<!-- a component -->
  <a :href="href" class="body-text">
    {{ link }}
  </a>
</template> 

<script setup lang="ts">
//vue
defineOptions({
  name: "TheLink",
});

//props
const props = defineProps<{
  link: string
  href: string
}>();

</script>