<!-- <template>
     <div id="myModal">Click me to open a modal window!</div>
</template> -->

<template>
    <div id="myModal">Click me to open a modal window!</div>
    <div class="hide">
        <div class="section2-design section2-smart" id="section2-smart-dialog">
            <div class="swiper-wrapper">
            <div class="swiper-slide">
                <div class="texts">
                    <div class="text">
                        <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18101.svg?v=1677912553" width="40" alt="">
                        <div>
                            <div class="u20DemiBold">Built-in Navigation</div>
                            <div class="u17Light">Goodbye phone, no more struggling to navigate with a tiny screen.</div>
                        </div>
                    </div>
                    <div class="text">
                        <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18337.svg?v=1677913501" width="40" alt="">
                        <div>
                            <div class="u20DemiBold">Fingerprint Unlock</div>
                            <div class="u17Light">Provides an efficient and intuitive option for riding without the hassle of carrying a key.</div>
                        </div>
                    </div>
                    <div class="text">
                        <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18104.svg?v=1677913432" width="40" alt="">
                        <div>
                            <div class="u20DemiBold">Bluetooth Music</div>
                            <div class="u17Light">It’s like having a personal DJ accompanying you everywhere when you ride.</div>
                        </div>
                    </div>
                    <div class="line" style="width: 260px;top: 160px;"></div>
                    <div class="line" style="width: 240px;top: 280px;"></div>
                    <div class="line" style="width: 160px;top: 400px;"></div>
                    <div class="line" style="width: 70px;left: 583px;top: 379px;transform: rotate(-37deg);"></div>
                </div>
                <video autoplay loop class="mobileHide">
                    <source src="https://cdn.shopify.com/videos/c/o/v/5318bf068bb24f4eb208da832868df26.mp4" type="video/mp4">
                </video>
                <video autoplay loop class="pcHide">
                    <source src="https://cdn.shopify.com/videos/c/o/v/a6f606d70686463ba6d5283c095d8635.mp4" type="video/mp4">
                </video>
            </div>
            <div class="swiper-slide">
                <div class="texts">
                    <div class="text">
                        <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18339.svg?v=1677913808" width="40" alt="">
                        <div>
                            <div class="u20DemiBold">OTA Update</div>
                            <div class="u17Light">It provide hassle-free access to the latest bike features and performance enhancements.</div>
                        </div>
                    </div>
                    <div class="text">
                        <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18342.svg?v=1677913934" width="40" alt="">
                        <div>
                            <div class="u20DemiBold">Voice Control</div>
                            <div class="u17Light">It offers customizable voice commands and horn beeps for fun interaction.</div>
                        </div>
                    </div>
                    <div class="text">
                        <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18341.svg?v=1677913949" width="40" alt="">
                        <div>
                            <div class="u20DemiBold">GPS Anti-Theft</div>
                            <div class="u17Light">GPS for security and navigation. No more phone distractions and find your bike easily.</div>
                        </div>
                    </div>
                    <div class="line" style="width: 260px;top: 160px;"></div>
                    <div class="line" style="width: 240px;top: 280px;"></div>
                    <div class="line" style="width: 220px;top: 400px;"></div>
                </div>
                <video autoplay loop class="mobileHide">
                    <source src="https://cdn.shopify.com/videos/c/o/v/730c0c07cd884ddca88778ea6a49ef33.mp4" type="video/mp4">
                </video>
                <video autoplay loop class="pcHide">
                    <source src="https://cdn.shopify.com/videos/c/o/v/05864108298c4c968769f6810d4dee83.mp4" type="video/mp4">
                </video>
            </div>
            <div class="swiper-slide">
                <div class="texts">
                    <div class="text other">
                        <div class="u20DemiBold">Track Your Route</div>
                        <div class="u17Light">Track your rides, achieve fitness goals. Calories burned, range, speed, all recorded in our app.</div>
                    </div>
                    <div class="text other">
                        <div class="u20DemiBold">Share You Story</div>
                        <div class="u17Light">Share rides, photos, stories with Urtopia community in app.</div>
                    </div>
                </div>
                <img class="mobileHide" src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Group_20568_2x_d38dda23-c5c8-4e39-b47c-941efa9c054b.jpg?v=1677912364" alt="">
                <img class="pcHide" src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18407_2x_87816842-1a24-4ce0-9590-1bb335f1381d.jpg?v=1677929766" alt="">
            </div>
        </div>
        <div class="buttons">
            <div class="swiper-button-prev"></div><!--左箭头。如果放置在swiper外面，需要自定义样式。-->
            <div class="swiper-button-next"></div><!--右箭头。如果放置在swiper外面，需要自定义样式。-->
        </div>
        <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';


