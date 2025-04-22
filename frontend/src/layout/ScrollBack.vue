<template>
  <div>

   <div class="scrollBack" v-show="crollY > 300" @click="toTop">
     <svg
       xmlns="http://www.w3.org/2000/svg"
       width="40"
       height="40"
       viewBox="0 0 24 24"
       fill="none"
       stroke="#fff"
       stroke-width="1"
       stroke-linecap="square"
       stroke-linejoin="arcs"
     >
       <path d="M18 15l-6-6-6 6" />
     </svg>
   </div>
 
  </div>
</template>  
  <script>
 export default {
   name: "ScrollBack",
   data() {
     return {
       scTimer: 0,
       crollY: 0,
     };
   },
   mounted() {
     window.addEventListener("scroll", this.handleScroll);
   },
   methods: {
     handleScroll: function () {
       if (this.scTimer) return;
       this.scTimer = setTimeout(() => {
         this.crollY = window.scrollY;
         clearTimeout(this.scTimer);
         this.scTimer = 0;
       }, 100);
     },
     toTop: function () {
       window.scrollTo({
         top: 0,
         behavior: "smooth",
       });
     },
   },
 };
 </script>
  
  <style lang="scss">
 .scrollBack {
   right: 0;
   bottom: 0;
   width: 40px;
   height: 40px;
   position: fixed;

   margin: 20px;
   cursor: pointer;
background: $dark-green;
 border: 1px solid transparent;
 }
  .scrollBack:hover {
   background:#000;
   border: 1px solid #fff;
  }

 </style>