<template>
<!-- shopping card view -->
  <div class="cart">
    <div class="container">
      <div class="cart__wrapper">
        <div class="cart__empty" v-show="user.cart.length < 1">
          <p class="heading">Coșul este gol!</p>
          <router-link 
          to="/items" 
          class="button">
          Vezi toate produsele
          </router-link>
        </div>
        <div class="cart__message" v-show="user.cart.length >= 1">
          <p class="heading">Coș ({{ user.cart.length }})</p>
        </div>
        <div class="cart__items">
          <!-- shopping card item  -->
          <shopping-item
            v-for="item in user.cart"
            :key="item.id"
            :img="item.img"
            :productName="item.productName"
            :brand="item.brand"
            :discount="item.discount"
            :price="item.price"

            :newPrice="getNewPrice(item)"
            :economie="getMoneySaved(item)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

 <script setup>
//compoents
import ShoppingItem from "@/components/ShoppingItem.vue";

import { defineOptions } from "vue";
 
// store
import { useProductStore } from "@/stores/product";
import { storeToRefs } from "pinia";

defineOptions({
  name: "ShoppingCardView",
});
const store = useProductStore();

const { user } = storeToRefs(store);

function getNewPrice(item) {
  let eco = Math.floor(item.price - (item.price * item.discount) / 100);
  let saved = item.price - eco;
  return saved;
}

function getMoneySaved(item) {
  let eco = Math.floor(item.price - (item.price * item.discount) / 100);
  return eco;
}

</script>
 
 