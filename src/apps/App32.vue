<style lang="scss">
@import '../styles/home.scss';
</style>

<template>
    <div class="banner">
        <div class="swiper-wrapper">
            <div class="swiper-slide labor-day labor-day-chord">
                <div class="centeral-content">
                    <div class="left">
                        <div class="count-down pcHide">
                            <iframe height="100%" src="https://w2.countingdownto.com/4716069" frameborder="0" scrolling="no"></iframe>
                        </div>
                        <img class="labor-logo" src="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/labor-day_2x_06015470-6658-4a14-b251-69f561abb093.png?v=1682392239" alt="">
                        <div class="u30DemiBold_v2">300€ off on Chord <br class="pcHide"> Expires May.8</div>
                        <div class="count-down mobileHide">
                            <iframe height="100%" src="https://w2.countingdownto.com/4716094" frameborder="0" scrolling="no"></iframe>
                        </div>
                        <!-- <img  class="acc" src="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/Group_20932_2x_4bb6eb6f-2f16-4f56-9576-f1cfd0897014.png?v=1682392450" alt=""> -->
                        <div class="flex-1 pcHide"></div>
                        <div class="buttons">
                            <a class="my-button" href="/products/urtopia-carbon-e-bike">Order now</a>
                            <a class="my-button" href="/products/urtopia-carbon-e-bike">Lease with Jobrad</a>
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
