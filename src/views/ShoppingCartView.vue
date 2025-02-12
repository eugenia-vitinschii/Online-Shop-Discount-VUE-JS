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
        <div class="cart__message" v-show="user.cart.length > 1">
          <p class="heading">Coș ({{ user.cart.length }})</p>
        </div>
        <div class="cart__container">
        <div class="cart__items" v-if="created">
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
          :discountPrice="item.discountPrice"
          :savedMoney="item.savedMoney"
           @deleteItem="removeItemFromCart(item.id)"
          />

      </div>
             <!-- cart sum -->
        <div class="cart__amount" v-show="user.cart.length >= 1">
          <p class="heading">Comanda ta :</p>
          <p class="small-text">* Preturile pot fi schimbate, precizati dupa efectuarii xomenzii</p>
            <p class="body-text"> Total: {{ getSum()}} </p>
            <p class="body-text-green" > Reducere: - {{ getSavedMoney()}} </p>
            <p class="body-text-green bolt">Pret total cu reduce: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m422-232 207-248H469l29-227-185 267h139l-30 208ZM320-80l40-280H160l360-520h80l-40 320h240L400-80h-80Zm151-390Z"/></svg>{{ getDiscountPrice(getSum())(getSavedMoney())}} </p>
            <button class="green-button"> Finalizaeza comanfa </button>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

 <script setup>
//compoents
import ShoppingItem from "@/components/ShoppingItem.vue";

//vue 
import { defineOptions, ref, onMounted, onUnmounted } from "vue";
 
// store
import { useProductStore } from "@/stores/product";
import { storeToRefs } from "pinia";

    // savedMoney
    //  discountPrice

//component information
defineOptions({
  name: "ShoppingCartView",
});
let  created = ref(false)
//pinia
const store = useProductStore();

const { user } = storeToRefs(store);

const { removeItem, getSum, getSavedMoney, getDiscountPrice } = store;

// delete item from cart
function removeItemFromCart(item){
  removeItem(item)
}

//hooks  
onMounted(() => {
  created.value = true;
  console.log('onMounted shopping cart')
 
});

onUnmounted(() =>{
  created.value = false;
  console.log('onUnmounted shopping cart')
})
</script>
 
 