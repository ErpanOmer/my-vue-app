<script setup>
import { onMounted } from 'vue';
import { collections } from './assets/collections.json'
console.log(collections)

const isMobile = document.body.clientWidth < 768

onMounted(() => {
  var mySwiper = new Swiper('#section5', {    
        spaceBetween: 15,
        slidesPerView: isMobile ? 1 : 4,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
       },
       scrollbar: {
            el: '.swiper-scrollbar',
      },
  }) 
})
</script>

<template>
    <div id="section5">
      <div class="u42DemiBold">Upgrade Your Ride</div>
      <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="product in collections">
              <img :src="product.featured_image" alt="">
              <div class="text">
                <div class="u24Medium">{{ product.title }}</div>
                <div class="u20Medium">{{ product.price }}</div>
              </div>
              <a class="my-button my-button-white" href="">Add to Cart</a>
          </div>
      </div>
      <div class="swiper-button-prev"></div><!--左箭头。如果放置在swiper外面，需要自定义样式。-->
     <div class="swiper-button-next"></div><!--右箭头。如果放置在swiper外面，需要自定义样式。-->
     <div class="swiper-scrollbar"></div>
  </div>
</template>

<style>

#section5 {
      max-width: 1280px;
      margin: auto;
      --swiper-theme-color: #ff6600;/* 设置Swiper风格 */
      --swiper-navigation-color: #fff;/* 单独设置按钮颜色 */
      --swiper-navigation-size: 20px;/* 设置按钮大小 */
      position: relative;
      overflow: hidden;
      cursor: auto;
      color: #000;
    }

    #section5 > .u42DemiBold {
        margin-bottom: 50px;
    }

    #section5 .swiper-scrollbar {
        position: static;
        margin-top: 60px;
    }
    
    #section5 img {
      width: 100%;
      height: auto;
    }

    #section5 .swiper-button-prev,
    #section5 .swiper-button-next {
        background-color: #000;
        opacity: 0.5;
        border-radius: 50%;
        height: 40px;
        width: 40px;
        top: 35%;
    }

    #section5 .swiper-button-prev.swiper-button-disabled,
    #section5 .swiper-button-next.swiper-button-disabled {
        opacity: 0.2;
    }

    #section5 .swiper-button-prev,
    #section5 .swiper-button-next {
      /* left: -40px; */
      top: 50%,
      /* transform: translateX(-20px); */
    }

    #section5 .swiper-slide .text {
      text-align: left;
      margin: 40px 0;
    }
  
  #section5 .swiper-slide .u24Medium {
	    font-weight: 700;
  }
  
  #section5 .swiper-slide .u20Medium {
    font-size: 18px;
  }
  
  
</style>

<style>
@media (max-width: 767px) {
    #section5 .swiper-button-prev,
    #section5 .swiper-button-next {
        display: none;
    }

    #section5 > .u42DemiBold {
        margin: 0;
        font-size: 30px;
    }

    #section5 .swiper-scrollbar {
        height: 2px;
        margin: 40px auto 0;
        /* width: calc(100vw - px); */
    }

    #section5 .swiper-slide .text {
        text-align: center;
        margin-top: 0;
    }

    #section5 .swiper-slide .my-button {
        margin: auto;
        color: #fff;
        background-color: #000;
    }
}
</style>