<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    const layer = document.querySelector(".order-modal-three");
    const laybox = document.querySelector(".order-modal-layer-three");
    layer.style.display = "flex";
    laybox.className += " dialog-open";

    //   console.log(layer);
})
</script>


<template>
    <div class="order-modal-layer order-modal-three">
        <div class="order-layer-box order-modal-layer-three">
            <div class="order-layer-header order-flex-row">
                <h3>Urtopia Caring</h3>
                <span onclick="onCloseOrderLayer()">&#x2715;</span>
            </div>
            <div class="order-layer-body tec-spac">
                <div id="faq">
                    <div class="title">Urtopia Chord FAQs</div>
                    <div id="faq-list" class="swiper swiper-no-swiping">
                        <div class="swiper-wrapper" id="detailImgSwiper">
                            <div class="swiper-slide">

                                <div class="faq-item">
                                    <button class="faq-title">
                                        <span>Why Choose Urtopia?</span>
                                        <i class="faq-content-plus"></i>
                                    </button>
                                    <div class="faq-content">
                                        At Urtopia, we are passionate about creating the ultimate riding experience for our
                                        customers. Our focus on technology and design sets us apart from other brands, and
                                        we pride ourselves on providing exceptional customer service and support.<br><br> Our
                                        products are unique and innovative, featuring materials like carbon fiber and
                                        manufacturing processes like liquid forging that give our bikes a high-tech,
                                        futuristic look. When you ride an Urtopia ebike, you’ll be the coolest one in the
                                        street.<br><br> But we’re not just about looks - our bikes are the smartest ebikes on the
                                        market, thanks to our cutting-edge algorithms and control technology. Our bikes are
                                        equipped with GPS, torque, speed, gyroscope, etc. All of these sensors work together
                                        and under our intelligent algorithms to provide a seamless and intelligent riding
                                        experience, with features like theft prevention, bike finding, and user community,
                                        as well as smart online repair and maintenance services.<br><br> We believe in providing
                                        exceptional customer service and support. Our internal aftersales service team
                                        includes English and German-speaking customer service representatives and technical
                                        support personnel. We strive to respond to user requests within 24 hours, diagnose
                                        and develop solutions to problems, and provide personalized and attentive support to
                                        our customers.<br><br> In the United States and Germany, we work with partners to build
                                        aftersales centers, manage spare parts, and provide in-store repairs and maintenance
                                        services in over 20 stores in the US and over 30 stores in Germany. Our goal is to
                                        provide our customers with the best possible riding experience and to be there for
                                        them every step of the way. Choose Urtopia and join us on the ride of a lifetime!
                                    </div>
                                </div>

                                <div class="faq-item">
                                    <button class="faq-title">
                                        <span>What are the height and weight limits for riders in Chord and Chord X?</span>
                                        <i class="faq-content-plus"></i>
                                    </button>
                                    <div class="faq-content">
                                        The Chord is designed for cyclists with a height range from 5’7’’-6’5’’ , the
                                        maximal weight bearing is 287Ibs(130kg). <br><br>The Chord X is designed for cyclists with a
                                        height range from 5’3’’-6’1’’ , the maximal weight bearing is 287Ibs(130kg).
                                    </div>
                                </div>

                                <div class="faq-item">
                                    <button class="faq-title">
                                        <span>What does 6061 aluminum with liquid forging technology mean?</span>
                                        <i class="faq-content-plus"></i>
                                    </button>
                                    <div class="faq-content">
                                        6061 aluminum is a common aluminum alloy that is known for its strength,
                                        weldability, and machinability. It is often used in applications where high strength
                                        and good corrosion resistance are required, such as in aerospace, automotive, and
                                        structural components.<br><br> Liquid forging technology, also known as squeeze casting, is
                                        a manufacturing process that combines elements of casting and forging. It involves
                                        injecting molten metal, in this case, 6061 aluminum, into a preheated die while
                                        applying high pressure to the material to solidify it. This process helps to achieve
                                        a more uniform and dense structure than traditional casting, and can result in
                                        improved mechanical properties, such as higher strength and better fatigue
                                        resistance.<br><br> Overall, using 6061 aluminum with liquid forging technology can result
                                        in high-performance components that are strong, durable, and well-suited for
                                        demanding applications.
                                    </div>
                                </div>

                                <div class="faq-item">
                                    <button class="faq-title">
                                        <span>What accessories are included in the bike box?</span>
                                        <i class="faq-content-plus"></i>
                                    </button>
                                    <div class="faq-content">
                                        Bike Frame, <br>Front Wheel, <br>Handlebar,<br> Smartbar Box ( with integrated StVZO front
                                        light), <br>Sear Post &amp; Saddle,<br> Removable Battery,<br> Battery Keys,<br> Charger,<br> Pedals,<br>
                                        Taillight, <br>Assembly Tools,<br> Kickstand,<br> Front and Rear Fenders.
                                    </div>
                                </div>

                                <div class="faq-item">
                                    <button class="faq-title">
                                        <span>Is the handlebar stem adjustable in Chord?</span>
                                        <i class="faq-content-plus"></i>
                                    </button>
                                    <div class="faq-content">
                                        YES, here is the range:90-120 mm
                                    </div>
                                </div>

                                <div class="faq-item">
                                    <button class="faq-title">
                                        <span>How long does it take to charge the battery? How many miles will it
                                            last?</span>
                                        <i class="faq-content-plus"></i>
                                    </button>
                                    <div class="faq-content">
                                        3hours. Based on lab testing, our ebikes are capable of lasting up to 75 miles in
                                        perfect conditions on a single charge. Actual results will vary depending on weight,
                                        weather, terrain, mode, riding habits and battery care <br> Here is the laboratory Data.<br>
                                        31~75 miles (50~120 km) <br> Eco mode: up to 120km/75 miles <br>Comfort mode: up to 70km/44
                                        miles <br>Sport mode: up to 50km/31 miles
                                    </div>
                                </div>

                                <div class="faq-item">
                                    <button class="faq-title">
                                        <span>How does our aftersales service work?</span>
                                        <i class="faq-content-plus"></i>
                                    </button>
                                    <div class="faq-content">
                                        At Urtopia, we believe that providing excellent customer service is essential.
                                        That’s why we have developed a simple and effective workflow through our CARE
                                        program that can help you in many ways.<br><br> Using CARE is straightforward and easy. You
                                        can submit your requests through any channel, such as email, live chat, or filling
                                        out a form on our website. Our experts will contact you within 24 hours and provide
                                        you with a range of support and services, through various channels, including email,
                                        live chat, phone, and video call. If you need hands-on support, we can guide you to
                                        the nearest authorized repair shop for assistance. <br><br>To ensure that you stay informed
                                        throughout the process, we have an after-sales service tracking system that allows
                                        you to check the progress and expected completion time of your case at any time. <br><br>We
                                        understand that encountering issues with your bike can be frustrating and can
                                        disrupt your daily routine. Our CARE program is designed to make your experience
                                        with Urtopia as seamless and stress-free as possible. We are committed to providing
                                        excellent customer service and support, and we genuinely care about your
                                        satisfaction.<br><br> In summary, the CARE program is a simple and effective workflow that
                                        can help you get the support and services you need quickly and efficiently. We are
                                        here to provide you with comprehensive, aware, responsive, and effective (C.A.R.E.)
                                        support and ensure that you have a positive experience with Urtopia.
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="btnWraped faq-navigation">
                            <div class="prev_btn" onclick="faqSwiperPrev()"></div>
                            <div class="swiper-pagination"></div>
                            <div class="next_btn" onclick="faqSwiperNext()"></div>
                        </div>
                    </div>
                    <div class="buttons">
                        <a class="my-button my-button-black" href="">Read More</a>
                        <a class="my-button my-button-white" href="">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.order-flex-row {
    display: flex;
    align-items: center;
}

