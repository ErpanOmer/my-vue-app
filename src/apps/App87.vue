<style>
.swiperl {
    display: block;
    width: 300px !important;
    max-width: 300px !important;
    min-width: 300px !important;
}

.swiperr .swiper-slide {
    width: 300px !important;
    max-width: 300px !important;
    min-width: 300px !important;
    height: 500px !important;
    box-sizing: border-box;
}


.swiperl .swiper-slide {
    transition: opacity .4s;
    opacity: 0.5;
}

.swiperl .swiper-slide-active {
    opacity: 1;
}

.swiperr .swiper-slide-active a {
    transition: opacity, background-color backdrop-filter .4s;
    border-radius: 15px;
    backdrop-filter: blur(1px);
    background-color: rgba(0, 0, 0, 0.3);
    overflow: hidden;
}

.swiperr .swiper-slide-active a img {
    transition: transform .4s;
    transform: translateY(30px);
}

.swiperr .swiper-slide-active:hover a img {
    transform: translateY(10px);
}

.swiperr .swiper-slide-active:hover a {
    opacity: 1;
    height: 100%;
}

.swiperr .swiper-slide video {
    transition: all .4s;
    opacity: 0.5;
    transform: scale3d(0.9, 0.85, 1);
    border-radius: 15px;
}

.swiperr .swiper-slide-active video {
    transform: scale3d(1, 1, 1);
    opacity: 1;
}

