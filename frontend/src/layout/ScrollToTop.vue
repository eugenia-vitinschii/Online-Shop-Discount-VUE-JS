<template>
  <Transition name="fade">
    <button
      class="scrollToTop"
      v-if="isVisible"
      @click="scrollToTop"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff"
        stroke-width="1" stroke-linecap="square">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  </Transition>
</template>

<script setup lang="ts">
//vue 
import {ref} from 'vue'

//hooks
import { onMounted, onBeforeUnmount } from 'vue';

//variables
const isVisible = ref(false)

const handleScroll = () => {
  isVisible.value = window.scrollY > 350
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth'})
}

//hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>