.order-modal-layer {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    display: none;
}

.order-modal-layer .order-layer-box {
    opacity: 0;
    background-color: #fff;
    border-radius: 15px;
    width: 900px;
    box-shadow: 0 0 10px 10px rgb(0, 0, 0, 0.08);
}

.order-modal-layer .order-layer-header {
    padding: 12px 20px;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
}

.order-modal-layer .order-layer-header h3 {
    font: normal normal 600 16px/19px urbane;
    margin: 0;
    margin-left: 20px;
}

.order-modal-layer .order-layer-header span {
    font-size: 24px;
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    color: #cfcfcf;
}

.order-modal-layer .sizefit-switch {
    background-color: #eff0f4;
    border-radius: 50px;
    width: 40%;
    margin: 40px auto;
    overflow: hidden;
}

.sizefit-switch .switch-radio {
    position: relative;
    width: 100%;
    overflow: hidden;
}

.order-modal-layer .sizefit-switch button {
    padding: 6px 20px;
    margin: 0;
    font: normal normal 600 16px/33px urbane;
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    overflow: hidden;
    width: 100%;
    border-radius: 50px;
    transition: all 0.1s;
}

.order-modal-layer .sizefit-switch input[type="radio"] {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    margin: 0;
    opacity: 0;
}

#tab-1:checked~.btn,
#tab-2:checked~.btn {
    background: #000000;
    color: #fff;
}

