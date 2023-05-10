<style lang="scss">
@import '../styles/home.scss';
</style>

<template>
    <div class="banner">
        <div class="swiper-wrapper">
            <div class="swiper-slide fathers-day">
                <div class="centeral-content">
                    <div>
                        <img class="fa" src="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/1_2x_08bbd547-37f1-4603-be80-3735fd446179.png?v=1683537866" alt="">
                        <div class="u30DemiBold_v2">Get 3 extras for free</div>
                        <img class="acc mobileHide" src="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/Group_20932_2x_4d2ea265-d13d-4956-a5b8-0427025b0743.png?v=1683537381" alt="">
                        <img class="acc pcHide" src="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/free_2x_97462865-de4b-480d-b835-7ecf0d7233ae.png?v=1683538764" alt="">
                        <div class="flex-1 pcHide"></div>
                        <div class="buttons">
                            <a class="my-button" href="/products/urtopia-carbon-e-bike">Order now</a>
                            <a class="my-button" href="/pages/ebike-leasing">Lease now</a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="swiper-slide labor-day">
                <div class="centeral-content">
                    <div class="left">
                        <img src="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/labor-day_2x_06015470-6658-4a14-b251-69f561abb093.png?v=1682392239" alt="">
                        <div class="u30DemiBold_v2">Carbon 1 for 3299€ <br class="pcHide">+ freebies</div>
                        <img  class="acc" src="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/Group_20932_2x_4bb6eb6f-2f16-4f56-9576-f1cfd0897014.png?v=1682392450" alt="">
                        <div class="flex-1 pcHide"></div>
                        <div class="buttons">
                            <a class="my-button" href="/products/urtopia-carbon-e-bike">Order now</a>
                            <a class="my-button" href="/products/urtopia-carbon-e-bike">Lease with Jobrad</a>
                        </div>
                    </div>
                </div>
            </div> -->
            <!-- <div class="swiper-slide common">
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
            </div> -->
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
            delay: 5000,
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
