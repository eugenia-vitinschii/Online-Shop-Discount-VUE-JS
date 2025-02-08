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
          <div class="cart__summ" v-show="user.cart.length >= 1">
            <p class="body-text"> Total: {{ getSum()}} </p>
            <p class="body-text-green"> Reducere: {{ getSavedMoney()}} </p>
            <p class="body-text-green">Pret total cu reduce: {{ getDiscountPrice(getSum())(getSavedMoney())}} </p>
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
  name: "ShoppingCardView",
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
 
 