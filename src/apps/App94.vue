<template>
    <div class="er-py-20">
        <div class="centeral-content er-flex er-gap-x-20 mb:er-flex-col mb:!er-px-6">
            <div class="er-flex er-flex-col mb:er-order-1">
                <div class="er-flex er-flex-col er-text-left er-gap-y-8 mb:er-hidden">
                    <a href="" class="text-size14 er-font-medium er-pl-4" style="border-left: 3px solid #FD4B17;">Shop
                        by Model</a>
                </div>
                <div class="er-my-12 mb:er-my-8" style="height: 1px;background-color: #e9e9e9;"></div>
                <div class="er-flex er-flex-col er-text-left er-gap-y-8">
                    <a href="" class="text-size14 er-font-medium">Shop All Electric Bikes</a>
                    <a href="" class="text-size14 er-font-medium">Financing</a>
                    <a href="" class="text-size14 er-font-medium">Compare E-Bikes</a>
                </div>
            </div>
            <div class="er-flex-1 er-flex er-flex-col er-gap-y-16">
                <div class="er-grid er-grid-cols-5 er-cursor-pointer er-gap-8 mb:er-grid-cols-2 mb:er-gap-4">
                    <a class="er-bg-background er-rounded-xl er-p-8 er-flex er-flex-col er-items-center er-text-center er-justify-start er-relative mb:er-p-6"
                        v-for="i in 10">
                        <div
                            class="er-absolute er-left-4 er-top-4 text-size12 er-font-bold er-bg-primary/15 er-text-primary er-rounded-xl er-px-3 er-py-1 mb:er-text-base mb:er-py-0.5">
                            NEW</div>
                        <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/2x_06f48a00-f7d6-4db6-b4ea-f0e409dd3d2d.png?v=1762852748"
                            class="hover:er-scale-105 er-transition" alt="">
                        <div class="text-size16 er-font-bold er-mt-4 er-mb-2 mb:er-text-2xl">Carbon Classic</div>
                        <div class="text-size12 er-opacity-70">
                            Full-carbon e-bikes.<br>Timeless carbon style
                        </div>
                    </a>
                </div>
                <div class="er-flex er-items-center er-justify-evenly mb:er-hidden">
                    <div class="er-flex er-items-center er-gap-x-3" v-for="i in 5">
                        <img src="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/19803.svg?v=1762935166"
                            loading="lazy" alt="700 Bike Shops">
                        <span class="text-size12 er-opacity-80">700 Bike Shops</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>