<style lang="scss">
@import '../styles/home.scss';
</style>

<template>
    <div class="banner">
        <div class="swiper-wrapper">
            <div class="swiper-slide bluetti">
                <div class="centeral-content">
                    <div>
                        <img src="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/Group_21026_2x_1fff6f8e-1729-48a7-a825-b915950c3611.png?v=1685619836" alt="">
                        <div class="u56DemiBold_v2">Blue Sky Rider</div>
                        <div class="u36DemiBold_v2">Enjoy €600 OFF Exclusive <br class="pcHide"> Code: GREENERBIKE</div>
                        <div class="flex-1 pcHide"></div>
                        <div class="buttons">
                            <a class="my-button" href="/products/urtopia-carbon-e-bike">Order now</a>
                            <a class="my-button my-button-ghost" href="https://bit.ly/3N44FzP">Visit Bluetti</a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="swiper-slide spring-sale">
                <div class="centeral-content">
                    <div>
                        <div class="u56DemiBold_v2">{{ settings.sale_name }}</div>
                        <div class="u48Medium_v2">Urtopia embraces ESG</div>
                        <div class="u36DemiBold_v2">Get €600 Off + 3 Freebies<br>on Carbon 1 {{ settings.sale_end_time }}
                        </div>
                        <div class="count-down pcHide">
                            <iframe height="155" width="352" src="https://w2.countingdownto.com/4780347" scrolling="no"
                                frameborder="0"></iframe>
                        </div>
                        <div class="flex-1 pcHide"></div>
                        <div class="buttons">
                            <a class="my-button" href="/products/urtopia-carbon-e-bike">Order now</a>
                            <a class="my-button my-button-ghost" href="/pages/e-bike">Meet Carbon 1</a>
                        </div>
                        <div class="count-down mobileHide">
                            <iframe height="308" width="350" src="https://w2.countingdownto.com/4780344" scrolling="no"
                                frameborder="0"></iframe>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div> -->
            <!--<div class="swiper-slide common">
            <div class="centeral-content">
                <div></div>
                <div class="right">
                    <div class="u24Medium_v2">Carbon 1</div>
                    <div class="u60DemiBold_v2">Your Smart and Lightweight Pal</div>
                    <div class="flex-1 pcHide"></div>
                    <div class="buttons">
                        <a class="my-button" href="/products/urtopia-carbon-e-bike">Order now</a>
                        <a class="my-button my-button-ghost mobileHide" href="/pages/ebike-leasing">Leasing</a>
                        <a class="my-button pcHide" href="/pages/ebike-leasing">Leasing</a>
                    </div>
                </div>
            </div>
        </div>-->
            <!-- 
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