.order-modal-layer .order-layer-body {
    padding: 20px 40px;
    padding-bottom: 40px;
}

.sizefit-box {
    width: 35%;
}

.sizefit-item {
    justify-content: space-between;
}

.sizefit-item:not([data-last="yes"]) {
    margin-bottom: 25px;
}

.sizefit-item p {
    font: normal normal 600 12px/14px urbane;
    color: #2b2e34;
    margin: 0;
}

.sizefit-item span {
    font: normal normal 300 12px/14px urbane;
    color: #2b2e34;
}

.sizefit-bg {
    flex: 1;
    height: 340px;
    margin-left: 50px;
    background-image: url("https://cdn.shopify.com/s/files/1/0633/2068/6808/files/Group_20267.svg");
    background-position: center;
    background-size: auto 100%;
}

.sizefitx-bg {
    background-image: url("https://cdn.shopify.com/s/files/1/0633/2068/6808/files/Group_20662.svg");
}

.dialog-open {
    animation-name: anim-open;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
}

.dialog-close {
    animation-name: anim-close;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
}

.dialog-close-out {
    animation-name: anim-close-out;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
}

/* modal2 */
.tec-spac-t {
    font: normal normal 600 20px/24px urbane;
    border-bottom: 2px solid #eee;
    padding-bottom: 4px;
}

.tec-spac-b {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
}

.tec-spac-b .tec-spac-item {
    display: flex;
    flex-direction: column;
    width: 30%;
    align-items: baseline;
    margin-bottom: 24px;
}

.tec-spac-item2 {
    justify-content: space-between;
}

.tec-spac-item2 p {
    font: normal normal 300 12px/17px urbane;
    margin: 0;
    margin-top: 12px;
    color: #161c1f;
    width: 30%;
}

.tec-spac-item2 img {
    width: 66%;
}

.tec-spac-b .tec-spac-item h4 {
    font: normal normal 600 16px/25px urbane;
    margin: 0;
    color: #4d4d4d;
}

.tec-spac-b .tec-spac-item p {
    font: normal normal 300 12px/17px urbane;
    margin: 0;
    margin-top: 12px;
    color: #161c1f;
}

@media screen and (max-width: 500px) {
    .order-modal-layer .order-layer-box {
        width: 90vw;
        min-width: auto;
    }

    #chord-dom,
    #chordx-dom {
        flex-direction: column-reverse;
    }

    .order-modal-layer .sizefit-switch {
        margin: 20px auto;
    }

    .sizefit-box {
        width: 100%;
    }

    .order-modal-layer .sizefit-switch {
        width: 80%;
    }

    .sizefit-bg {
        flex: inherit;
        height: 200px;
        width: 100%;
        margin-left: 0;
        margin-bottom: 20px;
    }

    .tec-spac-b {
        flex-direction: column;
    }

    .tec-spac-b .tec-spac-item {
        width: 100%;
    }

    .tec-spac-item2 {
        flex-direction: column;
    }

    .tec-spac-item2 p {
        width: 100%;
    }

    .tec-spac-item2 img {
        width: 100%;
        margin-top: 30px;
    }
}

@keyframes anim-open {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(1.1, 1.1, 1);
        transform: scale3d(1.1, 1.1, 1);
    }

    100% {
        opacity: 1;
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
    }
}

@keyframes anim-close-out {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}
</style>


<style>
.order-modal-layer-three .tec-spac-b .tec-spac-item {
    width: 50%;
    padding: 15px 175px 15px 0;
    box-sizing: border-box;
}


