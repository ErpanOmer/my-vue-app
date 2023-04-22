<template>
    <div id="banner">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <div class="banner pcHide">
                    <div>
                        <div class="u60DemiBold">New Arrival</div>
                        <div class="u17Light">Early birds enjoy $600 off</div>
                    </div>
                    <a class="my-button" href="/pages/lightweight-commuter-ebike-urtopia-chord">Shop Now</a>
                    <img src="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/20230306-093453.png?v=1678066544" />
                    <div>
                        <div class="u60DemiBold">Urtopia Chord</div>
                        <div class="u17Light">on our limited-time offer</div>
                    </div>
                </div>
                <div class="banner banner-mobile mobileHide">
                    <div>
                        <div class="u24Light">New Arrival</div>
                        <div class="u42DemiBold">Chord</div>
                        <div class="u17Light">Early birds enjoy $600 off on our limited-time offer.</div>
                        <div style="z-index:2;">
                            <a class="my-button" href="/pages/lightweight-commuter-ebike-urtopia-chord">Shop Now</a>
                        </div>
                    </div>
                    <img src="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/20230306-095205.png?v=1678067541" />
                    <div></div>

                </div>
            </div>
            <div class="swiper-slide maksim">
                <div class="text">
                    <div class="u48DemiBold">Chord ✕ Maksim</div>
                    <div class="u17Light">
                        A passionate prodigy, and one of the world’s fastest pianists, Mr. Mrvica inspired the design the
                        philosophy of Chord, a crossover between art and tech.
                    </div>
                    <a class="my-button" href="/pages/lightweight-commuter-ebike-urtopia-chord">Shop Now</a>
                </div>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    new Swiper('#banner', {
        autoplay: {
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            delay: 5000,
        },
        loop: true,
        speed: 1000,
        pagination: {
            el:'.swiper-pagination',
            clickable: true
        },
    })
})
</script>

<style>
.banner {
    display: flex;
    height: calc(100vh - 111px);
    min-height: 800px;
    position: relative;
}

.banner>div:first-child {
    padding-top: 90px;
    width: 50%;
    background-color: #000;
    color: #fff;
    text-align: right;
    padding-right: 10px;
}

.banner>img {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    min-width: 1280px;
}

.banner>div:last-child {
    padding-top: 90px;
    width: 50%;
    background-color: #fff;
    color: #000;
    text-align: left;
    padding-left: 10px;
}

.banner .u60DemiBold {
    font: normal normal 600 60px urbane;
    white-space: nowrap;
    overflow: hidden;
}

.banner .u17Light {
    margin-top: 15px;
    font-weight: 100;
    font-weight: 400;
}

.banner .my-button {
    position: absolute;
    top: 250px;
    left: 50%;
    transform: translateX(-50%);
    margin: auto;
    box-shadow: 0 0 20px rgb(0 0 0 / 10%);
    z-index: 1;

}

@media (min-width: 768px) {
    .mobileHide {
        display: none !important;
    }
}
</style>

<style>
@media (max-width: 767px) {
    .pcHide {
        display: none !important;
    }

    .banner-mobile {
        height: 685px;
        min-height: auto;
    }

    .banner-mobile>div:first-child {
        display: flex;
        flex-direction: column;
        padding: 0;
        text-align: left;
        padding-left: 7%;
        flex: 2.4;
    }

    .banner-mobile>div:last-child {
        flex: 1;
    }

    .banner-mobile>img {
        width: 100%;
        min-width: auto;
    }

    .banner-mobile .my-button {
        position: static;
        margin: 0;
        box-shadow: none;
        margin-top: 35px;
        transform: none;
    }

    .banner-mobile .u24Light {
        padding-top: 25%;
        font-weight: 400;
    }

    .banner-mobile .u42DemiBold {
        margin: 5px 0 20px;
    }
}
</style>


<style>
#banner {
    overflow-x: hidden;
    height: calc(100vh - 111px);
    min-height: 800px;
    position: relative;
}

#banner .swiper-wrapper .maksim {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    background: url('https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Group_20696_2x_d80c45c9-3f9a-4b2a-a550-b7384473fa76.jpg?v=1678263715') center center/cover no-repeat;
}

#banner .swiper-wrapper .maksim .u48DemiBold {
    font-size: 60px;
}

#banner .swiper-wrapper .maksim .u17Light {
    margin: 40px 0 46px;
    max-width: 400px;
    line-height: 24px;
}

#banner .swiper-wrapper .maksim .text {
    padding-left: 16.66666%;
    display: flex;
    flex-direction: column;
    align-items: baseline;
}

#banner .swiper-pagination {
    position: absolute;
    --swiper-theme-color: #000;
    --swiper-pagination-color: #000;/* 两种都可以 */
    --swiper-pagination-bullet-inactive-opacity: 1;
}

#banner .swiper-pagination-bullet {
    height: 6px;
    width: 6px;
    background-color: #ccc;
}

#banner .swiper-pagination-bullet-active {
    width: 30px;
    height: 6px;
    border-radius: 5px;
    transition: all .3s;
    background-color: #ccc;
    /* color: #fff; */
}


@media (max-width: 767px) {
    #banner {
        height: auto;
        min-height: auto;
    }

    #banner .swiper-pagination {
        top: 650px;
    }

    #banner .swiper-wrapper .maksim {
        justify-content: flex-start;
        height: 685px;
        background: url('https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Group_20697_2x_442c0499-4bc9-4dbb-9b78-1d1f920460a4.png?v=1678269781') center center/cover no-repeat;
        background-position-y: 100%;
    }

    #banner .swiper-wrapper .maksim .text {
        padding: 13% 15px 0;
        align-items: center;
    }

    #banner .swiper-wrapper .maksim .u48DemiBold {
        font-size: 30px;
    }

    #banner .swiper-wrapper .maksim .u17Light {
        font-size: 15px;
        text-align: center;
        margin: 20px 0 40px;
        line-height: 21px;
    }
}
</style>