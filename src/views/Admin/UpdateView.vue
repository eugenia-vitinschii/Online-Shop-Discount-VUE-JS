<template>
  <admin-header />
  <div class="container">
    <div class="update">
      <div class="update__title">
        <p class="heading">Editeaza produsul {{ products.productName }}</p>
      </div>
      <div class="update__content">
        <form class="update__form">
          <!-- Date generale -->
          <div class="update__form-item">
             <div class="input__wrapper">
              <label for="stock">In Stock</label>
            <input type="checkbox" name="stock" id="stock" v-model="products.stock"  checked>
            </div>
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
              v-model:value.number="products.price"
            />
              <div class="input__wrapper">
              <p class="body-text">Reducere  {{discountPrice}} </p>
              <input type="checkbox" v-model="discountPrice"  switch checked disabled />
            </div>
             <the-input
              v-show="discountPrice"
              :label="'Introduceți procentul de reducere ( fără %)'"
              :placeholder="'17'"
              v-model:value.number="products.discount"
            />
          </div>
            <div class="input__wrapper" v-show="discountPrice">
              <p class="body-text">
                Saved money  Saved money {{products.savedMoney}} {{ getMoneySaved(products.price)(products.discount) }}
              </p>
              <p class="body-text">
                Discount Price {{ products.discountPrice}}
                {{ getNewPrice(products.price)(products.discount) }}
              </p>
            </div>
          <!-- Informația despre produs -->
          <div class="update__form-item">
            <p class="heading">Informația despre produs</p>
            <div class="input__wrapper">
              <label for="brand">Brand</label>
              <select name="brand" id="brand" v-model="products.brand">
                <option value="AEG">AEG</option>
                <option value="Indesit">Indesit</option>
                <option value="Beko">Beko</option>
                <option value="Whirlpool">Whirlpool</option>
                <option value="Samsung">Samsung</option>
                <option value="Electrolux">Electrolux</option>
                <option value="Candy">Candy</option>
              </select>
            </div>
            <the-input
              :label="'Consum de apă în program, l/ciclu'"
              :placeholder="'20'"
              v-model:value.trim="products.waterConsumption"
            />

            <div class="input__wrapper">
              <label for="energyEfficiencyClass"
                >Clasa de eficienţă energetică</label
              >
              <select
                name="energyEfficiencyClass"
                id="energyEfficiencyClass"
                v-model="products.energyEfficiencyClass"
              >
                <option value="A">A</option>
                <option value="A++">A++</option>
                <option value="A+++">A+++</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
              </select>
            </div>
            <div class="input__wrapper">
              <label for="type">Tip mașină de spălat</label>
              <select name="type" id="type" v-model="products.type">
                <option value="cu încărcare frontală">
                  cu încărcare frontală
                </option>
                <option value="verticală">verticală</option>
              </select>
            </div>
                           <div class="input__wrapper">
              <label for="spinSpeed"
                >Viteza maximă de centrifugare, rpm</label
              >
              <select
                name="spinSpeed"
                id="spinSpeed"
                v-model="products.spinSpeed"
              >
                <option value="1000">1000</option>
                <option value="1200">1200</option>
                <option value="1350">1350</option>
                <option value="1400">1400</option>
                <option value="1600">1600</option>

              </select>
            </div>
            <the-input
              :label="'Capacitate de încărcare, kg'"
              :placeholder="'5'"
              v-model:value.trim="products.loadCapacity"
            />
          </div>
          <!-- Caracteristici -->
          <div class="update__form-item">
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
            <div class="input__wrapper">
              <label for="typeControl">Tip control</label>
              <select
                name="typeControl"
                id="typeControl"
                v-model="products.typeControl"
              >
                <option value="electronic">electronic</option>
                <option value="senzor">senzor</option>
                <option value="mecanic">mecanic</option>
              </select>
            </div>
            <the-input
              :label="'Numărul de programe'"
              :placeholder="'16'"
              v-model:value.trim="products.numberOfPrograms"
            />
          </div>
          <!-- Dimensiuni -->
          <div class="update__form-item">
            <p class="heading">Dimensiuni</p>
            <the-input
              :label="'Greutate în ambalaj, kg'"
              :placeholder="'63'"
              v-model:value.trim="products.weightInPackage"
            />
             <the-input
              :label="'Greutate, kg'"
              :placeholder="'61'"
              v-model:value.trim="products.weight"
            />
            <the-input
              :label="'Dimensiuni (ÎxLxA), cm'"
              :placeholder="'85x60x55'"
              v-model:value.trim="products.depth"
            />
           
            <!-- Informaţii generale -->
            <div class="update__form-item">
              <p lass="heading">Informaţii generale</p>
              <div class="input__wrapper">
                <label for="color">Culoare</label>
                <select name="color" id="color" v-model="products.color">
                                  <option value="alb">alb</option>
                <option value="alb/argintiu">alb / argintiu</option>
                <option value="alb/negru">alb /n egru</option>
                <option value="alb/sur">alb / sur</option>
                <option value="argintiu">argintiu</option>
                <option value="sur">sur</option>
                <option value="negru">negru</option>
                </select>
              </div>
              <div class="input__wrapper">
                <label for="country">Ţara de asamblare</label>
                <select
                  name="country"
                  id="country"
                  v-model="products.countryOfAssembly"
                >
                  <option value="Polonia">Polonia</option>
                  <option value="România">România</option>
                  <option value="Slovenia">Slovenia</option>
                  <option value="Turcia">Turcia</option>
                  <option value="China">China</option>
                  <option value="Italia">Italia</option>
                  <option value="USA">USA</option>
                </select>
              </div>
                       <div class="input__wrapper">
              <label for="guarantee">Garanţie, lunie</label>
              <select
                name="guarantee"
                id="guarantee"
                v-model="products.guarantee"
              >
              <option value="12">12</option>
                <option value="24">24</option>
                <option value="36">36</option>
                <option value="60">60</option>
                <option value="120">120</option>
                <option value="240">240</option>
              </select>
            </div>
            </div>
          </div>
          <the-button class="green-button" @click="updateItem()">
            Salvează
          </the-button>
          <router-link class="red-button" to="/admin/edit"
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
import { ref } from "vue";

defineOptions({
  name: "UpdateView",
  inheritAttrs: false,
});

const store = useProductStore();

const { getProducts, updateProducts } = store;

const { products } = storeToRefs(store);

const route = useRoute();

const id = route.params.id;

// varuiable
let discountPrice = ref(true);

// function enableDiscount(discount){
//   if (discount > 0){
//     return discountPrice.value = true
//   } else{
//     return discountPrice.value = false
//   }
// }

let message = ref(false);
console.log(message);
//functions 

// amount of saved money
function getMoneySaved(price) {
  return (discount) => {
    if (discount > 0) {
      products.value.savedMoney = Math.floor(
        price - (price - (price * discount) / 100)
      );
    } else {
      return products.value.savedMoney = 0
    }
  };
}

//discountPrice
function getNewPrice(price) {
  return (discount) => {
    if (discount > 0) {
      products.value.discountPrice = Math.floor(
        +price - (price * discount) / 100
      );
    } else {
      return  products.value.discountPrice = 0
    }
  };
}

function updateItem() {
  updateProducts(id);
}

onMounted(() => {
  getProducts(id);
});
</script>