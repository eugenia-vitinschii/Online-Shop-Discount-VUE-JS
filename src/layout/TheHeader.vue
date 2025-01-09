<template>
  <div class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__promo">
          <router-link class="header__link" to="/promo">Promotii pentru perioada de iarna, cumpara produse cu reduceri maxime!</router-link>
        </div>
        <div class="header__content">
          <div class="header__logo">
            <router-link to="/">
              <img src="@/assets/img/logo-header.jpg" alt="The Logo" />
            </router-link>
          </div>
          <nav class="header__links">
            <ul> 
              <li>
                <router-link class="header__link" to="/admin-panel"
                  >Admin</router-link>
              </li>
              <li>
                <router-link class="header__link" to="/"
                  >Home</router-link>
              </li>
             
              <!-- <li>
                <router-link class="header__link" to="/">Acasă</router-link>
              </li> -->
              <li>
                <router-link class="header__link" to="/items"
                  >Produse</router-link>
              </li>
              <li>
                <router-link class="header__link" to="/promo"
                  >Promo</router-link>
              </li>
              <li>
                <router-link class="header__link" to="/shopping-card">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>
                 
                  <span class="red__circle">{{ user.cart.length }} </span>
                </router-link>
              </li>
              <!-- <li>
                <router-link class="header__link" to="/favorite"
                  >Favorite</router-link>
              </li> -->
              <!-- <li>
                <router-link class="header__link" to="/info"
                  >Termeni și condiții</router-link>
              </li> -->
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineOptions } from "vue";
import { useProductStore } from "@/stores/product";
import { storeToRefs } from "pinia";
defineOptions({
  name: "TheHeader",
});


const store = useProductStore();

const { user } = storeToRefs(store);
</script>