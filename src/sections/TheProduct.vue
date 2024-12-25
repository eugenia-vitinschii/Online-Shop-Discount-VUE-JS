<template>
  <div class="product__item">
    <!-- Short info about product -->
        <div class="product__top">
      <div class="product__top-logo">
        <router-link :to="'/brand/' + brand" class="body-text">
            {{ brand }}
          </router-link>
      </div>
      <!-- labels for dicsount products -->
      <div class="product__top-labels">
        <div class="product__top-label" :class="{ visible: hugeSaleLabel }">
          <img src="@/assets/img/sale.jpg" alt="oops!" />
        </div>
        <div class="product__top-label" :class="{ visible: dicountLabel }">
          <img src="@/assets/img/discount.jpg" alt="oops!" />
        </div>
      </div>
    </div>
    <div class="product__short">
      
      <!-- Img -->
      <div class="product__img">
        <img :src="img" alt="no img" />
      </div>
      <div class="product__prices">
        <!-- Wrapper for Discount & Credit prices -->
        <div class="product__promo">
          <!-- Discount  Price -->
          <div class="product__name">
            <p class="subheading"> {{productType}} {{productName}}</p>
          </div>
          <div class="product__price">
            <div class="product__price-value">
              
              <p class="body-text bold" :class="{oldPrice: !hidden }">
                {{ price }} lei
              </p>
              <p class="body-text bold " :class="{ hidden: hidden }">
               {{ newPrice }} lei
              </p>
            </div>
            <div class="product__price-value" :class="{ hidden: hidden }">
              <p class="body-text-red">
                Reducere <span class="bold">{{ discount }}%</span>
              </p>
              <p class="body-text-green">
                Economie <span class="bold">{{ economie }}lei! </span>
              </p>
            </div>
          </div>
 
        </div>
            <!-- Add to card & Favorite -->
    <div class="product__buttons">
      <div class="product__buttons-credit">
        <p class="body-text">
          De la <span class="bold">{{ monthlyPrice }} lei </span> /lunar
        </p>
      </div>
<div class="product__buttons-action">
      <button class="button-svg"  @click="$emit('addToCard')">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>

      </button>
      <button
        class="button-svg"
        @click="$emit('addToFavorite', 'selected   = ! selected  ')"
         
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
      </button>
      </div>

    </div>
        <!-- Price credit  -->
        <div class="product__credit">
          <the-button
            v-for="item in testCredit"
            :key="item"
            :class="['button', { active: currentTab === item.tab }]"
            @click="currentTab = item.tab"
          >
            {{ item.name }}
          </the-button>
          
          <component :is="currentTab" />
        </div>
        <the-info/>
      </div>
    </div>
    <div class="product__decription">
      <table class="product__decription-table">
        <tr> 
          <th>Informația despre produs</th>
          <th></th>
        </tr>
        <tr>
          <td>Brand</td>
          <td class="small-text">{{ brand }}</td>
        </tr>
        <tr>
          <td>Consum de apă în program, l/ciclu</td>
          <td>{{ waterConsumption }}</td>
        </tr>
        <tr>
          <td>Clasa de eficienţă energetică</td>
          <td>{{ energyEfficiencyClass }}</td>
        </tr>
        <tr>
          <td>Tip mașină de spălat</td>
          <td>{{ type }}</td>
        </tr>
        <tr>
          <td>Viteza maximă de centrifugare, rpm</td>
          <td>{{ spinSpeed }}</td>
        </tr>
        <tr>
          <td>Capacitate de încărcare, kg</td>
          <td>{{ loadCapacity }}</td>
        </tr>
        <tr>
          <th>Caracteristici</th>
          <th></th>
        </tr>
        <tr>
          <td>Nivel de zgomot pentru centrifugare, dB</td>
          <td>{{ noiseLevelCentrifugation }}</td>
        </tr>
        <tr>
          <td>Diapazonul nivelului de zgomot la spălare, dB</td>
          <td>{{ noiseLevelWashing }}</td>
        </tr>
        <tr>
          <td>Tip control</td>
          <td>{{ typeControl }}</td>
        </tr>
        <tr>
          <td>Numărul de programe</td>
          <td>{{ numberOfPrograms }}</td>
        </tr>        
      </table>
      <table class="product__decription-table">
        <tr>
          <th>Dimensiuni</th>
          <th></th>
        </tr>
        <tr>
          <td>Greutate în ambalaj, kg</td>
          <td>{{ weightInPackage }}</td>
        </tr>
        <tr>
          <td>Adâncime, cm</td>
          <td>{{ depth }}</td>
        </tr>
        <tr>
          <td>Greutate, kg</td>
          <td>{{ weight }}</td>
        </tr>
        <tr>
          <th>Informaţii generale</th>
          <th></th>
        </tr>
        <tr>
          <td>Culoare</td>
          <td>{{ color }}</td>
        </tr>
        <tr>
          <td>Ţara de asamblare</td>
          <td>{{ countryOfAssembly }}</td>
        </tr>
        <tr>
          <td>Garanţie, luni</td>
          <td>{{ guarantee }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
 

<script setup>
//vue
import { defineOptions, defineProps, shallowRef} from "vue";
//components
import TheButton from "../components/TheButton.vue";
import InstallmentPayment from "./InstallmentPayment.vue";
import CreditPayment from "./CreditPayment.vue";
import TheInfo from "./TheInfo.vue"


defineOptions({
  name: "TheProduct",
});

const currentTab = shallowRef("InstallmentPayment");

const testCredit = [
  {
    tab: InstallmentPayment,
    name: "În rate",
  },
  {
    tab: CreditPayment,
    name: "Credit",
  },
];

defineProps({
  id: {
    type: String,
  },
  productCode: {
    type: String,
  },
  img: {
    type: String,
  },
  productType: {
    type: String,
  },
  productName: {
    type: String,
  },
  price: {
    type: String,
  },
  discount: {
    type:String,
  },
  brand: {
    type: String,
  },
  waterConsumption: {
    type: String,
  },
  energyEfficiencyClass: {
    type: String,
  },
  type: {
    type: String,
  },
  spinSpeed: {
    type: String,
  },
  loadCapacity: {
    type: String,
  },
  noiseLevelCentrifugation: {
    type: String,
  },
  noiseLevelWashing: {
    type: String,
  },
  typeControl: {
    type: String,
  },
  numberOfPrograms: {
    type: String,
  },
  weightInPackage: {
    type: String,
  },
  depth: {
    type: String,
  },
  weight: {
    type: String,
  },
  color: {
    type: String,
  },
  countryOfAssembly: {
    type: String,
  },
  guarantee: {
    type: String,
  },
  newPrice: {
    type: Number,
  },
  economie: {
    type: Number,
    default: null,
  },
  totalCreditPrice: {
    type: Number,
    default: null,
  },
  hidden: {
    type: Boolean,
    default: false,
  },
  oldPrice: {
    type: Boolean,
    default: false,
  },
  monthlyPrice: {
    type: Number,
    default: null,
  },
   hugeSaleLabel: {
    type: Boolean,
    default: false,
  },
  dicountLabel: {
    type: Boolean,
    default: false,
  },
});
</script>




