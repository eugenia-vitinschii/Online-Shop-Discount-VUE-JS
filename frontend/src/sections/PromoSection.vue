<template>
  <div class="bustle">
    <div class="container">
      <div class="bustle__wrapper">
        <div class="bustle__content">
          <div class="bustle__text">
            <p class="heading">Cele mai bune preturi</p>
            <p class="body-text">
              Alege cele mai bune oferte, doar la Discount!
            </p>
          </div>
          <div class="bustle__time" v-show="showPromo">
            <div class="bustle__time-wrapper">
              <div class="bustle__time-item">
                <p class="heading">{{ days }}</p>
                <p class="subheading">Zile</p>
              </div>
              <div class="bustle__time-item">
                <p class="heading">{{ hours }}</p>
                <p class="subheading">Ore</p>
              </div>
              <div class="bustle__time-item">
                <p class="heading">{{ minutes }}</p>
                <p class="subheading">Minute</p>
              </div>
              <div class="bustle__time-item">
                <p class="heading">{{ seconds }}</p>
                <p class="subheading">Secunde</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//vue import
import { defineOptions, ref , onMounted, onBeforeUnmount} from "vue";

//component settings
defineOptions({
  name: "PromoSection",
});

// last day for promo
const deadline = new Date("2025-04-27T18:59:59");

let days = ref<number>(0);
let hours = ref<number>(0);
let minutes = ref<number>(0);
let seconds = ref<number>(0);
let showPromo = ref(<boolean>true)

let timer: number | undefined;

const updateTime = () => {
  let now = new Date();
  let diff = Math.max(0, deadline.getTime() - now.getTime())

  days.value = Math.floor(diff/ (1000 * 60 * 60 * 24));
  hours.value = Math.floor((diff / (1000 * 60 * 60)) % 24);
  minutes.value = Math.floor((diff / (1000 * 60)) % 60);
  seconds.value = Math.floor((diff / 1000) % 60);

  if (diff <= 0) {
    clearInterval(timer);
    showPromo.value = false;
    console.log(showPromo)
  }
};
// refresh data
onMounted( () => {
  updateTime();
  timer = setInterval(updateTime, 1000);
})

onBeforeUnmount( ()=> {
  clearInterval(timer)
})

</script>