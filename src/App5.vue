<script setup>
import { onMounted } from 'vue';

const width = document.body.clientWidth
const isMobile = width < 768

onMounted(() => {
  var mySwiper = new Swiper('#section3', {
        slidesOffsetBefore: width > 1280 ? (width - 1280) / 2 : 0,  
        spaceBetween: isMobile ? '4%' : '2%',
        slidesPerView: isMobile ? 1.5 : 4,
        freeMode: isMobile ? true : false,
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
    <div id="section3">
      <div class="u42DemiBold">Everything You Need</div>
      <div class="swiper-wrapper">
          <div class="swiper-slide">
              <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18353.png?v=1677736550" alt="">
              <div class="text">
                <div class="u24Medium">Portable Battery</div>
                <div class="u20Light">A 352.8 Wh lithium-ion removable battery provides ample energy so a rider can travel up to 1q0km (50km min.) after a mere 3-hr charge.</div>
              </div>
          </div>
          <div class="swiper-slide">
              <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/20230118-untitled-4684.png?v=1677736653" alt="">
              <div class="text">
                <div class="u24Medium">Integrated Light</div>
                <div class="u20Light">20 Lux Headlight with German road regulation-compliant design: a well-balanced combination of beauty and safety.</div>
              </div>
          </div>
          <div class="swiper-slide">
              <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18303.png?v=1677736665" alt="">
              <div class="text">
                <div class="u24Medium">Torque Sensor</div>
                <div class="u20Light">Unlike jerky cadence sensing, proprietary torque sensor enables super-fast speed adaption.</div>
              </div>
          </div>
          <div class="swiper-slide">
              <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18304.png?v=1677736802" alt="">
              <div class="text">
                <div class="u24Medium">Fenders & Kickstand</div>
                <div class="u20Light">Navigate rough terrains and any weather conditions with our pre-installed fenders and kickstand included in the package.</div>
              </div>
          </div>
          <div class="swiper-slide">
              <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18356.png?v=1677736974" alt="">
              <div class="text">
                <div class="u24Medium">Tektro Hydraulic Disc Brake</div>
                <div class="u20Light">It provide reliable and consistent stopping power in any weather condition, ensuring a safe and smooth ride.</div>
              </div>
          </div>
          <div class="swiper-slide">
              <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18354.png?v=1677737057" alt="">
              <div class="text">
                <div class="u24Medium">8-Speed Shimano Gearing</div>
                <div class="u20Light">Experience seamless gear shifts and tackle different terrain with the versatile 8-speed Shimano gearing system.</div>
              </div>
          </div>
          <div class="swiper-slide">
              <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18355.png?v=1677737357" alt="">
              <div class="text">
                <div class="u24Medium">Customized Motor</div>
                <div class="u20Light">Light and powerful 250w motor, perfect for most urban roads, with quiet and responsive rear-hub design.</div>
              </div>
          </div>
      </div>
      <div class="swiper-scrollbar"></div>
      <div class="buttons">
        <div class="swiper-button-prev"></div><!--左箭头。如果放置在swiper外面，需要自定义样式。-->
        <div class="swiper-button-next"></div><!--右箭头。如果放置在swiper外面，需要自定义样式。-->
      </div>
  </div>
</template>

<style>

#section3 {
      /* max-width: 1280px; */
      margin: auto;
      --swiper-theme-color: #ff6600;/* 设置Swiper风格 */
      --swiper-navigation-color: #fff;/* 单独设置按钮颜色 */
      --swiper-navigation-size: 15px;/* 设置按钮大小 */
      position: relative;
      overflow-x: hidden;
  	  /* margin-bottom: 150px; */
      cursor: auto;
      color: #000;
    }

    #section3 .u42DemiBold {
        text-align: left;
        max-width: 1280px;
        margin: 0 auto 5%;
    }
    
    #section3 img {
      width: 100%;
      height: auto;
    }

    #section3 .swiper-slide .text {
      position: relative;
      text-align: left;
      font-size: 16px;
    }
  
  #section3 .swiper-slide .u24Medium {
	    font-weight: 700;
        margin: 30px 0;
  }

  #section3 .swiper-scrollbar {
    position: static;
    max-width: 1280px;
    margin: 5% auto 0;
  }

  #section3 .buttons {
    max-width: 1280px;
    margin: auto;
    display: flex;
    justify-content: end;
  }

  #section3 .buttons .swiper-button-prev,
  #section3 .buttons .swiper-button-next {
        margin-left: 20px;
        margin-top: 20px;
        position: static;
        background-color: #666;
        border-radius: 50%;
        padding: 20px;
        box-sizing: border-box;
        opacity: .5;
  }

  #section3 .swiper-button-next.swiper-button-disabled,
  #section3 .swiper-button-prev.swiper-button-disabled {
    opacity: .25;
  }
  
  
</style>

<style>
@media (max-width: 767px) {
    #section3 .swiper-button-prev,
    #section3 .swiper-button-next {
        display: none;
    }

    #section3 .u42DemiBold {
        font-size: 24px;
    }

    #section3 .swiper-scrollbar {
        height: 2px;
        position: static;
        /* margin: 20px auto 0; */
        width: 100%;
    }

    #section3 .swiper-slide .u24Medium {
	    font-weight: 700;
        margin: 15px 0;
        font-size: 18px;
        line-height: 21px;
    }

    #section3 .swiper-slide .u20Light {
        font-size: 14px;
        line-height: 20px;
        padding-right: 7.5%;
    }
}
</style>
