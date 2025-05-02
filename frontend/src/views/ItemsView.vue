<template>
  <div>
  <div class="router">
    <div class="container">
      <div class="router__wrapper">
        <the-router />
      </div>
    </div>
  </div>
  <brands-section />
  <div class="filter">
    <div class="container">
      <div class="filter__wrapper">
        <!-- filter results -->
        <div class="filter__results">
            <p class="body-text" v-if="store.allProducts > store.filteredProducts">
            Au fost găsite: {{store.filteredProducts}} produse
            <span class="body-text" v-show="checked"> {{checked}} </span>
            <span class="body-text" v-show="searchValue">  {{searchValue}}</span>
            </p> 
        </div>
        <!-- filter buttons -->
         <div class="filter__buttons">
          <!-- open checkbox filers by brand -->
          <div class="filter__buttons-item"> 
            <button class="icon-svg" @click="showFilters = !showFilters">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path
                    d="M440-160q-17 0-28.5-11.5T400-200v-240L168-736q-15-20-4.5-42t36.5-22h560q26 0 36.5 22t-4.5 42L560-440v240q0 17-11.5 28.5T520-160h-80Zm40-308 198-252H282l198 252Zm0 0Z"
                  />
                </svg>
              </button>
          </div>
          <!-- sort by price -->
          <div class="filter__buttons-item">   <button class="icon-svg" @click="ascending = !ascending">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                  >
                    <path d="M480-360 280-560h400L480-360Z" />
                  </svg>
                </button></div>
            <!-- show promo items -->
          <div class="filter__buttons-item">
              <button class="icon-svg" @click="promo= !promo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path
                    d="M441-120v-86q-53-12-91.5-46T293-348l74-30q15 48 44.5 73t77.5 25q41 0 69.5-18.5T587-356q0-35-22-55.5T463-458q-86-27-118-64.5T313-614q0-65 42-101t86-41v-84h80v84q50 8 82.5 36.5T651-650l-74 32q-12-32-34-48t-60-16q-44 0-67 19.5T393-614q0 33 30 52t104 40q69 20 104.5 63.5T667-358q0 71-42 108t-104 46v84h-80Z"
                  />
                </svg>
              </button>
          </div>
          <!-- search input -->
          <div class="filter__buttons-item">
              <input type="text" v-model="searchValue" />
          </div>
         </div>
          <!-- checkbox filers by brand -->
            <div v-if="showFilters" class="filter__checkbox">
              <div class="filter__brand">
                <p class="body-text bold">Sortează după producător</p>
                <p class="body-text-green" v-if="checked">
                  Au fost găsite: {{ store.filteredItems.length }} produse {{checked}}
                </p>
                <div class="item__filter-content">
                  <div class="checkbox-wrapper">
                    <input
                      class="inp-cbx"
                      id="indesit"
                      type="checkbox"
                      value="Indesit"
                      v-model="checked"
                    />
                    <label class="cbx" for="indesit">
                      <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                      </span>
                      <span>INDESIT</span>
                    </label>
                  </div>
                  <div class="checkbox-wrapper">
                    <input
                      class="inp-cbx"
                      id="samsung"
                      type="checkbox"
                      value="Samsung"
                      v-model="checked"
                    />
                    <label class="cbx" for="samsung">
                      <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                      </span>
                      <span>SAMSUNG</span>
                    </label>
                  </div>
                  <div class="checkbox-wrapper">
                    <input
                      class="inp-cbx"
                      id="whirlpool"
                      type="checkbox"
                      value="Whirlpool"
                      v-model="checked"
                    />
                    <label class="cbx" for="whirlpool">
                      <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                      </span>
                      <span>WHIRLPOOL</span>
                    </label>
                  </div>
                  <div class="checkbox-wrapper">
                    <input
                      class="inp-cbx"
                      id="electrolux"
                      type="checkbox"
                      value="Electrolux"
                      v-model="checked"
                    />
                    <label class="cbx" for="electrolux">
                      <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                      </span>
                      <span>ELECTROLUX</span>
                    </label>
                  </div>
                  <div class="checkbox-wrapper">
                    <input
                      class="inp-cbx"
                      id="beko"
                      type="checkbox"
                      value="Beko"
                      v-model="checked"
                    />
                    <label class="cbx" for="beko">
                      <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                      </span>
                      <span>BEKO</span>
                    </label>
                  </div>
                  <div class="checkbox-wrapper">
                    <input
                      class="inp-cbx"
                      id="aeg"
                      type="checkbox"
                      value="AEG"
                      v-model="checked"
                    />
                    <label class="cbx" for="aeg">
                      <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                      </span>
                      <span>AEG</span>
                    </label>
                  </div>
                  <div class="checkbox-wrapper">
                    <input
                      class="inp-cbx"
                      id="candy"
                      type="checkbox"
                      value="Candy"
                      v-model="checked"
                    />
                    <label class="cbx" for="candy">
                      <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                      </span>
                      <span>CANDY</span>
                    </label>
                  </div>
                </div>
              </div>
              <button class="button-svg" @click="showFilters = !showFilters">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path
                    d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
                  />
                </svg>
              </button>
            </div>
          </div>
      </div>
  </div>
  <div class="item">
    <div class="container">
      <div class="item__content">
        <div class="item__wrapper">
          <div class="item__container" v-if="created && store.filteredItems.length">
            <the-item
              v-for="product in store.filteredItems"
              :key="product.id"
              :id="product.id"
              :brand="product.brand"
              :img="product.img"
              :productName="product.productName"
              :productType="product.productType"
              :price="product.price"
              :discount="product.discount"
              :discountPrice="product.discountPrice"
              :savedMoney="product.savedMoney"
              :label="product.label"
              :stock="product.stock"
              :disabledValue="product.stock"
              :monthlyPrice="monthlyPrice(product.price)"
              :hidden="showPrices(product.discount)"
              :oldPrice="showOnePrice(product.discount)"
              :dicountLabel="dicountLabel(product.discount)"
              :hugeSaleLabel="hugeSaleLabel(product.discount)"
              @addToCard="addProductCard(product)"
              @addToFavorite="addProductToFavorite(product)"
            />
            <div class="spaces"></div>
            <div class="spaces"></div>
            <div class="spaces"></div>
            <div class="spaces"></div>
          </div>
          <div v-else class="loading">Loading products...</div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template><script setup>
//vue
import { defineOptions, ref} from "vue";
//vue hooks
import { onMounted } from "vue";

//store
import { storeToRefs } from "pinia";
import { useProductStore } from "@/stores/product";

//components
import TheRouter from "@/sections/TheRouter.vue";
import TheItem from "@/sections/TheItem.vue";
import BrandsSection from "@/sections/BrandsSection.vue";

//vue component information
defineOptions({
  name: "ItemsView",
});

//filters section
const showFilters = ref(false);

let created = ref(false);

//Pinia store

const store = useProductStore();
const { checked, searchValue, ascending, promo } = storeToRefs(store);

//pinia getters
const {
  fetchProducts,
  addToCart,
  addToFavorite,
  monthlyPrice,
  dicountLabel,
  hugeSaleLabel,
  showPrices,
  showOnePrice,
} = store;


// add product to cart
function addProductCard(product) {
  addToCart(product);
}

//add to favorite
function addProductToFavorite(product) {
  addToFavorite(product);
}

//hooks  
onMounted(async() => {
  console.log('onMounted');
   await store.fetchProducts();
  created.value = true; 
});

</script>
