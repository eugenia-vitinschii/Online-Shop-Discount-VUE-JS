<template>
<div class="brands"> 
   <div class="container">
      <div class="brands__wrapper">
         <p class="heading">ALL Brands</p>
         <div class="brands__content">
            <div class="brands__item">
               <brand-section-item
            v-for="item in store.brands"
            :key="item.id"
            :id="item.id"
            :img="item.img"
            :brand="item.brand"
          />
            </div>
  
         </div>
      </div>
   </div>
</div>
</template>

<script setup>
 //vue
 import {defineOptions} from "vue"

//hooks
import { onMounted} from "vue"

//components
import BrandSectionItem from "@/sections/BrandSectionItem.vue";

//component settings
 defineOptions({
   name: "BrandsView"
 })

//pinia store
import { useBrandsStore} from "@/stores/brands";

//pinia variables
const store = useBrandsStore();
const {fetchBrands} = store;


//hookrs
onMounted(() => {
   fetchBrands();
})

</script>
