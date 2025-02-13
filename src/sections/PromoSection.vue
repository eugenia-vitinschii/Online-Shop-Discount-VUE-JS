<template>
<div class="bustle">
   <div class="container">
      <div class="bustle__wrapper">
         <div class="bustle__content">
            <div class="bustle__text">
            <p class="heading">Cele mai bune preturi</p>
            <p class="body-text">Alege cele mai bune oferte, doar la Discount!</p>
         </div>
         <div class="bustle__time">
            <div class="bustle__time-wrapper">
               <p class="heading"></p>
               <div class="bustle__time-item">
                  <p class="heading">{{ time() }}</p>
                  <p class="subheading">Zile</p>
               </div>
              <div class="bustle__time-item">
            <p class="heading"></p>
                  <p class="subheading">Ore</p>
               </div>
               <div class="bustle__time-item">
                  <p class="heading"></p>
                  <p class="subheading">Minute</p>
               </div>
               <div class="bustle__time-item">
                  <p class="heading"></p>
                  <p class="subheading">Secunde</p>
               </div> 
               <div class="bustle__time-item">
                 <p class="heading">{{time()}}</p>  
               </div>
            </div>
         </div> 
         </div>
      </div>
   </div>
</div>
</template>

<script setup>
//vue import
import {defineOptions} from "vue";

//component settings
defineOptions({
   name: "PromoSection"
})



// const currentDate = new Date('March 14, 2025 19:00:00')

let timeEnd = new Date(2025, 3, 15, 30);

// timeEnd.value = new Date(timeEnd.getYear()>1900?(timeEnd.getYear()+1):(timeEnd.getYear()+1901),0,1);

function time() {
   let today = new Date();
    today = Math.floor((timeEnd -today)/1000);
   let tsec=today%60; today=Math.floor(today/60); if(tsec<10)tsec='0'+tsec;
    let tmin=today%60; today=Math.floor(today/60); if(tmin<10)tmin='0'+tmin;
    let thour=today%24; today=Math.floor(today/24);
     return  today + thour+tmin+tsec;
}

</script>
 