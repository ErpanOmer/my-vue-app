<style lang="scss">
@import '../styles/test.scss';
</style>


<template>
    <div class="ultimate">
        <div class="swiper-wrapper">
            <div class="swiper-slide a"></div>
            <div class="swiper-slide b"></div>
            <div class="swiper-slide c"></div>
        </div>
        <div>
            <h3 class="u36Medium_v2 mobileHide">Ultimate Machine Beast</h3>
            <p class="u17Light_v2 mobileHide">
                <span>
                    Urtopia Fusion offers four dynamic drive modes catering to your every whim, empowering you to
                    conquer any road challenge. Whether cruising through the city or braving a polar vortex, find your
                    perfect mode and dominate every adventure.
                </span>
            </p>
            <span class="flex-1"></span>
            <div class="icons">
                <div>
                    <img class="a mobileHide"
                        src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/19557.svg?v=1729504926" alt="">
                    <img class="b mobileHide"
                        src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/19552.svg?v=1729504926" alt="">
                    <span class="u14Medium_v2">Dual Drive Mode</span>
                    <div></div>
                    <span class="u14Medium_v2 xxxxx">Dual motor 700 W, more powerful and stable</span>
                </div>
                <div>
                    <img class="a mobileHide"
                        src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/19558.svg?v=1729505344" alt="">
                    <img class="b mobileHide"
                        src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/19558.svg?v=1729505344" alt="">
                    <span class="u14Medium_v2">Rear Drive Mode</span>
                    <div></div>
                    <span class="u14Medium_v2 xxxxx">Single motor 350W, energy efficient & more range</span>
                </div>
                <div>
                    <img class="a mobileHide"
                        src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/19045.svg?v=1729505268" alt="">
                    <img class="b mobileHide"
                        src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/19555.svg?v=1729505268" alt="">
                    <span class="u14Medium_v2">Throttle Mode</span>
                    <div></div>
                    <span class="u14Medium_v2 xxxxx">Full output up to 1500 W, powerful and speedy</span>
                </div>
            </div>
            <div class="swiper-pagination pcHide"></div>
        </div>
    </div>
</template>


<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    const ultimate_swiper = new Swiper('.ultimate', {
        autoplay: {
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            delay: 2000,
        },
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        // grabCursor: true,
        allowTouchMove: false,
        speed: 0,
        on: {
            slideChange: function () {
                $(`.ultimate .icons > div:nth-child(${this.realIndex + 1})`).addClass('active').siblings().removeClass('active')
            },
        },
        pagination: { el: '.ultimate .swiper-pagination' },
    });


    const clears = []
    $(`.ultimate .icons > div`).each((index, elem) => {
        $(elem).on('click', () => {
            for (const c of clears) {
                clearTimeout(c)
            }

            ultimate_swiper.slideToLoop(index)
            setTimeout(() => {
                ultimate_swiper.autoplay.stop()
            })

            clears.push(setTimeout(() => {
                ultimate_swiper.autoplay.start()
            }, 3000))
        })

    })
})
</script>