onMounted(() => {
    const width = document.body.clientWidth
  const isMobile = width < 768
  

  new jBox('Modal', {
          width: isMobile ? 'calc(100vw - 30px)' : 1000,
          height: 'auto',
          // appendTo: $('#app'),
          attach: $('#myModal'),
          // target: $('#app'),
          // height: 100,
          title: 'Smart',
          closeButton: 'title',
          content: $('#section2-smart-dialog'),
          onOpenComplete: function () {
            const videos =  document.querySelectorAll('video')

            videos.forEach(video => {
                video.play()
            })
          }
      })
  
      new Swiper('#section2-smart-dialog', {    
          spaceBetween: isMobile ? 0 : '3%',
          slidesPerView: 1,
          height: '100%',
          autoHeight: true,
          // slidesOffsetAfter: 70,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
         },
         pagination: {
           el:'.swiper-pagination'
         },
    })
  
})
</script>

<style>
.section2-design {
      margin: auto;
      --swiper-theme-color: #ff6600;/* 设置Swiper风格 */
      --swiper-navigation-color: #fff;/* 单独设置按钮颜色 */
      --swiper-navigation-size: 15px;/* 设置按钮大小 */
      overflow: hidden;
      cursor: auto;
      margin-right: -70px;
    }
    
    .section2-design img {
      width: 100%;
      height: auto;
    }

    .section2-design .swiper-slide .text {
        margin-top: 30px;
      /* left: 10px; */
        text-align: left;
        font-size: 16px;
    }
  
    .section2-design .swiper-slide .u17Light {
        margin-top: 12px;
        font-size: 14px;
        font-weight: 400;
    }

  .section2-design .buttons {
      display: flex;
    }

  .section2-design .buttons .swiper-button-prev,
  .section2-design .buttons .swiper-button-next {
        margin-top: 10px;
        position: static;
        background-color: #666;
        border-radius: 50%;
        margin-right: 20px;
        /* padding: 20px; */
        box-sizing: content-box;
        opacity: .5;
        width: 40px;
        height: 40px;
  }

  .section2-design .swiper-button-next.swiper-button-disabled,
  .section2-design .swiper-button-prev.swiper-button-disabled {
    opacity: .25;
  }
  
  
</style>

<style>
@media (max-width: 767px) {
    .section2-design {
        margin-right: 0;
        --swiper-theme-color: #000;
        --swiper-pagination-color: #000;/* 两种都可以 */
    }

    .section2-design .buttons {
        display: none;
    }

    .section2-design .swiper-slide .u20DemiBold {
        font-size: 18px;
    }

    .section2-design .swiper-pagination {
        position: static;
        margin-top: 15%;
    }

    .section2-design .swiper-pagination-bullet {
        height: 6px;
        width: 6px;
    }

    .section2-design .swiper-pagination-bullet-active {
        width: 40px;
        height: 6px;
        border-radius: 5px;
        transition: all .3s;
    }
}

@media (min-width: 768px) {
    .section2-design .swiper-pagination {
        display: none;
    }

    .section2-smart .swiper-slide .pcHide {
        display: none;
    }
}
</style>

<style>
    .section2-smart {
        position: relative;
        margin: -30px -70px -50px;
    }

    .section2-smart .swiper-slide {
        display: grid;
        grid-template-columns: 1fr 1fr;
        /* grid-column-gap: 80px; */
    }

    .section2-smart .swiper-slide video {
        width: 100%;
        height: auto;
    }

    .section2-smart .swiper-slide .texts {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-right: 80px;
        padding-left: 68px;
        padding-top: 113px;
        padding-bottom: 200px;
        position: relative;
    }

    .section2-smart .swiper-slide .text {
        display: flex;
        align-items: flex-start;
        margin: 0;
    }
    
    .section2-smart .swiper-slide .text img {
        width: 40px;
        margin-right: 12px;
    }

    .section2-smart .swiper-slide .text .u20DemiBold {
        font-size: 18px;
    }

    .section2-smart .swiper-slide .other {
        flex-direction: column;
        margin-left: 50px;
    }

    .section2-smart .buttons {
        position: absolute;
        bottom: 70px;
        left: 68px;
    }

    .section2-smart .swiper-slide .line {
        position: absolute;
        height: 1px;
        background-color: #000;
        opacity: .35;
        left: 430px;
    }

    .section2-smart .swiper-slide .line1 {
        top: 140px;
    }
</style>

<style>
@media (max-width: 767px) {
    .section2-smart {
        margin: -30px -15px;
    }

    .section2-smart .swiper-slide {
        display: flex;
        flex-direction: column;
    }

    .section2-smart .swiper-slide .texts {
        padding: 0 22px;
        height: 40vh;
        padding-bottom: 10%;
        justify-content: space-evenly;
    }

    .section2-smart .swiper-slide .texts .text .u20DemiBold {
        font-size: 16px;
    }

    .section2-smart .swiper-slide .texts .text  .u17Light {
        font-size: 12px;
        margin: 0;
    }

    .section2-smart .swiper-slide .line {
        display: none;
    }

    .section2-smart .swiper-pagination {
        margin: 0;
        position: absolute;
        top: 45%;
        bottom: 55%;
    }

    .section2-smart .swiper-slide .mobileHide {
        display: none;
    }

    .section2-smart .swiper-slide .other {
        margin: 0;
        padding-right: 20px;
    }
}
</style>