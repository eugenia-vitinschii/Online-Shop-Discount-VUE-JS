<template>
  <div class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__promo">
          <router-link class="header__link running-line-wrapper" to="/promo"
            ><span class="running-line-hide"></span> <span class="running-line subheading"> Promoții de iarnă, cumpărați produse cu reduceri maxime 🎁 doar la Discount</span><span class="running-line-hide"></span></router-link
          >
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
                  >Admin</router-link
                >
              </li>
              <li>
                <router-link class="header__link" to="/">Home</router-link>
              </li>
              <li>
                <router-link class="header__link" to="/items"
                  >Produse</router-link
                >
              </li>
              <li>
                <router-link class="header__link" to="/promo"
                  >Promo</router-link
                >
              </li>
              <li>
                <router-link class="header__link tooltip" to="/shopping-card">
                  <span class="tooltip-text small-text "> coșul </span>
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
              </li>
              <li>
                <router-link to="/favorite"  class="header__link tooltip">
                  <span class="tooltip-text small-text ">lista de preferințe</span>
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
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//vue imports
import { defineOptions } from "vue";
import { useProductStore } from "@/stores/product";
import { storeToRefs } from "pinia";

//component settings
defineOptions({
  name: "TheHeader",
});

// Store variables
const store = useProductStore();

const { user } = storeToRefs(store);
</script>