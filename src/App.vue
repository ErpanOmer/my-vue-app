<style>
#banner {
    overflow-x: hidden;
    height: calc(100vh - 111px);
    /* height: 100vh; */
    /* min-height: 800px; */
    position: relative;
    color: #fff;
}


#banner .two {
    background: url('https://cdn.shopify.com/s/files/1/0633/2068/6808/files/Mask_Group_18459_f7b0a901-a6ef-47f0-bfac-3e98659eeca9.jpg?v=1679568839') center center/cover no-repeat;
}

#banner .two>div,
#banner .one>div {
    max-width: 1280px;
    margin: auto;
}

#banner .two>div {
    display: flex;
    justify-content: space-between;
    padding-top: 10vh;
}

#banner .two img {
    max-width: 408px;
    max-height: 230px;
}

#banner .two .left {
    transform: translateY(30px);
}

#banner .two .u24Medium {
    margin-top: 26px;
    margin-bottom: 46px;
}

#banner .two .my-button {
    margin-right: 15px;
}


#banner .one {
    background: url('https://cdn.shopify.com/s/files/1/0633/2068/6808/files/Mask_Group_18457_c4868f46-509a-4fc5-bdfd-5f36275dd375.jpg?v=1679568657') center bottom/cover no-repeat;
}

#banner .one > div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
}

#banner .one > div .right {
    max-width: 577px;
    display: flex;
    flex-direction: column;
}

#banner .one > div .right .texts {
    display: flex;
    align-items: center;
}

#banner .one > div .right > img {
    margin-top: 3vh;
    margin-bottom: 6vh;
}

#banner .one > div .right .texts .u20Medium {
    font-size: 18px;
    line-height: 18px;
    margin-right: 12px;
    transform: translateY(-5px);
}

#banner .one > div .right .box {
    display: flex;
    align-items: center;
}

#banner .one > div .right .box > span {
    width: 56px;
    height: 56px;
    display: block;
    background-color: #fff;
    border-radius: 50%;
    color: #479ABA;
    font-size: 50px;
    text-align: center;
    line-height: 50px;
    min-width: 56px;
    margin-right: 25px;
}

#banner .one > div .right .box > div {
    background-color: #fff;
    padding: 14px;
    border-radius: 14px;
    display: flex;
    flex: 1;
    max-width: 480px;
}

#banner .one > div .right .box > div .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #000;
    text-align: center;
    flex: 1;
}

#banner .one > div .right .box > div .item img {
    max-width: 72px;
}

#banner .one > div .right .box > div .item span {
    font-size: 14px;
    line-height: 18px;
}

#banner .one > div .right .box > div .item > div {
    background-color: #479ABA;
    border-radius: 20px;
    color: #fff;
    padding: 10px 20px;
    margin-bottom: 12px;
}

#banner .one > div .right .buttons {
    display: flex;
    margin-top: 6vh;
    justify-content: center;
    width: 100%;
}

#banner .one > div .right .buttons .my-button {
    margin: 0 10px;
}

#banner .swiper-pagination-bullet {
    height: 6px;
    width: 6px;
    background-color: #d5d5d5;
    opacity: 0.5;
}

#banner .swiper-pagination-bullet-active {
    width: 30px;
    height: 6px;
    border-radius: 5px;
    transition: all .3s;
    opacity: 1;
}


@media (max-width: 767px) {
    #banner,
    #banner .swiper-wrapper,
    #banner .swiper-slide {
        height: 746px;
    }

    #banner .two {
        background: url('https://cdn.shopify.com/s/files/1/0633/2068/6808/files/Mask_Group_18461.jpg?v=1679560804') center center/cover no-repeat;
        position: relative;
    }


    #banner .two>div {
        padding-top: 3.5vh;
        flex-direction: column;
        text-align: center;
    }


    #banner .two .left {
        transform: none;
    }


    #banner .two img {
        max-width: 189px;
        max-height: 107px;
        margin: auto;
    }

    #banner .two h2 {
        font-size: 36px;
        line-height: 40px;
    }

    #banner .two .u24Medium {
        margin-top: 10px;
        margin-bottom: 27px;
        font-size: 16px;
        line-height: 22px;
    }

    #banner .buttons {
        position: absolute;
        bottom: 60px;
        left: 0;
        right: 0;
        text-align: center;
    }


    #banner .one {
        background: url('https://cdn.shopify.com/s/files/1/0633/2068/6808/files/Mask_Group_18465_2x_8d57d433-07f3-408d-9cb9-932ca2943bf3.jpg?v=1679572207') center bottom/cover no-repeat;
        padding: 10%;
    }

    #banner .one > div {
        align-items: flex-start;
    }

    #banner .one > div .right {
        align-items: center;
        width: 100%;
    }

    #banner .one > div .right .texts .u48DemiBold {
        font-size: 24px;
        line-height: 20px;
    }

    #banner .one > div .right > img {
        max-width: 224px;
        margin-top: 10%;
        margin-bottom: 10%;
    }

    #banner .one > div .right .box {
        width: 100%;
    }

    #banner .one > div .right .box > div {
        padding: 6px;
    }

    #banner .one > div .right .box > div .item img {
        max-width: 45px;
    }

    #banner .one > div .right .box > div .item span {
        font-size: 11px;
        line-height: 13px;
    }

    #banner .one > div .right .box > div .item > div {
        padding: 4px 14px;
        font-size: 12px;
    }
}
</style>

<template>
    <div id="banner">
        <div class="swiper-wrapper">
            <div class="swiper-slide two">
                <div>
                    <div class="left">
                        <h2>HUGE <br>EASTER SALE</h2>
                        <div class="u24Medium">Up to 30% OFF</div>
                        <div class="buttons">
                            <a class="my-button" href="">Shop Now</a>
                            <a class="my-button my-button-black" href="">Test Rides</a>
                        </div>
                    </div>
                    <img src="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/Mask_Group_18455.png?v=1679559152"
                        alt="">
                </div>
            </div>
            <div class="swiper-slide one">
                <div>
                    <div class="right">
                        <div class="texts">
                            <span class="u20Medium pcHide">Huge Easter Sale</span>
                            <span class="u48DemiBold">Carbon 1</span>
                        </div>
                        <img src="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/Mask_Group_18487.png?v=1679567557" alt="">
                        <div class="box">
                            <span class="pcHide">+</span>
                            <div>
                                <div class="item">
                                    <img src="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/Mask_Group_18445.jpg?v=1679565530" alt="">
                                    <span>Water Bottle <br>Cage</span>
                                </div>
                                <div class="item">
                                    <img src="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/Mask_Group_18444.jpg?v=1679565970" alt="">
                                    <span>Micro <br>Fender</span>
                                </div>
                                <div class="item">
                                    <img src="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/Image_140.jpg?v=1679566024" alt="">
                                    <span>Kickstand</span>
                                </div>
                                <div class="item" style="max-width: 87px;">
                                    <div>FREE</div>
                                    <span style="text-decoration: line-through;">€173</span>
                                </div>
                            </div>
                        </div>
                        <div class="buttons">
                            <a class="my-button" href="">Shop Now</a>
                            <!-- <a class="my-button my-button-black" href="">Test Rides</a> -->
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

    new Swiper('#banner', {
        // autoplay: {
        //     disableOnInteraction: false,
        //     pauseOnMouseEnter: true,
        //     delay: 5000,
        // },
        // loop: true,
        speed: 1000,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    })
})


</script>