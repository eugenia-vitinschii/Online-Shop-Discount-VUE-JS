<template>
  <!-- footer -->
   <div>
    <the-subscribe/>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <!-- Informații companie -->
        <div class="footer__links">
          <p class="subheading bold">Informații companie</p>
          <ul>
            <li>
               <a href="/"  class="footer__link">Despre noi</a>
            </li>
            <li>
               <a href="/"  class="footer__link">Contacte</a>
            </li>
            <li>
               <a href="/"  class="footer__link">Termeni și condiții </a>
            </li>
            <li>
               <a href="/"  class="footer__link">Politica de confidențialitate</a>
            </li>
            <li>
               <a href="/"  class="footer__link">Livrare și retur </a>
            </li>
          </ul>
        </div>
        <!-- Ghid cumpărători -->
        <div class="footer__links">
          <p class="subheading bold">Ghid cumpărători</p>
          <ul>
            <li>
               <a href="/"  class="footer__link footer__link-purple">Cum comand?</a>
            </li>
            <li>
               <a href="/"  class="footer__link">Întrebări frecvente (FAQ)</a>
            </li>
            <li>
               <a href="/"  class="footer__link">Garanție produse</a>
            </li>
            <li>
               <a href="/"  class="footer__link footer__link-purple">Metode de plată</a>
            </li>
          </ul>
        </div>
         <!-- Servicii -->
        <div class="footer__links">
          <p class="subheading bold">Servicii</p>
          <ul>
            <li>
               <a href="/"  class="footer__link">Service și reparații?</a>
            </li>
            <li>
               <a href="/"  class="footer__link footer__link-purple">Asistență clienți</a>
            </li>
            <li>
               <a href="/"  class="footer__link footer__link-purple">Manuale și ghiduri </a>
            </li>
          </ul>
        </div>
        <!-- Urmărește-ne -->
        <div class="footer__links">
          <p class="subheading bold">Contacte:</p>
          <ul>
            <li v-for="item in links" :key="item.id">
              <the-link :link="item.link" :href="item.href"/>
            </li>
          </ul>
        </div>
        <div class="footer__logo">
          <router-link to="/">
            <img src="@/assets/img/footer-logo.jpg" alt="The Logo" />
          </router-link>
        </div>
      </div>
    </div>
  </footer>
  </div>
</template>

<script setup lang="ts">
//components
import TheLink from "../components/TheLink.vue"
import TheSubscribe from "@/components/TheSubscribe.vue";

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