.swiper-button-next,
.swiper-button-prev {
    bottom: 30px;
    top: auto;
    background-color: #eee;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.swiper-button-next:after,
.swiper-button-prev:after {
    font-weight: bold;
}

.swiperr .swiper-button-prev {
    left: 20px;
}

.swiperr .swiper-button-next {
    left: 70px;

}

@media (max-width: 768px) {
    .swiperr .swiper-slide {
        width: 60vw;
        max-width: 60vw;
        height: 100vw;
    }

    .swiperl {
        margin: 20px 0;
        width: 100vw;
        max-width: 100vw;
    }

    .swiperl .swiper-slide {
        width: 100vw;
        max-width: 100vw;
        height: auto;
    }

    .swiperr .swiper-button-next,
    .swiperr .swiper-button-prev {
        top: 42vw;
    }

    .swiperr .swiper-button-next {
        right: 15px;
        left: auto;
    }

    .swiperr .swiper-button-prev {
        left: 15px;
    }
}
</style>

<template>
    <div class="background-image er-aspect-[1920/500] mb:er-aspect-[375/250]">
        <picture>
            <source media="(min-width: 768px)"
                srcset="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/25692_2x_4e6031a5-552f-43b1-9f29-a0d7548de985.jpg?v=1743475878">
            <source media="(max-width: 768px)"
                srcset="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/25695_2x_2dfa92dc-3409-4018-bb17-b9fa4382fd0c.jpg?v=1743515115">
            <img src="" alt="" loading="lazy">
        </picture>
        <div
            class="centeral-content er-flex er-items-center er-justify-center er-text-center er-h-full mb:er-text-left mb:er-justify-start">
            <h1 class="er-text-white text-size60 mb:er-text-5xl mb:er-leading-tight">Find Urtopia <br
                    class="md:er-hidden">Electric Bike Stores</h1>
        </div>
    </div>
    <div class="er-py-48 mb:er-py-24">
        <div class="centeral-content">
            <div class="er-grid er-grid-cols-2 mb:er-grid-cols-1">
                <div class="er-flex er-flex-col">
                    <h2 class="text-size36 mb:er-text-4xl">We are in over 500+ ebike shops</h2>
                    <p class="text-size18 er-mt-10 er-opacity-80 er-max-w-4xl mb:er-text-2xl mb:er-my-8">
                        <span>
                            Take your first step in to experience the stunning appearance and smooth riding. Book a FREE
                            test ride today with our electric bike shop partners! Their extensive expertise and
                            enthusiasm
                            will help you out with any questions in and out.
                        </span>
                    </p>
                </div>
                <div class="er-flex er-justify-evenly mb:er-justify-start mb:er-gap-x-8">
                    <div class="er-flex er-items-center">
                        <svg class="mb:er-max-w-20" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" width="80" height="80" viewBox="0 0 80 80">
                            <defs>
                                <clipPath id="clip-path">
                                    <rect id="矩形_27159" data-name="矩形 27159" width="80" height="80"
                                        transform="translate(1045 748)" fill="#fff" stroke="#707070" stroke-width="1" />
                                </clipPath>
                            </defs>
                            <g id="蒙版组_19656" data-name="蒙版组 19656" transform="translate(-1045 -748)"
                                clip-path="url(#clip-path)">
                                <g id="组_25599" data-name="组 25599" transform="translate(725 -10)">
                                    <path id="ic_sotrenet"
                                        d="M51.673,46.57a15.3,15.3,0,0,1,20.722-4.409l.529.353a15.255,15.255,0,0,1,4.409,4.409,1.367,1.367,0,0,1,.485.882,14.241,14.241,0,0,1-2.16,16.4.794.794,0,0,1-.22.309s-8.818,8.818-9.567,9.744a1.5,1.5,0,0,1-.265.265,1.587,1.587,0,0,1-1.234.441,1.808,1.808,0,0,1-1.235-.573l-9.7-9.876-.529-.353A14.417,14.417,0,0,1,51.673,46.57ZM39.681,37.488A10.493,10.493,0,0,0,47.4,44.1a18.738,18.738,0,0,0,2.469,21.736,2.69,2.69,0,0,0,.309.441L54.1,70.334H11.464a5.158,5.158,0,0,1-4.409-4.409V44.1a9.347,9.347,0,0,0,3.086,0,10.978,10.978,0,0,0,9.788-6.613A10.493,10.493,0,0,0,29.717,44.1,10.89,10.89,0,0,0,39.681,37.488Zm25.4,10.537a5.864,5.864,0,1,0,6.04,5.864,5.732,5.732,0,0,0-1.764-4.144,6.128,6.128,0,0,0-4.409-1.719Zm3.7-38.666a4.012,4.012,0,0,1,3.7,2.557l5.864,15.343a10.317,10.317,0,0,1-4.409,8.818l-.617.353a19.355,19.355,0,0,0-11.728-2.16,9.3,9.3,0,0,1-2.6-6.3v.661A10.449,10.449,0,0,1,54.8,35.68l-.617.4a8.818,8.818,0,0,1-9.788,0A9.92,9.92,0,0,1,39.5,27.259a9.611,9.611,0,0,1-4.85,8.421,10.4,10.4,0,0,1-9.788,0,9.567,9.567,0,0,1-5.335-8.421A9.567,9.567,0,0,1,9.789,37,9.611,9.611,0,0,1,0,27.259L5.865,11.916A3.924,3.924,0,0,1,9.568,9.4H68.6ZM67.457.013a3.263,3.263,0,0,1,3.483,2.91c0,1.764-1.367,2.954-3.483,2.954H11.9c-2.116,0-3.483-1.19-3.483-2.954A3.218,3.218,0,0,1,11.9.013Z"
                                        transform="translate(320 761)" fill="#353535" />
                                    <path id="ic_sotrenet-2" data-name="ic_sotrenet"
                                        d="M51.673,46.57a15.3,15.3,0,0,1,20.722-4.409l.529.353a15.255,15.255,0,0,1,4.409,4.409,1.367,1.367,0,0,1,.485.882,14.241,14.241,0,0,1-2.16,16.4.794.794,0,0,1-.22.309s-8.818,8.818-9.567,9.744a1.5,1.5,0,0,1-.265.265,1.587,1.587,0,0,1-1.234.441,1.808,1.808,0,0,1-1.235-.573l-9.7-9.876-.529-.353A14.417,14.417,0,0,1,51.673,46.57Zm13.4,1.455a5.864,5.864,0,1,0,6.04,5.864,5.732,5.732,0,0,0-1.764-4.144,6.128,6.128,0,0,0-4.409-1.719Z"
                                        transform="translate(320 761)" fill="#fd4b17" />
                                </g>
                            </g>
                        </svg>

                        <div class="er-ml-6">
                            <h3 class="text-size36 mb:er-text-4xl"><b>500+</b></h3>
                            <h4 class="text-size20 mb:er-text-2xl"><b>ebike shops</b></h4>
                        </div>
                    </div>
                    <div class="er-flex er-items-center">
                        <svg class="mb:er-max-w-20" xmlns:xlink="http://www.w3.org/1999/xlink"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" height="80" width="80">
                            <defs>
                                <clipPath id="clip-path1">
                                    <rect stroke-width="1" stroke="#707070" fill="#fff" transform="translate(1321 746)"
                                        height="80" width="80" data-name="矩形 27160" id="矩形_27160" />
                                </clipPath>
                            </defs>
                            <g clip-path="url(#clip-path1)" transform="translate(-1321 -746)" data-name="蒙版组 19657"
                                id="蒙版组_19657">
                                <g transform="translate(823.538 -9.213)" data-name="组 25598" id="组_25598">
                                    <circle fill="#fd4b17" transform="translate(518.424 774.533)" r="13.439" cy="13.439"
                                        cx="13.439" data-name="椭圆 868" id="椭圆_868" />
                                    <path fill="#353535" transform="translate(367.222 681.413)"
                                        d="M170.432,76.8,138.24,83.635v32.192c0-.221-.221,22.711,32.192,35.941,32.413-13.23,32.192-36.161,32.192-36.161V83.635ZM156.1,114.946a12.178,12.178,0,0,1-2.425-14.332l6.174,6.174a3.9,3.9,0,0,0,5.512-5.512L159.187,95.1a12.855,12.855,0,0,1,14.553,2.2,12.473,12.473,0,0,1-17.64,17.64Zm27.783,15.876L173.3,120.238a16.65,16.65,0,0,0,3.087-2.425c.882-1.1,1.764-2.2,2.425-3.087l10.584,10.584Z"
                                        id="warranty" />
                                </g>
                            </g>
                        </svg>
                        <div class="er-ml-6">
                            <h3 class="text-size36 mb:er-text-4xl"><b>2 Year</b></h3>
                            <h4 class="text-size20 mb:er-text-2xl"><b>warranty</b></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="er-text-white er-py-48 mb:er-py-24">
        <div class="centeral-content mb:er-px-6">
            <div class="background-image er-aspect-[1280/500] mb:er-aspect-auto er-rounded-3xl er-overflow-hidden">
                <picture>
                    <source media="(min-width: 768px)"
                        srcset="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/25697_2x_783f8fa0-bdec-4eba-a76f-d46c65d98168.jpg?v=1742980289">
                    <source media="(max-width: 768px)"
                        srcset="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/20230802-150015_2x_459af18d-6e27-49b9-8683-08050dab0c21.jpg?v=1742980680">
                    <img src="" class="mb:!er-object-top mb:!er-object-contain" loading="lazy">
                </picture>
                <div class="er-grid er-grid-cols-2 er-h-full er-gap-x-32 mb:er-grid-cols-1">
                    <div class="er-w-2/3 er-aspect-square"></div>
                    <div class="er-flex er-flex-col er-items-start er-justify-center mb:er-px-8 mb:er-pb-16"
                        style="background-image: linear-gradient(180deg, #00000000 0%, #000000 37%, #000000 100%);">
                        <h2 class="er-m-0 er-text-white text-size36 mb:er-text-4xl">Featured Dealers &<br> Exclusive
                            Services</h2>
                        <p class="text-size18 er-opacity-80 er-max-w-2xl er-mt-12 mb:er-text-2xl mb:er-mt-6">
                            <span>Explore our specially selected e-bike dealers with years of experience in the
                                industry, offering exceptional service and expertise. Enjoy free assembly for your
                                Urtopia e-bike and professional support from trusted partners committed to delivering
                                the best experience.</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="er-bg-background er-pt-48 er-pb-24 mb:er-pt-24 mb:er-pb-8 swiperr-parent">
        <h2 class="text-size36 mb:er-text-4xl mb:er-pl-6">E-Bike store experts recommended</h2>
        <div class="er-flex er-relative er-mt-28 mb:er-flex-col-reverse mb:er-mt-12 centeral-content">
            <!-- <div
                class="swiperl er-bg-white er-basis-1/6 er-rounded-3xl er-mr-12 er-overflow-hidden mb:er-mr-0 mb:er-rounded-none">
                <div class="swiper-wrapper">
                    <div class="swiper-slide er-p-10 er-bg-white mb:er-flex mb:er-items-center">
                        <img loading="lazy" class="mb:er-max-w-28" width="125" height="125"
                            src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/435_2x_9d6699b0-4e2a-418a-bcb3-8539dc2536d1.png?v=1743491869&width=125"
                            alt="">
                        <p class="text-size18 er-opacity-80 md:er-mt-8 mb:er-text-2xl mb:er-ml-4">
                            <span>
                                ELV Motors, Inc., Northern California’s largest electric mobility dealer, offers 150+
                                models
                                from 40+ manufacturers since 2008.
                            </span>
                        </p>
                    </div>
                    <div class="swiper-slide er-p-10 er-bg-white mb:er-flex mb:er-items-center">
                        <img loading="lazy" class="mb:er-max-w-28" width="125" height="125"
                            src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/462_2x_de15df28-b624-4870-9de1-ce614ec2b922.jpg?v=1743501845&width=125"
                            alt="">
                        <p class="text-size18 er-opacity-80 md:er-mt-8 mb:er-text-2xl mb:er-ml-4">
                            <span>
                                Red Tail Bikes in Morro Bay, CA, offers quality bikes, rentals, and expert, personalized
                                service for locals and tourists exploring California’s Central Coast.
                            </span>
                        </p>
                    </div>
                    <div class="swiper-slide er-p-10 er-bg-white mb:er-flex mb:er-items-center">
                        <img loading="lazy" class="mb:er-max-w-28" width="125" height="125"
                            src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/436_2x_43978acd-7036-468a-9cb8-fb9c2a446d88.jpg?v=1743501831&width=125"
                            alt="">
                        <p class="text-size18 er-opacity-80 md:er-mt-8 mb:er-text-2xl mb:er-ml-4">
                            <span>
                                Bike Doctor, serving Maryland for over 30 years, offers top brands, expert service, and
                                community-focused support across seven locations.
                            </span>
                        </p>
                    </div>
                    <div class="swiper-slide er-p-10 er-bg-white mb:er-flex mb:er-items-center">
                        <img loading="lazy" class="mb:er-max-w-28" width="125" height="125"
                            src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/463_2x_689bfb67-f193-4121-8c2f-c8e94b20c7f8.jpg?v=1743501816&width=125"
                            alt="">
                        <p class="text-size18 er-opacity-80 md:er-mt-8 mb:er-text-2xl mb:er-ml-4">
                            <span>
                                Electric Bikes of Santa Barbara, founded by brothers Bob and Howard Kaplan in 2013, has
                                grown to four locations, offering top-quality, German-made eBikes with exceptional
                                service.
                            </span>
                        </p>
                    </div>
                    <div class="swiper-slide er-p-10 er-bg-white mb:er-flex mb:er-items-center">
                        <img loading="lazy" class="mb:er-max-w-28" width="125" height="125"
                            src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/464_2x_13a68206-6449-4b79-86b0-66937ae333f3.jpg?v=1743501803&width=125"
                            alt="">
                        <p class="text-size18 er-opacity-80 md:er-mt-8 mb:er-text-2xl mb:er-ml-4">
                            <span>Adventure eBike Company in Thousand Oaks, CA, offers expert service, quality bikes,
                                and a welcoming community for all your cycling adventures.</span>
                        </p>
                    </div>
                    <div class="swiper-slide er-p-10 er-bg-white mb:er-flex mb:er-items-center">
                        <img loading="lazy" class="mb:er-max-w-28" width="125" height="125"
                            src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/465_2x_ac7b89b8-0ebc-4fce-bd08-7ed5e7b5cfb7.jpg?v=1743501790&width=125"
                            alt="">
                        <p class="text-size18 er-opacity-80 md:er-mt-8 mb:er-text-2xl mb:er-ml-4">
                            <span>Bike Attack® is a vibrant hub for cycling enthusiasts, offering a welcoming space to
                                connect, learn, and share a passion for all types of bikes.</span>
                        </p>
                    </div>
                    <div class="swiper-slide er-p-10 er-bg-white mb:er-flex mb:er-items-center">
                        <img loading="lazy" class="mb:er-max-w-28" width="125" height="125"
                            src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/466_2x_11c93710-43ac-452c-ad0d-5fd065f5aa60.jpg?v=1743501777&width=125"
                            alt="">
                        <p class="text-size18 er-opacity-80 md:er-mt-8 mb:er-text-2xl mb:er-ml-4">
                            <span>562 ebikes, based in Bellflower, CA, is a team of passionate cyclists offering expert
                                local support for e-bike enthusiasts in Southern Los Angeles County.</span>
                        </p>
                    </div>
                    <div class="swiper-slide er-p-10 er-bg-white mb:er-flex mb:er-items-center">
                        <img loading="lazy" class="mb:er-max-w-28" width="125" height="125"
                            src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/467_2x_09438e6b-6fc0-47d7-82fa-f0c195980e5f.jpg?v=1743501523&width=125"
                            alt="">
                        <p class="text-size18 er-opacity-80 md:er-mt-8 mb:er-text-2xl mb:er-ml-4">
                            <span>Groove E-Bikes, a family-owned Newport Beach shop founded in 2013, offers top-quality
                                eBikes, expert customization, and a wide range of accessories for the perfect
                                ride.</span>
                        </p>
                    </div>
                </div>
            </div> -->
            <div class="swiperr er-flex-1 er-overflow-hidden"
                style="--swiper-navigation-size: 22px;--swiper-theme-color: #000;">
                <div class="swiper-wrapper">
                    <div class="swiper-slide background-image">
                        <video playsinline loop muted autoplay src="https://cdn.shopify.com/videos/c/o/v/cece92c64dc64c11b7d40676d8420ce3.mp4"></video>
                        <a href="https://youtube.com/shorts/5c1t5wWZTCw" target="_blank" class="er-absolute er-inset-0 er-items-center er-justify-center er-flex er-opacity-0 er-h-0">
                            <img width="80" height="56" loading="lazy" src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/yt_icon_rgb.png?v=1743577722&width=80" alt="">
                        </a>
                    </div>
                    <div class="swiper-slide background-image">
                        <video playsinline loop muted src="https://cdn.shopify.com/videos/c/o/v/c23aecdada634f44a3a72c272752476c.mp4"></video>
                        <a href="https://youtube.com/shorts/FO_zIOidRhk" target="_blank" class="er-absolute er-inset-0 er-items-center er-justify-center er-flex er-opacity-0 er-h-0">
                            <img width="80" height="56"  loading="lazy" src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/yt_icon_rgb.png?v=1743577722&width=80" alt="">
                        </a>
                    </div>
                    <div class="swiper-slide background-image">
                        <video playsinline loop muted src="https://cdn.shopify.com/videos/c/o/v/19dab9606d2a422182ec6f66a30faada.mp4"></video>
                        <a href="https://www.youtube.com/shorts/dibzKIO2mwg" target="_blank" class="er-absolute er-inset-0 er-items-center er-justify-center er-flex er-opacity-0 er-h-0">
                            <img width="80" height="56"  loading="lazy" src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/yt_icon_rgb.png?v=1743577722&width=80" alt="">
                        </a>
                    </div>
                    <div class="swiper-slide background-image">
                        <video playsinline loop muted src="https://cdn.shopify.com/videos/c/o/v/b672d5215c734a21bb7a6035cc9ce176.mp4"></video>
                        <a href="https://youtube.com/shorts/Hs-dye8VjKw" target="_blank" class="er-absolute er-inset-0 er-items-center er-justify-center er-flex er-opacity-0 er-h-0">
                            <img width="80" height="56"  loading="lazy" src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/yt_icon_rgb.png?v=1743577722&width=80" alt="">
                        </a>
                    </div>
                    <div class="swiper-slide background-image">
                        <video playsinline loop muted src="https://cdn.shopify.com/videos/c/o/v/b81489480cd94053acf04cb46544cf4e.mp4"></video>
                        <a href="https://youtube.com/shorts/1ailCBjTXg8" target="_blank" class="er-absolute er-inset-0 er-items-center er-justify-center er-flex er-opacity-0 er-h-0">
                            <img width="80" height="56"  loading="lazy" src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/yt_icon_rgb.png?v=1743577722&width=80" alt="">
                        </a>
                    </div>
                    <div class="swiper-slide background-image">
                        <video playsinline loop muted src="https://cdn.shopify.com/videos/c/o/v/540abb51cba44d168dd1b38c2714a1c8.mp4"></video>
                        <a href="https://youtube.com/shorts/s_zWRgjr5Us" target="_blank" class="er-absolute er-inset-0 er-items-center er-justify-center er-flex er-opacity-0 er-h-0">
                            <img width="80" height="56"  loading="lazy" src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/yt_icon_rgb.png?v=1743577722&width=80" alt="">
                        </a>
                    </div>
                    <div class="swiper-slide background-image">
                        <video playsinline loop muted src="https://cdn.shopify.com/videos/c/o/v/d0dcfc153a7c4bdaacb05a195adab397.mp4"></video>
                        <a href="https://youtube.com/shorts/j_btDAtwQwo" target="_blank" class="er-absolute er-inset-0 er-items-center er-justify-center er-flex er-opacity-0 er-h-0">
                            <img width="80" height="56"  loading="lazy" src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/yt_icon_rgb.png?v=1743577722&width=80" alt="">
                        </a>
                    </div>
                    <div class="swiper-slide background-image">
                        <video playsinline loop muted src="https://cdn.shopify.com/videos/c/o/v/f714ebeb79444c03bdf1e9a47041e702.mp4"></video>
                        <a href="https://youtu.be/yufNEwBr3aI" target="_blank" class="er-absolute er-inset-0 er-items-center er-justify-center er-flex er-opacity-0 er-h-0">
                            <img width="80" height="56"  loading="lazy" src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/yt_icon_rgb.png?v=1743577722&width=80" alt="">
                        </a>
                    </div>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </div>
    </div>
    <div class="er-bg-background er-py-48 mb:er-py-24">
        <div class="centeral-content">
            <h2 class="text-size36 er-text-center mb:er-text-4xl mb:er-text-left">Store Categories & Services</h2>
            <div
                class="er-grid er-grid-cols-3 er-gap-x-16 er-mt-28 er-gap-y-40 mb:er-grid-cols-1 mb:er-gap-y-12 mb:er-mt-12">
                <div class="er-flex er-flex-col er-items-center er-text-center mb:er-items-start mb:er-text-left">
                    <img class="mb:er-max-w-20" loading="lazy"
                        src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/19625.svg?v=1743478846" alt="">
                    <h3 class="text-size24 er-my-6 mb:er-text-3xl mb:er-my-4">Premium Dealer</h3>
                    <p class="text-size18 er-opacity-80 mb:er-text-2xl">
                        <span>
                            Our top-tier dealers with the most experience, and a strong commitment to Urtopia. They
                            offer extensive inventory and premium service.
                        </span>
                    </p>
                </div>
                <div class="er-flex er-flex-col er-items-center er-text-center mb:er-items-start mb:er-text-left">
                    <img class="mb:er-max-w-20" loading="lazy"
                        src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/19626.svg?v=1743478846" alt="">
                    <h3 class="text-size24 er-my-6 mb:er-text-3xl mb:er-my-4">Standard Dealer</h3>
                    <p class="text-size18 er-opacity-80 mb:er-text-2xl">
                        <span>
                            Your local connection to Urtopia. Visit for product details, ordering options, and friendly
                            support. Please call ahead to confirm availability of your preferred model.
                        </span>
                    </p>
                </div>
                <div class="er-flex er-flex-col er-items-center er-text-center mb:er-items-start mb:er-text-left">
                    <img class="mb:er-max-w-20" loading="lazy"
                        src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/19627.svg?v=1743478846" alt="">
                    <h3 class="text-size24 er-my-6 mb:er-text-3xl mb:er-my-4">Test Ride</h3>
                    <p class="text-size18 er-opacity-80 mb:er-text-2xl">
                        <span>
                            Offers in-store test rides so you can experience Urtopia e-bikes firsthand before making a
                            decision. Please call ahead to confirm availability of your preferred model.
                        </span>
                    </p>
                </div>
                <div
                    class="er-flex er-flex-col er-items-center er-text-center mb:er-items-start mb:er-text-left er-translate-x-1/2 mb:er-translate-x-0">
                    <img class="mb:er-max-w-20" loading="lazy"
                        src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/19629_1.svg?v=1743478846" alt="">
                    <h3 class="text-size24 er-my-6 mb:er-text-3xl mb:er-my-4">Free Assembly</h3>
                    <p class="text-size18 er-opacity-80 mb:er-text-2xl">
                        <span>
                            Dealers offering free professional assembly for Urtopia bikes purchased in-store, ensuring a
                            hassle-free start to your ride.
                        </span>
                    </p>
                </div>
                <div
                    class="er-flex er-flex-col er-items-center er-text-center mb:er-items-start mb:er-text-left er-translate-x-1/2 mb:er-translate-x-0">
                    <img class="mb:er-max-w-20" loading="lazy"
                        src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/19628.svg?v=1743478846" alt="">
                    <h3 class="text-size24 er-my-6 mb:er-text-3xl mb:er-my-4">Service</h3>
                    <p class="text-size18 er-opacity-80 mb:er-text-2xl">
                        <span>
                            Certified service partners providing expert maintenance and repair to keep your Urtopia
                            e-bike in top condition.
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="background-image er-text-white er-aspect-[1920/750] mb:er-aspect-auto">
        <picture>
            <source media="(min-width: 768px)"
                srcset="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/25611_2x_e0bb2309-3ff3-4024-8125-a182ba53ecdb.jpg?v=1743487211">
            <source media="(max-width: 768px)"
                srcset="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/20250402-144619.jpg?v=1743576398">
            <img src="" loading="lazy">
        </picture>
        <div class="centeral-content er-grid er-grid-cols-2 er-items-center er-h-full mb:er-grid-cols-1 mb:er-px-0">
            <div class="mb:er-w-10/12 er-aspect-square"></div>
            <div class="er-flex er-flex-col er-items-start er-justify-center mb:er-px-8 mb:er-pb-16 md:!er-bg-none">
                <h2 class="text-size36 mb:er-text-4xl">Can’t Find a Nearby E-Bike Store? Let Us Know!</h2>
                <p class="text-size18 er-opacity-80 er-max-w-4xl er-mt-12 mb:er-text-2xl">
                    <span>
                        We’re always looking to expand our network and make our eBikes more accessible. If you don’t see
                        a store near you, send us an email with your recommended shop. We’ll reach out and explore a
                        potential partnership to bring our bikes and services closer to you. <br><br><a
                            href="mailto:support@newurtopia.com"
                            class="er-button er-button-white er-button-text">support@newurtopia.com</a><br><br> We
                        appreciate your suggestions and look forward to serving you soon!
                    </span>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    new Swiper('.swiperr', {
        grabCursor: true,
        speed: 400,
        slidesPerView: 'auto',
        centeredSlides: document.body.clientWidth <= 768,
        navigation: {
            nextEl: ".swiperr .swiper-button-next",
            prevEl: ".swiperr .swiper-button-prev",
        },
        on: {
            slideChange: function () {
                console.log(this)

                const videos = this.wrapperEl.querySelectorAll('video');
                videos.forEach(video => {
                    video.pause();   // 暂停所有视频
                    // video.currentTime = 0; // 从头开始
                }); // 暂停所有视频

                const current = this.slides[this.activeIndex]
                const video = current.querySelector('video')

                if (video) {
                    setTimeout(() => {
                        video.play()
                    })
                }
            },
        },
        thumbs: {
            // swiper: {
            //     el: '.swiperl',
            //     speed: 400,
            //     preloadImages: false,
            //     multipleActiveThumbs: false,
            //     loop: true,
            //     keyboard: {
            //         enabled: false, // 禁用键盘控制
            //     },
            //     mousewheel: {
            //         enabled: false, // 禁用鼠标滚轮切换
            //     },
            //     allowTouchMove: false, // 禁止手动滑动
            // }
        },

        // centeredSlides: true,
        loop: true
    });
})
</script>