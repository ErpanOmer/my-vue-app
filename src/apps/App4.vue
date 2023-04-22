<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  var mySwiper = new Swiper ('#section1-mobile', {    
        // slidesPerView: 1,
        // spaceBetween: 30,
        effect: 'fade',
        fadeEffect:{
            crossFade: true
        },
        pagination: {el:'.swiper-pagination'},
        // speed: 1000,
  }) 
})

</script>


<template>
    <div id="section1-mobile">
        <div class="swiper-wrapper swiper-container-horizontal swiper-container-fade">
          <div class="swiper-slide">
            <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/20230228-165148.png?v=1677574346"/>
            <div class="u20Medium">“It's incredibly fun to ride”</div>
          </div>
          <div class="swiper-slide">
            <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/20230228-165209.png?v=1677574346"/>
            <div class="u20Medium">“Like a phone’s than a next-gen fixie”</div>
          </div>
          <div class="swiper-slide">
            <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18075_2x_5ed82c19-16b6-4f05-870a-623b5429a75f.png?v=1677303615"/>
            <div class="u20Medium">“One of the smartest ebike”</div>
          </div>
          <div class="swiper-slide">
            <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/20230228-165154.png?v=1677574346"/>
            <div class="u20Medium">“Best Electric Bike for 2022”</div>
          </div>
          <div class="swiper-slide">
            <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/20230228-165159.png?v=1677574346"/>
            <div class="u20Medium">“Does phone tech better than some phones”</div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>


<style>

#section1-mobile {
    width: 100vw;
    overflow: hidden;
    --swiper-theme-color: #000;
    --swiper-pagination-color: #000;/* 两种都可以 */
}

#section1-mobile .swiper-slide {
    box-sizing: border-box;
    padding: 0 10%;
}

#section1-mobile .swiper-slide img {
    height: 60px;
}


#section1-mobile .swiper-slide .u20Medium {
    font-weight: 600;
    margin: 20px 0 40px;
    font-size: 22px;
    line-height: 26px;
}

#section1-mobile .swiper-pagination {
    position: static;
}

#section1-mobile .swiper-pagination-bullet {
    height: 6px;
    width: 6px;
}

#section1-mobile .swiper-pagination-bullet-active {
    width: 30px;
    height: 6px;
    border-radius: 5px;
    transition: all .3s;
}
</style>