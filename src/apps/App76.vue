<style>

#announcement-bar {
    position: relative;
    width: 100%;
    height: 38px;
    overflow: hidden;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
}

/* 滚动容器样式 */
#announcement-bar>div {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(100%);
    /* 初始位置为屏幕下方 */
    animation: slideAnimation 12s infinite;
}

#announcement-bar>div:nth-child(1) {
    animation-delay: 0s;
}

#announcement-bar>div:nth-child(2) {
    animation-delay: 4s;
}

#announcement-bar>div:nth-child(3) {
    animation-delay: 8s;
}

/* 动画定义 */
@keyframes slideAnimation {
    0% {
        transform: translateY(100%);
    }

    10% {
        transform: translateY(0);
    }

    33.33% {
        transform: translateY(0);
    }

    43.33% {
        transform: translateY(-100%);
    }

    100% {
        transform: translateY(-100%);
    }
}
</style>
<template>
    <div id="announcement-bar" class="er-font-base">
        <div>
            <span class="er-text-primary er-mr-1">500$ off</span> on Carbon 1 Pro.
            <a class="er-button er-button-text er-underline er-ml-1" href="/products/urtopia-carbon-1-pro-ebike">Get yours Now</a>
        </div>
        <div>
            <img width="45" height="26" decoding="async" alt="klarna" loading="lazy" fetchpriority="low"
            class="er-mr-2"
                src="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/Image_154_2x_a6f60481-bf07-4fd4-93c7-8b9964570bbd.png?v=1685605445" />
            Financing with 24 months, 0% APR.
            <a class="er-button er-button-text er-underline er-ml-1" href="/products/urtopia-carbon-1-pro-ebike">Get yours Now</a>
        </div>
        <div>
            Try Urtopia E-Bikes for Free
            <br class="pcHide">
            <a class="er-button er-button-text er-underline er-ml-1" href="/pages/test-ride">Book a test ride now</a>
        </div>
    </div>
</template>