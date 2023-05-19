<style lang="scss">
@import '../styles/home.scss';
</style>

<template>
    <div class="banner">
        <div class="swiper-wrapper">
            <!--<div class="swiper-slide common">
                    <div class="centeral-content">
                        <div></div>
                        <div class="right">
                            <div class="u24Medium_v2">Carbon 1</div>
                            <div class="u60DemiBold_v2">Your Smart and Lightweight Pal</div>
                            <div class="flex-1 pcHide"></div>
                            <div class="buttons">
                                <a class="my-button" href="/products/urtopia-carbon-e-bike">Order now</a>
                                <a class="my-button my-button-ghost mobileHide" href="/pages/test-ride">Test rides</a>
                                <a class="my-button pcHide" href="/pages/test-ride">Test rides</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide maksim">
                    <div class="centeral-content">
                        <div></div>
                        <div class="right">
                            <div class="u17Medium_v2 mobileHide">Tune your ride with Chord.</div>
                            <div class="u48DemiBold_v2">"Elegant, powerful and reliable"</div>
                            <div class="flex-1 pcHide"></div>
                            <div class="buttons">
                                <a class="my-button" href="">Meet Chord</a>
                                <a class="my-button my-button-ghost mobileHide" href="">Watch video</a>
                                <a class="my-button pcHide" href="">Watch video</a>
                            </div>
                        </div>
                    </div>
                </div>-->

            <div class="swiper-slide memorial-day">
                <div class="centeral-content">
                    <div class="left">
                        <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/231_2x_78eb3cc8-b8cd-4d30-babf-f12df4298d7d.png?v=1684401205"
                            alt="">
                        <div class="u36DemiBold_v2">Get $600 Off + 3 Freebies <br> On Carbon 1s</div>
                        <div class="flex-1 pcHide"></div>
                        <div class="buttons">
                            <a class="my-button my-button-black" href="">Order now</a>
                            <a class="my-button" href="">Meet Carbon 1s</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>



<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    // 是否有多个banner, 如果有 开启swiper
    const isMultipartBanner = document.querySelectorAll('.banner .swiper-slide')

    isMultipartBanner.length > 1 && new Swiper('.banner', {
        autoplay: {
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            delay: 10000,
        },
        loop: true,
        speed: 1000,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    })
})
</script>