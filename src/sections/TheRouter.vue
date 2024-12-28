<template>
<!-- go back button section -->
      <div class="router__links">
        <button
         class="button-svg"
         @click="$router.go(-1)"
         ><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/>
         </svg>
        </button>
      </div>
</template>
<script setup>
//vue
import { defineOptions } from "vue";

//vue 
defineOptions({
  name: "TheRouter",
});
</script>
