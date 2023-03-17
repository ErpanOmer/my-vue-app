<template>
    <div class="about-us">
        <div class="banner">
            <h1>Your Utopia <br> Starts Here</h1>
            <div class="u17Light">
                We use technology to redefine how people ride. With our innovations, a healthy, fun and sustainable
                lifestyle is right in front of you.
            </div>
        </div>
        <div class="swiper swiper1">
            <div class="u42DemiBold">From Vision to Reality: <br>The Urtopia Story</div>
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/0602-1.jpg?v=1678868294" alt="">
                    <div class="u17Light">
                        Urtopia was founded by a group of passionate cycling fans and top engineers graduated from MIT, UMN,
                        Cornell, and CMU. We share a vision that technology can do good to both people’s life and the
                        planet. We’re committed to putting users first, and to delivering cutting-edge solutions that
                        empower everybody to live life to the fullest.
                    </div>
                </div>
                <div class="swiper-slide">
                    <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/20230118-untitled-4684.png?v=1677736653"
                        alt="">
                    <div class="text">
                        <div class="u24Medium">Integrated Light</div>
                        <div class="u20Light">20 Lux Headlight with German road regulation-compliant design: a well-balanced
                            combination of beauty and safety.</div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18303.png?v=1677736665"
                        alt="">
                    <div class="text">
                        <div class="u24Medium">Adaptive Torque Sensor</div>
                        <div class="u20Light">Unlike jerky cadence sensing, proprietary torque sensor enables super-fast
                            speed adaption.</div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18304.png?v=1677736802"
                        alt="">
                    <div class="text">
                        <div class="u24Medium">Fenders & Kickstand</div>
                        <div class="u20Light">Navigate rough terrains and any weather conditions with our pre-installed
                            fenders and kickstand included in the package.</div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18356.png?v=1677736974"
                        alt="">
                    <div class="text">
                        <div class="u24Medium">Reliable Hydraulic Disc Brakes</div>
                        <div class="u20Light">It provide reliable and consistent stopping power in any weather condition,
                            ensuring a safe and smooth ride.</div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18354.png?v=1677737057"
                        alt="">
                    <div class="text">
                        <div class="u24Medium">8-Speed Shimano Gearing</div>
                        <div class="u20Light">Experience seamless gear shifts and tackle different terrain with the
                            versatile 8-speed Shimano gearing system.</div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18355.png?v=1677737357"
                        alt="">
                    <div class="text">
                        <div class="u24Medium">Responsive Motor</div>
                        <div class="u20Light">The 350W intelligent motor delivers a quiet and smooth ride while also being
                            energy-efficient, allowing riders to travel further.</div>
                    </div>
                </div>
            </div>
            <div class="buttons">
                <div class="swiper-button-prev"></div><!--左箭头。如果放置在swiper外面，需要自定义样式。-->
                <div class="swiper-button-next"></div><!--右箭头。如果放置在swiper外面，需要自定义样式。-->
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.about-us {

    .banner {
        height: calc(100vh - 111px);
        background: url('https://cdn.shopify.com/s/files/1/0633/2068/6808/files/Group_20710.jpg?v=1678861240') center center/cover no-repeat;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 20%;

        .u17Light {
            max-width: 400px;
            line-height: 24px;
            margin-top: 50px;
        }
    }

    .swiper1 {
        --swiper-theme-color: #ff6600;
        /* 设置Swiper风格 */
        --swiper-navigation-color: #fff;
        /* 单独设置按钮颜色 */
        --swiper-navigation-size: 15px;
        /* 设置按钮大小 */
        overflow-x: hidden;
        cursor: auto;
        color: #000;
        padding: 128px 0;

        .u42DemiBold {
            text-align: left;
            max-width: 1280px;
            margin: 0 auto 60px;
        }

        .u17Light {
            line-height: 24px;
        }

        .buttons {
            max-width: 1280px;
            margin: auto;
            display: flex;
            justify-content: end;

            .swiper-button-prev,
            .swiper-button-next {
                margin-left: 20px;
                margin-top: 20px;
                position: static;
                background-color: #666;
                border-radius: 50%;
                padding: 20px;
                box-sizing: border-box;
                opacity: .5;
                z-index: 2;
            }

            .swiper-button-disabled {
                opacity: .25;
            }
        }
    }
}

@media (max-width: 767px) {
    .about-us {

        .banner {
            height: 600px;
            background: url('https://cdn.shopify.com/s/files/1/0633/2068/6808/files/Mask_Group_18375.jpg?v=1678862658') center center/cover no-repeat;
            justify-content: flex-start;
            padding: 5% 7.5%;

            .u17Light {
                max-width: 400px;
                line-height: 20px;
                margin-top: 20px;
                font-size: 14px;
            }

            h1 {
                font-size: 36px;
                line-height: 42px;
            }
        }
    }
}
</style>


<script setup>
import { onMounted } from 'vue';

onMounted(() => {


    const width = document.body.clientWidth
    const isMobile = width < 768

    const r = new Swiper('.about-us .swiper1', {
        slidesOffsetBefore: width > 1280 ? (width - 1280) / 2 : 0,
        spaceBetween: isMobile ? '4%' : '2%',
        slidesPerView: isMobile ? 1.5 : 4,
        freeMode: isMobile ? true : false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        //    scrollbar: {
        //         el: '.swiper-scrollbar',
        // 	    draggable: true,
        //   },
    })

    console.log(r);


})

</script>