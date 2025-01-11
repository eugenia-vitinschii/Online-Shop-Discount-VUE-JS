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
            :id="item.id"
            :img="item.img"
            :productName="item.productName"
            :brand="item.brand"
            :discount="item.discount"
            :price="item.price"
          :newPrice="getNewPrice(item.price)(item.discount)"
          :saveMoney="getMoneySaved(item.price)(item.discount)"
          />
          <p class="body-text">Total: </p>
        </div>
      </div>
    </div>
  </div>
</template>

 <script setup>
//compoents
import ShoppingItem from "@/components/ShoppingItem.vue";

//vue
import { defineOptions } from "vue";
 
// store
import { useProductStore } from "@/stores/product";
import { storeToRefs } from "pinia";

//component information
defineOptions({
  name: "ShoppingCardView",
});

//pinia
const store = useProductStore();

const { user } = storeToRefs(store);

const {getMoneySaved, getNewPrice} = store;



</script>
 
 