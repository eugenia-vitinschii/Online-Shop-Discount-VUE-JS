<template>
  <admin-header />
  <div class="edit">
    <div class="container">
    <div class="edit__title">
      <p class="heading">Lista de produse: {{ products.length }}</p>
    </div>
    <div class="edit__content">
      <table class="edit__table">
        <tr>
          <th>COD</th>
          <th>Name</th>
          <th>Preț</th>
          <th>Reducere</th>
          <th>Șterge</th>
          <th>Redactează</th>
        </tr>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.productCode }}</td>
          <td>{{ product.productName }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.discount }}</td>
          <td>
            <button class="red-button" @click="deleteItem(product.id)">
              Șterge
            </button>
          </td>
          <td>
            <router-link class="green-button" :to="'/update/' + product.id">
              Redactează
            </router-link>
          </td>
        </tr>
      </table>
    </div>
    </div>
  </div>
  <message-component :message="message">Deleted!</message-component>

</template>


<script setup>
import MessageComponent from "@/components/Admin/MessageComponent.vue";
import AdminHeader from "@/components/Admin/AdminHeader.vue";

 

import { useProductStore } from "@/stores/product";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
 import {ref} from 'vue';
import { defineOptions } from "vue";

defineOptions({
  name: "EditView",
  inheritAttrs: false,
});

const store = useProductStore();

const { products } = storeToRefs(store);
const { fetchProducts, deleteProducts } = store;

let message = ref (false) ;
 

onMounted(() => {
  fetchProducts();
});

const deleteItem = (id) => {
  const confirm = window.confirm("Doriți să ștergeți?");
  if (confirm) {
    deleteProducts(id);
     message.value = true,
    setTimeout(() => {
      message.value = false;   
    }, 1000);
  }
  
};
</script>




