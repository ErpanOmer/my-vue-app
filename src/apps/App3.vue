<script setup>
import { onMounted } from 'vue';

const isMobile = document.body.clientWidth < 768

onMounted(() => {
  var mySwiper = new Swiper ('#bike', {
        // direction: 'vertical',
        slidesPerView: isMobile ? 1 : 3,
        // spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      // 如果需要滚动条
        scrollbar: {
            el: '.swiper-scrollbar',
        },
  }) 
})

</script>

<template>
    <div id="bike">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
              <div class="name">Chord</div>
              <div class="info">&nbsp;</div>
              <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/1_1_2x_c29f513e-3efa-4fb3-a74d-f83107bdd824.png?v=1677639590" alt="">
              <div class="dots">
                <div onclick="changeBike('https://cdn.shopify.com/s/files/1/0583/5810/4213/files/1_1_2x_c29f513e-3efa-4fb3-a74d-f83107bdd824.png?v=1677639590', this)" white class="active"></div>
                <div onclick="changeBike('https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18397_2x_1f9c1e43-b341-430d-aa9d-bdc5432ac4d4.png?v=1677639396', this)" black></div>
              </div>
              <div class="size">Fit for 170cm - 195cm</div>
              <div class="my-button my-button-white">Order now</div>
              <div class="my-button my-button-black new">New</div>
          </div>
          <div class="swiper-slide">
            <div class="name">Chord X</div>
            <div class="info">&nbsp;</div>
              <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18400_2x_6789324f-33d2-4342-9519-0ee3bc943699.png?v=1677639718" alt="">
              <div class="dots">
                <div onclick="changeBike('https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18400_2x_6789324f-33d2-4342-9519-0ee3bc943699.png?v=1677639718', this)" white class="active"></div>
                <div onclick="changeBike('https://cdn.shopify.com/s/files/1/0583/5810/4213/files/2.88_2x_4ebddfe8-c42e-4196-80e2-2f844bdec3dc.png?v=1677639816', this)" black></div>
              </div>
              <div class="size">Fit for 160cm - 185cm</div>
              <div class="my-button my-button-white">Order now</div>
              <div class="my-button my-button-black new">New</div>
            </div>
          <div class="swiper-slide">
            <div class="name">Carbon 1S</div>
            <div class="info">Shimano 7-Speed</div>
              <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18297_2x_eae075fb-1d14-4217-bbef-0d2f2e476f2e.png?v=1677640028" alt="">
              <div class="dots">
                <div onclick="changeBike('https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18297_2x_eae075fb-1d14-4217-bbef-0d2f2e476f2e.png?v=1677640028', this)" black class="active"></div>
                <div onclick="changeBike('https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18151_2x_702ec45e-0fe8-49ed-865a-df341d3033d7.png?v=1677640124', this)" orange></div>
                <div onclick="changeBike('https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18138_2x_de02f431-3e7d-48c0-b887-85eda46c2421.png?v=1677640174', this)" gray></div>
              </div>
              <div class="size">Fit for 160cm - 195cm</div>
              <div class="my-button my-button-white">Order now</div>
          </div>
          <div class="swiper-slide">
            <div class="name">Carbon 1</div>
            <div class="info">Carbon Belt</div>
              <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18298_2x_c9d66b5e-a0bb-4339-92db-e30b51859060.png?v=1677640298" alt="">
              <div class="dots">
                <div onclick="changeBike('https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18298_2x_c9d66b5e-a0bb-4339-92db-e30b51859060.png?v=1677640298', this)" black class="active"></div>
                <div onclick="changeBike('https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18150_2x_63ea456b-69c1-4d96-988f-efa931148bc1.png?v=1677640442', this)" orange></div>
                <div onclick="changeBike('https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18139_2x_ee2cf1ae-8693-42a3-ab99-d53ea78e2802.png?v=1677640511', this)" gray></div>
              </div>
              <div class="size">Fit for 170cm - 195cm</div>
              <div class="my-button my-button-white">Order now</div>
            </div>
          <div class="swiper-slide">
            <div class="name">Carbon 1S</div>
            <div class="info">Vanilla</div>
              <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18364_2x_1d2d4d5c-87cc-4f67-a91b-c45dc8082320.png?v=1677640628" alt="">
              <div class="dots">
                <div peach></div>
              </div>
              <div class="size">Fit for 160cm - 195cm</div>
              <div class="my-button my-button-white">Order now</div>
          </div>
      </div>
      <div class="swiper-button-prev"></div><!--左箭头。如果放置在swiper外面，需要自定义样式。-->
      <div class="swiper-button-next"></div><!--右箭头。如果放置在swiper外面，需要自定义样式。-->
      <div class="swiper-scrollbar"></div>
    </div>
