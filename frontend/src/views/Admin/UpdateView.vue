<template>
  <div>

  <admin-header />
  <div class="container">
    <div class="update">
      <div class="update__title">
        <p class="heading">Editeaza produsul {{ product.productName }}</p>
      </div>
      <div class="update__content">
        <form class="update__form">
          <!-- Date generale -->
          <div class="update__form-item">
             <div class="input__wrapper">
              <label for="stock">In Stock</label>
            <input type="checkbox" name="stock" id="stock" v-model="product.stock"  checked>
            </div>
            <p class="heading">Date generale</p>
            <the-input
              :label="'Introduceți id'"
              :placeholder="'Introduceți id'"
              v-model:value.trim="product.id"
            />
            <the-input
              :label="'Introduceți COD'"
              :placeholder="'DMB383292PP'"
              v-model:value.trim="product.productCode"
            />
            <the-input
              :label="'Introduceți url pentru imagine'"
              :placeholder="'//http'"
              v-model:value.trim="product.img"
            />
            <the-input
              :label="'Introduceți denumirea pentru produs'"
              :placeholder="'Mașină de spălat frontală Indesit'"
              v-model:value.trim="product.productName"
            />
            <the-input
              :label="'Introduceți prețul produsului'"
              :placeholder="'4999'"
              v-model:value.number="product.price"
            />
              <div class="input__wrapper">
              <p class="body-text">Reducere  {{discountPrice}} </p>
              <input type="checkbox" v-model="discountPrice"  switch checked disabled />
            </div>
             <the-input
              v-show="discountPrice"
              :label="'Introduceți procentul de reducere ( fără %)'"
              :placeholder="'17'"
              v-model:value.number="product.discount"
            />
          </div>
            <div class="input__wrapper" v-show="discountPrice">
              <p class="body-text">
                Saved money {{product.savedMoney}}
              </p>
              <p class="body-text">
                Discount Price {{ product.discountPrice}}
              </p>
            </div>
          <!-- Informația despre produs -->
          <div class="update__form-item">
            <p class="heading">Informația despre produs</p>
            <div class="input__wrapper">
              <label for="brand">Brand</label>
              <select name="brand" id="brand" v-model="product.brand">
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
              v-model:value.trim="product.waterConsumption"
            />

            <div class="input__wrapper">
              <label for="energyEfficiencyClass"
                >Clasa de eficienţă energetică</label
              >
              <select
                name="energyEfficiencyClass"
                id="energyEfficiencyClass"
                v-model="product.energyEfficiencyClass"
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
              <select name="type" id="type" v-model="product.type">
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
                v-model="product.spinSpeed"
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
              v-model:value.trim="product.loadCapacity"
            />
          </div>
          <!-- Caracteristici -->
          <div class="update__form-item">
            <p class="heading">Caracteristici</p>
            <the-input
              :label="'Nivel de zgomot pentru centrifugare, dB'"
              :placeholder="'76'"
              v-model:value.trim="product.noiseLevelCentrifugation"
            />
            <the-input
              :label="'Diapazonul nivelului de zgomot la spălare, dB'"
              :placeholder="'56-60'"
              v-model:value.trim="product.noiseLevelWashing"
            />
            <div class="input__wrapper">
              <label for="typeControl">Tip control</label>
              <select
                name="typeControl"
                id="typeControl"
                v-model="product.typeControl"
              >
                <option value="electronic">electronic</option>
                <option value="senzor">senzor</option>
                <option value="mecanic">mecanic</option>
              </select>
            </div>
            <the-input
              :label="'Numărul de programe'"
              :placeholder="'16'"
              v-model:value.trim="product.numberOfPrograms"
            />
          </div>
          <!-- Dimensiuni -->
          <div class="update__form-item">
            <p class="heading">Dimensiuni</p>
            <the-input
              :label="'Greutate în ambalaj, kg'"
              :placeholder="'63'"
              v-model:value.trim="product.weightInPackage"
            />
             <the-input
              :label="'Greutate, kg'"
              :placeholder="'61'"
              v-model:value.trim="product.weight"
            />
            <the-input
              :label="'Dimensiuni (ÎxLxA), cm'"
              :placeholder="'85x60x55'"
              v-model:value.trim="product.depth"
            />
           
            <!-- Informaţii generale -->
            <div class="update__form-item">
              <p lass="heading">Informaţii generale</p>
              <div class="input__wrapper">
                <label for="color">Culoare</label>
                <select name="color" id="color" v-model="product.color">
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
                  v-model="product.countryOfAssembly"
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
                v-model="product.guarantee"
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

  </div>
</template> 

<script setup>
//components
import TheButton from "@/components/TheButton.vue";
import TheInput from "@/components/TheInput.vue";
import AdminHeader from "@/components/Admin/AdminHeader.vue";
import MessageComponent from "@/components/Admin/MessageComponent.vue";

//vue
import { defineOptions , ref, onMounted, computed, watch } from "vue";

//router
import { useRoute } from "vue-router";


//pinia
import { useProductStore } from "@/stores/product";
import { storeToRefs } from "pinia";

//component settings
defineOptions({
  name: "UpdateView",
  inheritAttrs: false,
});

//pinia variables
const store = useProductStore();
const { getProducts, updateProducts } = store;
const { products } = storeToRefs(store);

//router variables
const route = useRoute();

const id = route.params.id;  

//variables
const product = computed(() => products.value.find(p => p.id === id));


let discountPrice = ref(true);
console.log("Product ID:", id);

let message = ref(false);

//functions 
function updateItem() {
  updateProducts(id);
}

//watch title 
watch(() => route.params.productName, (newName) => {
  document.title = `${newName}`
})

onMounted(() => {
  document.title = `${route.params.productName}`,
  getProducts(id);
});
</script>