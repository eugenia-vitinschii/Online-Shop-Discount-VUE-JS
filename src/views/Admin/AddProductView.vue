<template>
  <admin-header />

  <div class="add">
    <div class="container">
      <div class="add__title">
        <p class="heading">Adauga produs nou:{{ postProducts.productName }}</p>
      </div>
      <div class="add__content">
        <form action="" class="add__form">
          <!-- Date generale -->
          <div class="add__form-item">
            <div class="input__wrapper">
              <label for="stock">Stock {{ postProducts.stock }}</label>
              <input
                type="checkbox"
                name="stock"
                id="stock"
                v-model="postProducts.stock"
                checked
              />
            </div>
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
              v-model:value.number="postProducts.price"
            />
            <div class="input__wrapper">
              <p class="body-text">Reducere</p>
              <input type="checkbox" v-model="discountPrice" switch />
            </div>
            <the-input
              v-show="discountPrice"
              :label="'Introduceți procentul de reducere ( fără %)'"
              :placeholder="'17'"
              v-model:value.number="postProducts.discount"
            />
          </div>
          <!-- Informația despre produs -->
          <div class="add__form-item">
            <p class="heading">Informația despre produs</p>
            <!-- brand -->
            <div class="input__wrapper">
              <label for="brand">Brand</label>
              <select name="brand" id="brand" v-model="postProducts.brand">
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
              v-model:value.trim="postProducts.waterConsumption"
            />
            <div class="input__wrapper">
              <label for="energyEfficiencyClass"
                >Clasa de eficienţă energetică</label
              >
              <select
                name="energyEfficiencyClass"
                id="energyEfficiencyClass"
                v-model="postProducts.energyEfficiencyClass"
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
              <select name="type" id="type" v-model="postProducts.type">
                <option value="cu încărcare frontală">
                  cu încărcare frontală
                </option>
                <option value="verticală">verticală</option>
              </select>
            </div>
            <div class="input__wrapper">
              <label for="spinSpeed">Viteza maximă de centrifugare, rpm</label>
              <select
                name="spinSpeed"
                id="spinSpeed"
                v-model="postProducts.spinSpeed"
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
              v-model:value.trim="postProducts.loadCapacity"
            />
          </div>
          <!-- Caracteristici -->
          <div class="add__form-item">
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
            <div class="input__wrapper">
              <label for="typeControl">Tip control</label>
              <select
                name="typeControl"
                id="typeControl"
                v-model="postProducts.typeControl"
              >
                <option value="electronic">electronic</option>
                <option value="senzor">senzor</option>
                <option value="mecanic">mecanic</option>
              </select>
            </div>
            <the-input
              :label="'Numărul de programe'"
              :placeholder="'16'"
              v-model:value.trim="postProducts.numberOfPrograms"
            />
          </div>
          <!-- Dimensiuni -->
          <div class="add__form-item">
            <p class="heading">Dimensiuni</p>
            <the-input
              :label="'Greutate în ambalaj, kg'"
              :placeholder="'63'"
              v-model:value.trim="postProducts.weightInPackage"
            />
            <the-input
              :label="'Greutate, kg'"
              :placeholder="'61'"
              v-model:value.trim="postProducts.weight"
            />
            <the-input
              :label="'Dimensiuni (ÎxLxA), cm'"
              :placeholder="'85x60x55'"
              v-model:value.trim="postProducts.depth"
            />
            <p class="heading">Informaţii generale</p>
            <div class="input__wrapper">
              <label for="color">Culoare</label>
              <select name="color" id="color" v-model="postProducts.color">
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
                v-model="postProducts.countryOfAssembly"
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
                v-model="postProducts.guarantee"
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

          <the-button class="green-button" @click.prevent="addPostData()">
            Salvează
          </the-button>
           <router-link class="red-button" to="/admin/panel"
            >Acasă</router-link>
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

//import product constructor
import {Product} from "@/models/product"


//variables
const postProducts = ref(new Product())
const discountPrice = ref(false)

//component settings
defineOptions({
  name: "AddProductView",
});

//store variables
const store = useProductStore();
const { createProduct } = store;

//store functions
const addPostData = () => {
  createProduct(postProducts.value);
  postProducts.value = new Product();
};

</script>

