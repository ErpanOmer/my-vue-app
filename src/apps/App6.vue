<!-- <template>
     <div id="myModal">Click me to open a modal window!</div>
</template> -->

<template>
    <div id="myModal">Click me to open a modal window!</div>
    <div class="hide">
        <div class="section2-design" id="section2-design-dialog">
            <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18381.png?v=1677762656" alt="">
                <div class="text">
                    <div class="u20DemiBold">Why</div>
                    <div class="u20DemiBold">Inspired by Piano</div>
                    <div class="u17Light">The piano, with its elegant curves and simple color palette, perfectly embodied the vision we had for Chord. We wanted an ebike that would seamlessly blend into the city landscape, yet still stand out as a stunning work of art. And so, Chord was born.</div>
                </div>
            </div>
            <div class="swiper-slide">
                <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18380.png?v=1677762549" alt="">
                <div class="text">
                    <div class="u20DemiBold">Who</div>
                    <div class="u20DemiBold">Perfect Persona</div>
                    <div class="u17Light">who will be the character for this idea, the croatian pianist Maksim probably the best answer. His musical soul aligned with our product, sparking new inspiration for design. Working with him was like finding a soulmate for our design concept.</div>
                </div>
            </div>
            <div class="swiper-slide">
                <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18382.png?v=1677762710" alt="">
                <div class="text">
                    <div class="u20DemiBold">How</div>
                    <div class="u20DemiBold">Liquid Forging</div>
                    <div class="u17Light">It offer 4 main advantages: seamless connected shapes, a wide range of possibilities for design, high product density, and superior strength with casting-like accuracy.</div>
                </div>
            </div>
            <div class="swiper-slide">
                <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18383.png?v=1677762803" alt="">
                <div class="text">
                    <div class="u20DemiBold">What</div>
                    <div class="u20DemiBold">Urtopia Chord</div>
                    <div class="u17Light">Design-wise, the Chord breaks away from traditional e-bike frame designs with its sleek, pure white curves that give the bike an air of simplicity and elegance.</div>
                </div>
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
}
</style>