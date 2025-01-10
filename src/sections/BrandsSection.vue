<template>
<div class="brands">
  <div class="container">
    <!-- brand wrapper -->
    <div class="brands__wrapper" v-if="created">
      <brand-section-item
      v-for="brand in store.brands"
      :key="brand.id"
      :id="brand.id"
      :img="brand.img"
      :brand="brand.brand"
      />
    </div>
  </div>
</div>
   
</template>

<script setup>
//vue
import {defineOptions, ref, onMounted }  from "vue";

// component information
defineOptions ({
   name: "BrandsSection"
})
//components
import BrandSectionItem from "./BrandSectionItem.vue"

//component data
let created = ref(false)

//pinia store
import {useBrandsStore} from "@/stores/brands"

//pinia const
const store = useBrandsStore();
const { fetchBrands} = store;
//

//hooks
onMounted(() => {
  created.value = true;
  fetchBrands();
});

</script>

 