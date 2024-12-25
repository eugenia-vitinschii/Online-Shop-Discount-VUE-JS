<template>
  <admin-header />
  <div class="container">
    <div class="update">
      <div class="update__title">
        <p class="heading">
          Editeaza produsul   {{ products.productName }}
        </p>
      </div>
      <div class="update__content">
        <form class="update__form">
          <p class="heading">Date generale</p>
          <the-input
            :label="'Introduceți id'"
            :placeholder="'Introduceți id'"
            v-model:value.trim="products.id"
          />
          <the-input
            :label="'Introduceți COD'"
            :placeholder="'DMB383292PP'"
            v-model:value.trim="products.productCode"
          />
          <the-input
            :label="'Introduceți url pentru imagine'"
            :placeholder="'//http'"
            v-model:value.trim="products.img"
          />
          <the-input
            :label="'Introduceți denumirea pentru produs'"
            :placeholder="'Mașină de spălat frontală Indesit'"
            v-model:value.trim="products.productName"
          />
          <the-input
            :label="'Introduceți prețul produsului'"
            :placeholder="'4999'"
            v-model:value.trim="products.price"
          />
          <the-input
            :label="'Introduceți procentul de reducere ( fără %)'"
            :placeholder="'17'"
            v-model:value.trim="products.discount"
          />
          <p class="heading">Informația despre produs</p>
          <the-input
            :label="'Introduceți denumirea brandului pentru produs'"
            :placeholder="'Indesit'"
            v-model:value.trim="products.brand"
          />
          <the-input
            :label="'Consum de apă în program, l/ciclu'"
            :placeholder="'20'"
            v-model:value.trim="products.waterConsumption"
          />
          <the-input
            :label="'Clasa de eficienţă energetică'"
            :placeholder="'A++ / E (EU standard)'"
            v-model:value.trim="products.energyEfficiencyClass"
          />
          <the-input
            :label="'Tip mașină de spălat'"
            :placeholder="'cu încărcare frontală'"
            v-model:value.trim="products.type"
          />
          <the-input
            :label="'Viteza maximă de centrifugare, rpm'"
            :placeholder="'1000'"
            v-model:value.trim="products.spinSpeed"
          />
          <the-input
            :label="'Capacitate de încărcare, kg'"
            :placeholder="'5'"
            v-model:value.trim="products.loadCapacity"
          />
          <p class="heading">Caracteristici</p>
          <the-input
            :label="'Nivel de zgomot pentru centrifugare, dB'"
            :placeholder="'76'"
            v-model:value.trim="products.noiseLevelCentrifugation"
          />
          <the-input
            :label="'Diapazonul nivelului de zgomot la spălare, dB'"
            :placeholder="'56-60'"
            v-model:value.trim="products.noiseLevelWashing"
          />
          <the-input
            :label="'Tip control'"
            :placeholder="'electronic'"
            v-model:value.trim="products.typeControl"
          />
          <the-input
            :label="'Numărul de programe'"
            :placeholder="'16'"
            v-model:value.trim="products.numberOfPrograms"
          />
          <p class="heading">Dimensiuni</p>
          <the-input
            :label="'Greutate în ambalaj, kg'"
            :placeholder="'63'"
            v-model:value.trim="products.weightInPackage"
          />
          <the-input
            :label="'Adâncime, cm'"
            :placeholder="'43'"
            v-model:value.trim="products.depth"
          />
          <the-input
            :label="'Greutate, kg'"
            :placeholder="'61'"
            v-model:value.trim="products.weight"
          />
          <p lass="heading">Informaţii generale</p>
          <the-input
            :label="'Culoare'"
            :placeholder="' alb'"
            v-model:value.trim="products.color"
          />
          <the-input
            :label="'Ţara de asamblare'"
            :placeholder="'Polonia'"
            v-model:value.trim="products.countryOfAssembly"
          />
          <the-input
            :label="'Garanţie, luni'"
            :placeholder="'36'"
            v-model:value.trim="products.guarantee"
          />
          <the-button class="green-button" @click="updateItem()">
            Salvează
          </the-button>
          <router-link class="red-button" to="/edit-product"
            >Innapoi</router-link
          >
        </form>
      </div>
 
    </div>
  </div>
  <message-component :message="message">Edited!</message-component>
</template>
 

<script setup>

import TheButton from "@/components/TheButton.vue";
import TheInput from "@/components/TheInput.vue";
import AdminHeader from "@/components/Admin/AdminHeader.vue";
import MessageComponent from "@/components/Admin/MessageComponent.vue";


import { useProductStore } from "@/stores/product";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { defineOptions } from "vue";
import {ref} from 'vue';


defineOptions({
  name: "UpdateView",
  inheritAttrs: false,
});

const store = useProductStore();

const { getProducts, updateProducts } = store;

const { products } = storeToRefs(store);

const route = useRoute();

const id = route.params.id;

let message = ref (false) ;
console.log(message);

function updateItem() {
  updateProducts(id);
}

onMounted(() => {
  getProducts(id);
});
</script>