<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer__links">
          <p class="subheading bold">Contacte:</p>
          <ul>
            <li>
              <the-link
                v-for="item in links"
                :key="item.id"
                :link="item.link"
                :href="item.href"
              />
            </li>
          </ul>
        </div>
        <div class="footer__logo">
          <router-link to="/">
            <img src="@/assets/img/logo.png" alt="The Logo" />
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import TheLink from "../components/TheLink.vue"

import { defineOptions } from "vue";

defineOptions({
  name: "TheFooter",
});

const links = [
  {
    id: "1",
    link: "(373)6700000",
    href: "tel:+(373)67-47-32-33",
  },
  {
    id: "3",
    link: "contect-us@gmail.com",
    href: "mailto:eugenia.vitinschaia@gmail.com",
  },
  {
    id: "4",
    link: "support@gmail.com",
    href: "mailto:eugenia.vitinschaia@gmail.com",
  },
];
</script>