</template>

<style>
  #bike {
    max-width: 1280px;
	/* background-color: #F7F8FA; */
    margin: auto;
      --swiper-theme-color: #ff6600;/* 设置Swiper风格 */
      --swiper-navigation-color: #fff;/* 单独设置按钮颜色 */
      --swiper-navigation-size: 30px;/* 设置按钮大小 */
      position: relative;
      overflow-x: hidden;
  }

  #bike .swiper-slide {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    position: relative;
    padding: 5px 0;
    box-sizing: border-box;
  }

  #bike .swiper-slide .name {
    font: normal normal 600 24px/27px urbane;
  }

  #bike .swiper-slide .info {
    font: normal normal 400 14px/14px urbane;
    color: #a1a1a1;
    margin-top: 10px;
  }

  #bike .swiper-slide .new {
    position: absolute;
    left: 0;
    top: 0;
    background-color: #263B55;
    width: 76px;
    height: 33px;
    font: normal normal 600 14px/14px urbane;
  }

  #bike .swiper-slide img {
    width: 100%;
    margin: 40px 0 30px;
  }

  #bike .swiper-slide .dots {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #bike .swiper-slide .dots > div {
    width: 20px;
    height: 20px;
    margin: 10px;
    border-radius: 50%;
    cursor: pointer;
  }

  #bike .swiper-slide .dots > div::after {
    content: "";
    display: inline-block;
    height: 16px;
    margin: 2px;
    width: 16px;
    border-radius: 100%;
  }

  #bike .swiper-slide .dots > div[black] {
    background-color: #000;
  }

  #bike .swiper-slide .dots .active[black] {
    background-color: transparent;
    border: 2px solid #666;
  }

  #bike .swiper-slide .dots .active[black]::after  {
    background-color: #000;
  }

  #bike .swiper-slide .dots > div[white] {
    background-color: #ddd;
  }

  #bike .swiper-slide .dots .active[white] {
    background-color: transparent;
    border: 2px solid #666;
  }

  #bike .swiper-slide .dots .active[white]::after  {
    background-color: #ddd;
  }

  #bike .swiper-slide .dots > div[orange] {
    background-color: #FD4B17;
  }

  #bike .swiper-slide .dots .active[orange] {
    background-color: transparent;
    border: 2px solid #666;
  }

  #bike .swiper-slide .dots .active[orange]::after  {
    background-color: #FD4B17;
  }

  #bike .swiper-slide .dots > div[gray] {
    background-color: #919191;
  }

  #bike .swiper-slide .dots .active[gray] {
    background-color: transparent;
    border: 2px solid #666;
  }

  #bike .swiper-slide .dots .active[gray]::after  {
    background-color: #919191;
  }

  #bike .swiper-slide .dots > div[peach] {
    background-color: #F0EEDF;
  }

  #bike .swiper-slide .dots .active[peach] {
    background-color: transparent;
    border: 2px solid #F0EEDF;
  }

  #bike .swiper-slide .dots .active[peach]::after  {
    background-color: #F0EEDF;
  }

  #bike .swiper-slide .size {
    font: normal normal 500 20px/36px urbane;
    margin-bottom: 30px;
  }


  #bike .swiper-button-prev,
  #bike .swiper-button-next {
    background-color: #000;
    opacity: 0.5;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    top: 35%;
  }

  #bike .swiper-button-prev::after,
  #bike .swiper-button-next::after {
    font-size: 14px;
  }

  #bike .swiper-button-prev.swiper-button-disabled,
  #bike .swiper-button-next.swiper-button-disabled {
    opacity: 0.2;
  }
  
</style>

<style>
@media (max-width: 767px) {
    #bike {
        width: 100vw;
    }

    #bike .swiper-slide {
        padding:0 20px;
    }

    #bike .swiper-slide .new {
        left: 20px;
        font-weight: 500;
    }

    #bike .swiper-slide img {
        margin: 40px 0 15px;
    }

    #bike .swiper-button-prev,
    #bike .swiper-button-next {
        display: none;
    }

    #bike .swiper-scrollbar {
        height: 2px;
        position: static;
        margin: 75px auto 0;
        width: calc(100vw - 100px);
    }
}


@media (min-width: 768px) {
    #bike .swiper-scrollbar {
        display: none;
    }
}
</style>