<style lang="scss">
@import '../styles/carbon-one.scss';
</style>

<template>
    <div class="carbon-one">
        <div class="media gray-background-color"  style="--swiper-theme-color: #000;--swiper-pagination-color: #000;">
            <div class="centeral-content swiper-wrapper">
                <div class="swiper-slide">
                    <div class="u17DemiBold_v2">“It’s incredibly fun to ride”</div>
                    <div class="flex-1"></div>
                    <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Group_20921_2x_361face6-eba5-4a46-b1b6-0f038089d90d.png?v=1682577775" alt="">
                    <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/20230228-165148.png?v=1677574346" alt="">
                </div>
                <div class="swiper-slide">
                    <div class="u17DemiBold_v2">“One of the smartest ebike”</div>
                    <div class="flex-1"></div>
                    <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Group_20921_2x_361face6-eba5-4a46-b1b6-0f038089d90d.png?v=1682577775" alt="">
                    <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/20230228-165209.png?v=1677574346" alt="">
                </div>
                <div class="swiper-slide">
                    <div class="u17DemiBold_v2">“Lightweight carbon fiber road e-bike with affordably-price”</div>
                    <div class="flex-1"></div>
                    <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Group_20921_2x_361face6-eba5-4a46-b1b6-0f038089d90d.png?v=1682577775" alt="">
                    <img src="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/Mask_Group_18537_2x_b9f3aad4-46fb-4257-b3c6-6df9550b1fac.png?v=1682582769" alt="">
                </div>
                <div class="swiper-slide">
                    <div class="u17DemiBold_v2">“One of the lightest ebike”</div>
                    <div class="flex-1"></div>
                    <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Group_20921_2x_361face6-eba5-4a46-b1b6-0f038089d90d.png?v=1682577775" alt="">
                    <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18075_2x_5ed82c19-16b6-4f05-870a-623b5429a75f.png?v=1677303615" alt="">
                </div>
                <div class="swiper-slide">
                    <div class="u17DemiBold_v2">“Best Electric Bike for 2022”</div>
                    <div class="flex-1"></div>
                    <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Group_20921_2x_361face6-eba5-4a46-b1b6-0f038089d90d.png?v=1682577775" alt="">
                    <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/20230228-165154.png?v=1677574346" alt="">
                </div>
                <div class="swiper-slide">
                    <div class="u17DemiBold_v2">“Does phone tech better than some phones”</div>
                    <div class="flex-1"></div>
                    <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Group_20921_2x_361face6-eba5-4a46-b1b6-0f038089d90d.png?v=1682577775" alt="">
                    <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/20230228-165159.png?v=1677574346" alt="">
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <div class="assembly">
            <div class="centeral-content">
                <div class="gray-background-color">
                    <div class="u36DemiBold_v2">90% assembly</div>
                    <div class="u17DemiLight_v2">Delight in the convenience of our 90% pre-assembled e-bike package, making assembly a breeze!</div>
                </div>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/t/63/assets/openvideo-1667475097262.svg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    document.body.clientWidth < 768 && new Swiper ('.media', {    
        autoplay: {
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            delay: 5000,
        },
        loop: true,
        effect: 'fade',
        fadeEffect:{
            crossFade: true
        },
        pagination: {el:'.swiper-pagination'},
        speed: 300
      })
})

</script>