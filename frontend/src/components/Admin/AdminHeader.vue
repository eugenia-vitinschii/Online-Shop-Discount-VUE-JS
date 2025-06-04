<template>
<!-- admin panel -->
  <div class="panel">
    <div class="container">
      <div class="panel__wrapper">
        <div class="panel__nav">
          <div class="panel__button">
            <button class="button-svg" @click="toggleNav" >
              <svg v-if="!openNav" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m480-340 180-180-57-56-123 123-123-123-57 56 180 180Zm0 260q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
              <svg  v-else xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m357-384 123-123 123 123 57-56-180-180-180 180 57 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
            </button>
          </div>
          <div class="panel__buttons" :class="{'active':openNav}"> 
            <ul >
              <li>
                <router-link class="green-button" to="/admin">
              Admin Page
            </router-link>
              </li>
              <li>
                <router-link class="green-button" to="/admin/create">
              Add Product
            </router-link>
              </li>
              <li>
                <router-link class="green-button" to="/admin/edit">
             Product list
            </router-link> 
              </li>
              <li>
                <router-link class="green-button" to="/admin/create-brand">
              Add brand</router-link
            > 
              </li>
            </ul>
          </div>
          <div class="panel__user">
            <div class="panel__user-text">
              <p class="body-text">HI, {{userName}}!</p>
            </div>
            <div class="panel__user-img">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="30px"
                fill="#e8eaed"
              >
                <path
                  d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"
                />
              </svg>
            </div>
            <div class="panel__user-exit tooltip" >
              <span class="tooltip-text small-text">exit</span>
              <button class="button-svg" @click="logout">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-120q-33 0-56.5-23.5T120-200v-160h80v160h560v-560H200v160h-80v-160q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm220-160-56-58 102-102H120v-80h346L364-622l56-58 200 200-200 200Z"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>  
<script setup lang="ts">
//vue
import { computed, ref } from 'vue'

//pinia
import { useAuthStore } from '@/stores/auth';

//component settings
defineOptions({
  name: "Adminheader",
});


//variables
const authStore = useAuthStore()
const userName = computed(() => authStore.user?.name || 'admin')


//burger
const openNav= ref(false);

const toggleNav = () => {
  openNav.value =!openNav.value
}


//router
import {useRouter}  from 'vue-router'

// Store variables
const router = useRouter();

const logout = () => {
  authStore.logOut()
  router.push('/login')
}
</script>
  
 