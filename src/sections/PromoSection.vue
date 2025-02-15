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
          <div class="bustle__time">
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

<script setup>
//vue import
import { defineOptions, ref } from "vue";
// import {watch} from "vue"
//component settings
defineOptions({
  name: "PromoSection",
});

// last day for promo
const deadline = new Date("2025-02-16T18:59:59");

//calculate rest time

let days = ref(0);
let hours = ref(0);
let minutes = ref(0);
let seconds = ref(0);

const updateTime = () => {
  let now = ref(new Date());
  let diff = ref(Math.max(0, deadline - now.value));
  days.value = Math.floor(diff.value / (1000 * 60 * 60 * 24));
  hours.value = Math.floor((diff.value / (1000 * 60 * 60)) % 24);
  minutes.value = Math.floor((diff.value / (1000 * 60)) % 60);
  seconds.value = Math.floor((diff.value / 1000) % 60);
  if (diff.value === 0) {
    clearInterval(timer.value);
  }
};

updateTime();
let timer = setInterval(updateTime, 1000);
// refresh data
</script>
 