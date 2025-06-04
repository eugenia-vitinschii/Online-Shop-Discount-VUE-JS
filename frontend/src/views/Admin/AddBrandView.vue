<template>
  <div>
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
                v-model.trim="postBrand.id"
              />
              <the-input
                :label="'Introduceți url pentru imagine'"
                :placeholder="'//http'"
                v-model.trim="postBrand.img"
              />
              <the-input
                :label="'Introduceți denumirea brandului'"
                :placeholder="'Samsung'"
                v-model.trim="postBrand.brand"
              />
            </div>
            <div class="add__form-button">
                          <!-- save new brand -->
            <the-button class="green-button" @click.prevent="addBrandData()">
              Salvează
            </the-button>
            <!-- go home  -->
             <router-link class="red-button" to="/admin/edit"
            >Acasă</router-link>
            </div>

          </form>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
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

//brand interface
interface Brand {
  id: string;
  img: string;
  brand: string;
}

//create bnrad
const postBrand = ref<Brand>({
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