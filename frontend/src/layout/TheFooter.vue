<template>
<!-- footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer__links">
          <p class="subheading bold">Contacte:</p>
          <ul>
            <li 
              v-for="item in links"
              :key="item.id">
              <the-link
                
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

<script setup lang="ts">
//components
import TheLink from "../components/TheLink.vue"

//component settings
defineOptions({
  name: "TheFooter",
});

interface Links {
  id: string,
  link: string,
  href: string
}

const links: Links[] = [
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
