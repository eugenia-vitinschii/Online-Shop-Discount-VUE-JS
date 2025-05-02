<template>
  <!--Product item wrappper-->
  <div class="item__item" :class="{ gray: !stock }">
    <div class="item__top">
      <div class="item__top-logo">
        <router-link :to="'/brands/' + brand" class="body-text">
          {{ brand }}
        </router-link>
      </div>
      <!-- labels for dicsount products -->
      <div class="item__top-labels" :class="{ grayscale: !stock }">
        <div class="item__top-label" :class="{ visible: hugeSaleLabel }">
          <img src="@/assets/img/sale.jpg" alt="oops!" />
        </div>
        <div class="item__top-label" :class="{ visible: dicountLabel }">
          <img src="@/assets/img/discount.jpg" alt="oops!" />
        </div>
      </div>
    </div>
    <!--Img and title links -->
    <div class="item__links">
      <router-link :to="'/products/' + id">
        <div class="item__links-img">
          <img :src="img" alt="no img" />
        </div>
      </router-link>
      <router-link :to="'/products/' + id">
        <p class="body-text">{{ productName }}</p>
      </router-link>
    </div>
    <!-- Prices blocks -->
    <div class="item__price">
      <div class="item__price-value">
        <p class="body-text bold" :class="{ oldPrice: !hidden }">
          {{ price }} lei 
        </p>
        <p class="body-text bold bolt" :class="{ hidden: hidden }">
           <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m422-232 207-248H469l29-227-185 267h139l-30 208ZM320-80l40-280H160l360-520h80l-40 320h240L400-80h-80Zm151-390Z"/></svg>
          {{ discountPrice }} lei
        </p>
      </div>
      <div class="item__price-value" :class="{ hidden: hidden }">
        <p class="body-text-red">
          Reducere <span class="bold">{{ discount }}%</span>
        </p>
        <p class="body-text-green">
         - <span class="bold">{{savedMoney}} lei</span>
        </p>
      </div>
    </div>
    <!-- Add to card & Favorite -->
    <div class="item__buttons">
      <div class="item__buttons-credit">
        <div class="item__buttons-delivery" v-if="price > 16000">
          <span class="pulsing"></span>
          <p class="body-text-green">Livrare gratuită</p>
        </div>
        <p class="body-text">
          De la <span class="bold">{{ monthlyPrice }} lei </span> /lunar
        </p>
      </div>
      <div class="item__buttons-action">
        <!-- add item to cart -->
        <button
          class="button-svg"
          @click="$emit('addToCard', product)"
          
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path
              d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"
            />
          </svg>
        </button>
        <!-- add item to favorite -->
        <button
          class="button-svg"
          @click="$emit('addToFavorite')"
        >
          <svg
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
        </button>
      </div>
    </div>
  </div>
</template> 

<script setup lang="ts">
//component 
defineOptions({
  name: "TheItem",
});

//emits
const emit = defineEmits<{
  (e: "addToFavorite", product: Product): void
  (e: "addToCard", product: Product): void
}>()

//props
type Props = {
  id: string
  img: string
  productType: string
  productName: string
  price: number
  discount: number
  savedMoney: number
  discountPrice: number
  monthlyPrice: number
  brand: string
  labelImg: string
  hidden?: boolean
  oldPrice?: boolean
  hugeSaleLabel?: boolean
  dicountLabel?: boolean
  redHeart?: boolean
  stock?: boolean
}

const props = defineProps<Props>()

</script>