<template>
  <admin-header />

  <div class="add">
    <div class="container">
    <div class="add__title">
      <p class="heading">
        Adauga produs nou:{{ postProducts.productName }}
      </p>
    </div>
    <div class="add__content">
      <form action="" class="add__form">
        <p class="heading">Date generale</p>
        <the-input
          :label="'Introduceți id'"
          :placeholder="'Introduceți id'"
          v-model.trim:value="postProducts.id"
        />
        <the-input
          :label="'Introduceți COD'"
          :placeholder="'DMB383292PP'"
          v-model:value.trim="postProducts.productCode"
        />
        <the-input
          :label="'Introduceți url pentru imagine'"
          :placeholder="'//http'"
          v-model:value.trim="postProducts.img"
        />
        <the-input
          :label="'Introduceți denumirea pentru produs'"
          :placeholder="'Mașină de spălat frontală Indesit'"
          v-model:value.trim="postProducts.productName"
        />
        <the-input
          :label="'Introduceți prețul produsului'"
          :placeholder="'4999'"
          v-model:value.trim="postProducts.price"
        />
        <the-input
          :label="'Introduceți procentul de reducere ( fără %)'"
          :placeholder="'17'"
          v-model:value.trim="postProducts.discount"
        />
        <p class="heading">Informația despre produs</p>
        <the-input
          :label="'Introduceți denumirea brandului pentru produs'"
          :placeholder="'Indesit'"
          v-model:value.trim="postProducts.brand"
        />
        <the-input
          :label="'Consum de apă în program, l/ciclu'"
          :placeholder="'20'"
          v-model:value.trim="postProducts.waterConsumption"
        />
        <the-input
          :label="'Clasa de eficienţă energetică'"
          :placeholder="'A++ / E (EU standard)'"
          v-model:value.trim="postProducts.energyEfficiencyClass"
        />
        <the-input
          :label="'Tip mașină de spălat'"
          :placeholder="'cu încărcare frontală'"
          v-model:value.trim="postProducts.type"
        />
        <the-input
          :label="'Viteza maximă de centrifugare, rpm'"
          :placeholder="'1000'"
          v-model:value.trim="postProducts.spinSpeed"
        />
        <the-input
          :label="'Capacitate de încărcare, kg'"
          :placeholder="'5'"
          v-model:value.trim="postProducts.loadCapacity"
        />
        <p class="heading">Caracteristici</p>
        <the-input
          :label="'Nivel de zgomot pentru centrifugare, dB'"
          :placeholder="'76'"
          v-model:value.trim="postProducts.noiseLevelCentrifugation"
        />
        <the-input
          :label="'Diapazonul nivelului de zgomot la spălare, dB'"
          :placeholder="'56-60'"
          v-model:value.trim="postProducts.noiseLevelWashing"
        />
        <the-input
          :label="'Tip control'"
          :placeholder="'electronic'"
          v-model:value.trim="postProducts.typeControl"
        />
        <the-input
          :label="'Numărul de programe'"
          :placeholder="'16'"
          v-model:value.trim="postProducts.numberOfPrograms"
        />
        <p class="heading">Dimensiuni</p>
        <the-input
          :label="'Greutate în ambalaj, kg'"
          :placeholder="'63'"
          v-model:value.trim="postProducts.weightInPackage"
        />
        <the-input
          :label="'Adâncime, cm'"
          :placeholder="'43'"
          v-model:value.trim="postProducts.depth"
        />
        <the-input
          :label="'Greutate, kg'"
          :placeholder="'61'"
          v-model:value.trim="postProducts.weight"
        />
        <p class="heading">Informaţii generale</p>
        <the-input
          :label="'Culoare'"
          :placeholder="' alb'"
          v-model:value.trim="postProducts.color"
        />
        <the-input
          :label="'Ţara de asamblare'"
          :placeholder="'Polonia'"
          v-model:value.trim="postProducts.countryOfAssembly"
        />
        <the-input
          :label="'Garanţie, luni'"
          :placeholder="'36'"
          v-model:value.trim="postProducts.guarantee"
        />
        <the-button class="green-button" @click.prevent="addPostData()"> Salvează </the-button>
        <the-button class="red-button" @click="goBack()">Acasă</the-button>
      </form>
    </div>
  </div>
  </div>
</template>
 
  

<script setup>
//vue
import { defineOptions, ref } from "vue";
// componets
import TheInput from "@/components/TheInput.vue";
import TheButton from "@/components/TheButton.vue";
import AdminHeader from "@/components/Admin/AdminHeader.vue";

// store
import { useProductStore } from "@/stores/product";

defineOptions({
  name: "AddProductView",
});

const store = useProductStore();
const { createProduct } = store;

const postProducts = ref({
  id: '',
  productCode: '',
  img:'',
  productName: '',
  price: '',
  discount: '',
  brand: '',
  waterConsumption: '',
  energyEfficiencyClass: '',
  type: '',
  spinSpeed: '',
  loadCapacity:'',
  noiseLevelCentrifugation:'',
  noiseLevelWashing: '',
  typeControl: '',
  numberOfPrograms: '',
  weightInPackage: '',
  depth: '',
  weight: '',
  color: '',
  countryOfAssembly: '',
  guarantee: '',
});

const addPostData = () => {
  createProduct(postProducts.value);
  postProducts.value.id = "";
  (postProducts.value.size = {
    height: "",
    width: "",
    depth: "",
    weight: "",
  }),
    (postProducts.value.general = {
      productCode: "",
      img: "",
      productName: "",
      price: "",
      discount: "",
      brand: "",
    }),
    (postProducts.value.guarantee = {
      color: "",
      countryOfAssembly: "",
      guarantee: "",
    }),
    (postProducts.value.washer = {
      waterConsumption: "",
      energyEfficiencyClass: "",
      type: "",
      spinSpeed: "",
      loadCapacity: "",
      noiseLevelCentrifugation: "",
      noiseLevelWashing: "",
      typeControl: "",
      numberOfPrograms: "",
    });
     (postProducts.value.refrigerator={
    data: '',
    test: ''
  });
};
</script>

