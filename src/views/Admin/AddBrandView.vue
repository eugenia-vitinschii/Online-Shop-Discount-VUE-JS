<template>
  <admin-header />

  <div class="add">
    <div class="container">
      <div class="add__wrapper">
        <p class="heading">Add new brand</p>
        <div class="add__content">
          <form action="" class="add__form">
            <!-- Date generale -->
            <div class="add__form-item">
              <the-input
                :label="'Introduceți id'"
                :placeholder="'Introduceți id'"
                v-model:value.trim="postBrand.id"
              />
              <the-input
                :label="'Introduceți url pentru imagine'"
                :placeholder="'//http'"
                v-model:value.trim="postBrand.img"
              />
              <the-input
                :label="'Introduceți denumirea brandului'"
                :placeholder="'Samsung'"
                v-model:value.trim="postBrand.brand"
              />
            </div>
            <the-button class="green-button" @click.prevent="addBrandData()">
              Salvează
            </the-button>
            
            <the-button class="red-button" @click="$router.go(-1)">back</the-button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineOptions, ref } from "vue";
//components
import AdminHeader from "@/components/Admin/AdminHeader.vue";
import TheInput from "@/components/TheInput.vue";

//store
import {useBrandsStore} from "@/stores/brands";
const store = useBrandsStore();
const { createBrand } = store;

// component
defineOptions({
  name: "AddBrandView",
});

//store

const postBrand = ref({
  id: "",
  img: "",
  brand: "",
});

const addBrandData = () => {
   createBrand(postBrand.value);
   postBrand.value.id = "",
   postBrand.value.img = "",
   postBrand.value.brand = ""
};
</script>