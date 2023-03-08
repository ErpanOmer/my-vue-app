<script setup>
import { onMounted } from 'vue';

const isMobile = document.body.clientWidth < 768

onMounted(() => {
  var mySwiper = new Swiper('#section7', {    
        spaceBetween: 15,
        slidesPerView: isMobile ? 1.5 : 3.5,
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
    <div id="section7">
      <div class="swiper-wrapper">
          <div class="swiper-slide">
              <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/20221031-150959_2x_73aee806-ce30-4b48-a6d0-ccf7d7ad2846.png?v=1677570084" alt="">
              <div class="text">
                <div class="u17Light">NBA Hall of Fame</div>
                <div class="u24Medium">Tracy Mcgrady</div>
              </div>
          </div>
          <div class="swiper-slide">
              <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_17920_2x_497e7daa-cce5-4377-bd70-b87b4741b84a.png?v=1677570061" alt="">
              <div class="text">
                <div class="u17Light">5x German champion triathlete</div>
                <div class="u24Medium">Franz Loeschke</div>
              </div>
          </div>
          <div class="swiper-slide">
              <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18385_2x_be0fdf1b-aa6c-4876-b59d-b4726fbe85f4.png?v=1677570039" alt="">
              <div class="text">
                <div class="u17Light">Choice Award for Favorite Band</div>
                <div class="u24Medium">Smash Mouth</div>
              </div>
          </div>
          <div class="swiper-slide">
              <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/URTOPIA_PISA-2_1_2x_661af923-52ce-4264-8f33-57e2ad655b9c.png?v=1677571232" alt="">
              <div class="text">
                <div class="u17Light">3x Italian BMX Champion</div>
                <div class="u24Medium">Max Lemke</div>
              </div>
          </div>
          <div class="swiper-slide">
              <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/20230228-170547.jpg?v=1677575166" alt="">
              <div class="text">
                <div class="u17Light">2021 Canoeing Olympic Champion</div>
                <div class="u24Medium">Max Lemke</div>
              </div>
          </div>
          <div class="swiper-slide">
              <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18384_2x_a1e993bf-6c59-495e-9144-249560a9464f.png?v=1677571548" alt="">
              <div class="text">
                <div class="u17Light">Best Jewelers in the World</div>
                <div class="u24Medium">Ben Baller</div>
              </div>
          </div>
          <div class="swiper-slide">
              <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18386_2x_3ed11b52-b136-4263-8a1b-568fb7e95e69.png?v=1677571199" alt="">
              <div class="text">
                <div class="u17Light">Vice World Champion</div>
                <div class="u24Medium">Philip Heintz</div>
              </div>
          </div>
      </div>
      <div class="swiper-button-prev"></div><!--左箭头。如果放置在swiper外面，需要自定义样式。-->
     <div class="swiper-button-next"></div><!--右箭头。如果放置在swiper外面，需要自定义样式。-->
     <div class="swiper-scrollbar"></div>
  </div>
</template>

<style>

#section7 {
      max-width: 1280px;
      margin: auto;
      --swiper-theme-color: #ff6600;/* 设置Swiper风格 */
      --swiper-navigation-color: #fff;/* 单独设置按钮颜色 */
      --swiper-navigation-size: 30px;/* 设置按钮大小 */
      position: relative;
      overflow: hidden;
  		margin-bottom: 150px;
      cursor: auto;
    }
    
    #section7 img {
      width: 100%;
      height: auto;
    }

    #section7 .swiper-button-prev {
      left: 25px;
      top: calc(50% - 35px);
    }

    #section7 .swiper-button-next {
      right: 15px;
      top: calc(50% - 35px);
    }

    #section7 .swiper-slide .text {
      position: relative;
      left: 10px;
      text-align: left;
      font-size: 16px;
    }
  
  #section7 .swiper-slide .u24Medium {
	    font-weight: 700;
  }
  
  #section7 .swiper-slide .u17Light {
	    margin-top: 20px;
  }
  
  
</style>

<style>
@media (max-width: 767px) {
    #section7 .swiper-button-prev,
    #section7 .swiper-button-next {
        display: none;
    }

    #section7 .swiper-scrollbar {
        height: 2px;
        position: static;
        margin: 75px auto 0;
        width: calc(100vw - 100px);
    }

    #section7 .swiper-slide .text {
      left: 0;
    }

    #section7 .swiper-slide .text .u17Light {
      font-size: 14px;
      font-weight: 400;
      margin-bottom: 15px;
    }

    #section7 .swiper-slide .text .u24Medium {
      font-size: 20px;
    }
}


@media (min-width: 768px) {
    #section7 .swiper-scrollbar {
        display: none;
    }
}
</style>
