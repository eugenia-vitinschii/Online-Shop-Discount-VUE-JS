<template>
<!-- header component -->
  <div class="header">
    <div class="container">
      <div class="header__wrapper">
        <!-- header promo runnin line -->
        <div class="header__promo">
          <router-link class="header__link running-line-wrapper" to="/promo"
            ><span class="running-line-hide"></span>
            <span class="running-line">
              Promoții de primavara, cumpărați produse cu reduceri maxime 🎁 doar la
              Discount</span
            ><span class="running-line-hide"></span
          ></router-link>
        </div>
        <!-- header component -->
        <div class="header__content">
          <!-- header logo & cart & favorite -->
          <div class="header__content-top">
            <div class="header__logo">
              <router-link to="/">
                <img src="../assets/img/logo.png" alt="The Logo" />
              </router-link>
            </div>
            <div class="header__user">
            <router-link 
            v-if="!authStore.token"
            class="header__link tooltip" 
            to="/login" 
            >
                <span class="tooltip-text small-text">Login</span>
                <svg 
                class="menu-svg"
                xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm-360-80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0-80Zm0 400Z"/></svg>             
              <span class="red__circle"> </span>
              </router-link>

             <router-link 
             v-else="logout()"
             class="header__link tooltip" 
             to="/" 
             >
             <span class="tooltip-text small-text">exit</span>
              <button  @click="logout">
               <svg 
               class="menu-svg"
               xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M640-520v-80h240v80H640Zm-280 40q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0-80Zm0 400Z"/></svg>
              </button>
              <span class="red__circle"> </span>
              </router-link>
              <router-link class="header__link tooltip" to="/shopping-cart">
                <span class="tooltip-text small-text"> coșul </span>
                <svg
                  class="menu-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#ffffff"
                >
                  <path
                    d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"
                  />
                </svg>

                <span class="red__circle">{{ user.cart.length }} </span>
              </router-link>
              <router-link to="/favorite" class="header__link tooltip">
                <span class="tooltip-text small-text">lista de preferințe</span>
                <svg
                  class="menu-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path
                    d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"
                  />
                </svg>
                <span class="red__circle">{{ user.favorite.length }} </span>
              </router-link>
            </div>
          </div>
          <!-- nav -->
          <nav class="header__links header__content-bottom">
            <ul>
              <li>
                <router-link class="header__link" to="/admin" 
                v-if="authStore.user?.role === 'admin'"
                >Admin</router-link>
              </li>
              <li>
                <router-link class="header__link" to="/">Home</router-link>
              </li>
              <li>
                <router-link class="header__link" to="/products">Produse</router-link>
              </li>
              <li>
                <router-link class="header__link" to="/promo">Promo</router-link>
              </li>
               <li>
                <router-link class="header__link" to="/brands">Branduri</router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//vue imports
import { defineOptions } from "vue";
//pinia
import { useAuthStore } from "../stores/auth";
import { useProductStore } from "../stores/product";
import { storeToRefs } from "pinia";
//router
import {useRouter}  from 'vue-router'


//component settings
defineOptions({
  name: "TheHeader",
});
// Store variables
const store = useProductStore();

const { user } = storeToRefs(store);

// Store variables
const authStore = useAuthStore();
const router = useRouter();

const logout = () => {
  authStore.logOut()
  router.push('/login')
}

</script>
