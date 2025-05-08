<template>
  <div>
  <admin-header />
  <!-- edit -->
  <div class="edit">
    <div class="container">
     <!-- edit title -->
    <div class="edit__title">
      <p class="heading">Lista de produse: {{ products.length }}</p>
    </div>
    <!-- edit table -->
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
            <!-- delete product -->
            <button class="red-button" @click="deleteItem(product.id)">
              Șterge
            </button>
          </td>
          <!-- edit product -->
          <td>
            <router-link class="green-button" :to="'/admin/update/' + product.id">
              Redactează
            </router-link>
          </td>
        </tr>
      </table>
    </div>
    </div>
  </div>
  <message-component :message="message">Deleted!</message-component>
  </div>
</template>

<script setup lang="ts">
//vue
import { defineOptions, ref} from "vue";

//hooks
import {onMounted } from 'vue';

//components
import MessageComponent from "@/components/Admin/MessageComponent.vue";
import AdminHeader from "@/components/Admin/AdminHeader.vue";

//pinia imports
import { useProductStore } from "@/stores/product";
import { storeToRefs } from "pinia";

//component settings
defineOptions({
  name: "EditView",
  inheritAttrs: false,
});

//pinia variables
const store = useProductStore();
const { products } = storeToRefs(store);
const { fetchProducts, deleteProducts } = store;

//variables
let message = ref<boolean>(false);
 
//delete item function 
const deleteItem = (id: string) => {
  const confirm = window.confirm("Doriți să ștergeți?");
  if (confirm) {
    deleteProducts(id);
     message.value = true,
    setTimeout(() => {
      message.value = false;   
    }, 1000);
  }
  
};

//hooks
onMounted(() => {
  fetchProducts();
});

</script>