.order-modal-layer-three .opacity {
    opacity: 0.7;
    margin-top: 15px;
}

.order-modal-layer-three .opacity p {
    color: #000;
}

.order-modal-layer-three .tec-spac-item2 {
    align-items: flex-start;
}

.order-modal-layer-three .tec-spac-item2>div {
    display: flex;
    flex-direction: column;
    padding: 0 30px 60px 0;
}

.order-modal-layer-three .tec-spac-item2>img {
    width: 100%;
    margin-top: 15px;
}

.order-modal-layer-three .tec-spac-item2>div p {
    width: auto;
}

.order-modal-layer-three .tec-spac-item2>div p:last-child {
    margin-top: 30px;
}

.order-modal-layer-three .opacity p:first-child {
    font-weight: 600;
}

.order-modal-layer-three .tec-spac-b .tec-spac-item h4,
.order-modal-layer-three .tec-spac-t {
    color: #000;
}


@media screen and (max-width: 500px) {
    .order-modal-layer-three .tec-spac-item2 {
        position: relative;
        padding-bottom: 100px;
    }

    .order-modal-layer-three .tec-spac-item2 a {
        position: absolute;
        bottom: 40px;
    }

    .order-modal-layer-three .tec-spac-b .tec-spac-item {
        width: auto;
        padding-right: 0;
    }

    .order-modal-layer-three .tec-spac-item2>div {
        padding-right: 0;
        padding-bottom: 0;
    }
}
</style>

<style>
.faq-navigation {
    display: flex;
    font: normal normal 600 24px / 34px Proxima Nova;
    letter-spacing: 0;
    color: #707070;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    display: none;
}

.faq-navigation .swiper-pagination {
    position: static;
    width: auto;
}

.faq-navigation .prev_btn,
.faq-navigation .next_btn {
    font-family: fontAwesome;
    display: inline-block;
    height: 51px;
    width: 51px;
    text-align: center;
    line-height: 51px;
    border-radius: 50%;
    cursor: pointer;
    font-weight: 650;
    font-size: 30px;
    color: #707070;
    box-shadow: unset;
}

.faq-navigation .prev_btn:before {
    content: '\f104';
}

.faq-navigation .next_btn:before {
    content: '\f105';
}

#faq-list .faq-title {
    width: 100%;
    height: auto;
    display: block;
    border-style: solid;
    border-width: 0 0 1px;
    border-color: #ebebeb;
    text-align: left;
    font: normal normal 600 16px/28px Urbane;
    letter-spacing: 0;
    padding: 19px 0px 12px 100px;
    color: #000;
    background: #fff;
    position: relative;
}

#faq-list .faq-title i {
    position: absolute;
    /* right: 20px; */
    left: 30px;
    display: inline-block;
    font-size: 17px;
    line-height: 1;
    font-family: FontAwesome !important;
    font-style: normal;
    text-rendering: auto;
    transition: transform 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

#faq-list .faq-content {
    display: none;
    padding: 12px 100px;
    font: normal normal normal 14px/20px Urbane;
    color: #000;
    opacity: 0.7;
}

#faq-list .faq-content-plus {
    transform: rotate(90deg);
}

#faq-list .faq-title .faq-content-plus:before {
    content: '\f067';
}

#faq-list .faq-title i:before {
    content: '\f068';
}

#faq .title {
    font: normal normal 600 20px/24px Urbane;
    color: #000;
    border-bottom: 1px solid #ebebeb;
    padding-bottom: 20px;
}

#faq .swiper {
    max-height: 420px;
    overflow: auto;
}

#faq .buttons {
    padding-top: 20px;
}

#faq .buttons a + a {
    margin-left: 10px;
}

@media screen and (max-width: 750px) {
    #faq {
        margin: 0 -25px -25px;
    }

    #faq .swiper {
        padding-right: 10px;
    }
    
    #faq .title {
        margin-right: 10px;
    }

    #faq .swiper {
        max-height: 50vh;
        overflow: auto;
    }

    #faq-list .faq-title {
        font-size: 14px;
        line-height: 16px;
        padding: 19px 0px 12px 35px;
    }

    #faq-list .faq-title i {
        left: 10px;
        top: 20px;
    }

    #faq-list .faq-content {
        padding-left: 35px;
        padding-right: 0;
    }
}</style>