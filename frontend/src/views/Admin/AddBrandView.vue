<template>
  <admin-header />
<!-- create brand -->
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
            <!-- save new brand -->
            <the-button class="green-button" @click.prevent="addBrandData()">
              Salvează
            </the-button>
            <!-- go home  -->
             <router-link class="red-button" to="/admin/edit"
            >Acasă</router-link>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//vue
import { defineOptions, ref } from "vue";

//components
import AdminHeader from "@/components/Admin/AdminHeader.vue";
import TheInput from "@/components/TheInput.vue";

//store
import {useBrandsStore} from "@/stores/brands";

//pinia variables
const store = useBrandsStore();
const { createBrand } = store;

// component
defineOptions({
  name: "AddBrandView",
});

//create bnrad
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