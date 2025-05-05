<template>
<!-- shopping card view -->
  <div class="cart">
    <div class="container">
      <div class="cart__wrapper">
        <div class="cart__empty" v-show="user.cart.length < 1">
          <p class="heading">Coșul este gol!</p>
          <router-link 
          to="/products" 
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
            :quantity="item.quantity"
          :discountPrice="item.discountPrice"
          :savedMoney="item.savedMoney"
          @increment="incrementQuantity(item.id)"
          @decrement="decrementQuantity(item.id)"
           @deleteItem="removeItemFromCart"
          />

      </div>
             <!-- cart sum -->
             <div class="cart__amount">
                      <div class="cart__amount--wrapper" v-show="user.cart.length >= 1">
          <p class="heading">Comanda ta :</p>
          <p class="small-text">*Disponibilitatea produselor, prețul și condițiile de livrare, verificați vorbind cu consultantul.</p>
          <table>
            <tr>
              <td class="body-text"> Total: </td>
              <td class="body-text">{{ getSum()}}</td>
            </tr>
            <tr v-show="getSavedMoney() > 1">
              <td class="body-text"> Reducere:</td>
              <td class="body-text-green"> - {{ getSavedMoney()}}</td>
            </tr>
            <tr v-show="getSavedMoney() > 1">
              <td class="body-text">Pret total cu reduce:</td>
              <td class="body-text-green bolt "> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m422-232 207-248H469l29-227-185 267h139l-30 208ZM320-80l40-280H160l360-520h80l-40 320h240L400-80h-80Zm151-390Z"/></svg>
              {{ getDiscountPrice(getSum())(getSavedMoney())}} 
              </td>
            </tr>
          </table>
            <button class="green-button">Comandă</button>
        </div>
             </div>

        </div>
      </div>
    </div>
  </div>
</template> 

<script setup lang="ts">
//compoents
import ShoppingItem from "@/components/ShoppingItem.vue";

//vue 
import { ref, onMounted, onUnmounted } from "vue";
 
// store
import { useProductStore } from "@/stores/product";
import { storeToRefs } from "pinia";

//component information
defineOptions({
  name: "ShoppingCartView",
});

let  created = ref<boolean>(false)
//pinia
const store = useProductStore();

const { user } = storeToRefs(store);

const { incrementQuantity,decrementQuantity, removeItem, getSum, getSavedMoney, getDiscountPrice} = store;

// delete item from cart
function removeItemFromCart(item: string){
  removeItem(item)
}

//hooks  
onMounted(() => {
  created.value = true;
});

onUnmounted(() =>{
  created.value = false;
})
</script>


