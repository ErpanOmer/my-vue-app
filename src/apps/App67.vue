<style lang="scss">
@import '../styles/test.scss';
</style>


<template>
    <div class="step_folding">
        <div class="centeral-content">
            <div>
                <span class="u48Medium_v2">2 Step Folding</span>
                <span class="u17Light_v2">It folds in 30 seconds with just two steps, making it simple and
                    space-saving.</span>
                <div class="progress">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div class="swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" >
                        <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/20241012-184840_2x_f95f0716-b194-48d8-b90f-54a30f8e989d.png?v=1729483015" />
                    </div>
                    <div class="swiper-slide" >
                        <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/20241012-184906_2x_4e9cb21c-99e3-4d5d-acd7-12a93a099d84.png?v=1729482988" />
                    </div>
                    <div class="swiper-slide" >
                        <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/20241012-184908_2x_f690fe39-ffed-4931-8d30-943ec18958d7.png?v=1729482982" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {


    let direction_index = 0
    new Swiper('.step_folding .swiper', {
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
        speed: 600,
        on: {
            slideChange: function () {
                if (this.realIndex === 0) {
                    $(`.step_folding .progress > div`).removeClass('active')
                }

                if (this.realIndex === 1) {
                    // 往右
                    if (this.activeIndex > this.previousIndex) {
                        $(`.step_folding .progress > div:nth-child(1)`).addClass('active')
                    } else {
                        $(`.step_folding .progress > div:nth-child(1)`).addClass('active')
                        $(`.step_folding .progress > div:nth-child(2)`).removeClass('active')
                    }
                }

                if (this.realIndex === 2) {
                    if (this.activeIndex > this.previousIndex) {
                        $(`.step_folding .progress > div:nth-child(2)`).addClass('active')
                    } else {
                        $(`.step_folding .progress > div:nth-child(1)`).addClass('active')
                        $(`.step_folding .progress > div:nth-child(2)`).addClass('active')
                    }                
                }

                direction_index = this.previousIndex
            },
        },
    });
})
</script>