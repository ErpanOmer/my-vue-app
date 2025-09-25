<style scoped>
#app a {
    white-space: normal;
    text-align: left;
    border-radius: 0;
    font-size: 13px;
    font-weight: 500;
    color: #fd4b17;
}
</style>

<style>
#app .slick-track {
    display: flex;
    /* transform: translateX(0) !important; */
}


#app .slick-slide {
    padding: 0 16px;
    min-height: 235px;
}

#app .slick-slide>div {
    min-height: inherit;
    display: flex
}

#app .slick-slide>div>div {
    display: flex !important;
}

#app .slick-disabled {
    opacity: 0.4;
}

#app .copy {
    svg:last-child {
        vertical-align: middle;
        margin-left: 3px;
        opacity: 0;
        transition: all .3s;
    }

    &:hover {
       svg:last-child {
         opacity: 7;
       }
    }
}
</style>

<template>
    <div
        :class="['er-relative er-flex er-flex-col er-space-y-2 er-cursor-pointer er-pr-4 er-px-8 er-py-4 hover:md:er-opacity-85 mb:er-px-6 mb:er-rounded-2xl', activeStore === item.id ? 'er-bg-[#eee]' : 'er-bg-white']">
        <div class="er-flex er-items-start er-text-dark er-space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#444">
                <path
                    d="M160-720v-80h640v80H160Zm0 560v-240h-40v-80l40-200h640l40 200v80h-40v240h-80v-240H560v240H160Zm80-80h240v-160H240v160Z" />
            </svg>
            <span @click="() => constans.IS_MOBILE && onclick(item)"
                class="text-size16 er-font-bold mb:er-text-2xl er-leading-snug mb:er-leading-normal">{{ item.name }}<svg
                    class="er-ml-1 er-align-sub md:er-hidden" xmlns="http://www.w3.org/2000/svg" height="18px"
                    viewBox="0 -960 960 960" width="18px" fill="#333">
                    <path
                        d="M436.41-276.41h87.18V-520h-87.18v243.59ZM480-595.22q19.03 0 31.91-12.87 12.87-12.88 12.87-31.91t-12.87-31.91q-12.88-12.87-31.91-12.87t-31.91 12.87q-12.87 12.88-12.87 31.91t12.87 31.91q12.88 12.87 31.91 12.87Zm0 523.35q-84.91 0-159.34-32.12-74.44-32.12-129.5-87.17-55.05-55.06-87.17-129.5Q71.87-395.09 71.87-480t32.12-159.34q32.12-74.44 87.17-129.5 55.06-55.05 129.5-87.17 74.43-32.12 159.34-32.12t159.34 32.12q74.44 32.12 129.5 87.17 55.05 55.06 87.17 129.5 32.12 74.43 32.12 159.34t-32.12 159.34q-32.12 74.44-87.17 129.5-55.06 55.05-129.5 87.17Q564.91-71.87 480-71.87Zm0-91q133.04 0 225.09-92.04 92.04-92.05 92.04-225.09 0-133.04-92.04-225.09-92.05-92.04-225.09-92.04-133.04 0-225.09 92.04-92.04 92.05-92.04 225.09 0 133.04 92.04 225.09 92.05 92.04 225.09 92.04ZM480-480Z" />
                </svg></span>
            <span class="er-flex-1"></span>
            <span
                class="text-size14 er-text-primary er-font-bold er-whitespace-nowrap mb:er-text-xl mb:er-leading-loose er-leading-10">{{
                    item.distance }}
                {{ constans.IS_USA ? 'Miles' : 'KM' }}</span>
        </div>
        <div class="er-flex er-items-start">
            <a class="er-underline er-leading-snug copy"
            title="address"
            :href="`https://www.google.com/maps?q=${item.location.map(i => i.toFixed(4)).reverse().toString()}`"
            target="_blank" @click.stop>{{ item.address }}<svg v-if="!constans.IS_MOBILE" @click.stop.prevent="copyToClipboard(item.address)" xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="currentColor"><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"/></svg></a>
            <span class="er-flex-1"></span>
            <a title="email" v-if="item.email" :href="`mailto:${item.email}`"
                class="er-flex er-items-center text-size14 er-text-primary er-ml-2" @click.stop>
                <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px"
                    fill="#fd4b17">
                    <path
                        d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280 320-200v-80L480-520 160-720v80l320 200Z" />
                </svg>
                <!-- <span>:</span> -->
                <!-- <span>{{ item.email }}</span> -->
            </a>
            <a title="website" target="_blank" v-if="item.website" :href="item.website" class="er-flex er-items-center text-size14 er-text-primary er-ml-2" @click.stop>
                <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#fd4b17"><path d="M838-65 720-183v89h-80v-226h226v80h-90l118 118-56 57ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 20-2 40t-6 40h-82q5-20 7.5-40t2.5-40q0-20-2.5-40t-7.5-40H654q3 20 4.5 40t1.5 40q0 20-1.5 40t-4.5 40h-80q3-20 4.5-40t1.5-40q0-20-1.5-40t-4.5-40H386q-3 20-4.5 40t-1.5 40q0 20 1.5 40t4.5 40h134v80H404q12 43 31 82.5t45 75.5q20 0 40-2.5t40-4.5v82q-20 2-40 4.5T480-80ZM170-400h136q-3-20-4.5-40t-1.5-40q0-20 1.5-40t4.5-40H170q-5 20-7.5 40t-2.5 40q0 20 2.5 40t7.5 40Zm34-240h118q9-37 22.5-72.5T376-782q-55 18-99 54.5T204-640Zm172 462q-18-34-31.5-69.5T322-320H204q29 51 73 87.5t99 54.5Zm28-462h152q-12-43-31-82.5T480-798q-26 36-45 75.5T404-640Zm234 0h118q-29-51-73-87.5T584-782q18 34 31.5 69.5T638-640Z"/></svg>
            </a>
        </div>
        <div class="er-flex er-items-start er-gap-x-4 er-flex-wrap">
            <a :href="`tel:${item.phone}`" title="phone" v-if="item.phone"
                class="er-flex er-items-center text-size14 er-text-primary copy hover:er-underline" @click.stop>
                <svg xmlns="http://www.w3.org/2000/svg" class="er-mr-1" height="20px" viewBox="0 -960 960 960" width="20px"
                    fill="#fd4b17">
                    <path
                        d="M162-120q-18 0-30-12t-12-30v-162q0-13 9-23.5t23-14.5l138-28q14-2 28.5 2.5T342-374l94 94q38-22 72-48.5t65-57.5q33-32 60.5-66.5T681-524l-97-98q-8-8-11-19t-1-27l26-140q2-13 13-22.5t25-9.5h162q18 0 30 12t12 30q0 125-54.5 247T631-329Q531-229 409-174.5T162-120Z" />
                </svg>
                <!-- <span>:</span> -->
                <span>{{ item.phone }}</span>
                <svg v-if="!constans.IS_MOBILE" @click.stop.prevent="copyToClipboard(item.phone)" xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="currentColor"><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"/></svg>
            </a>
        </div>
        <div v-if="item.categories.length" class="er-flex er-flex-col">
            <span class="text-size14 er-font-bold er-opacity-75">{{ $t('storeList.DealerFeatures') }}:</span>
            <ul
                class="er-opacity-80 text-size12 er-py-1 er-space-y-0.5 marker:er-text-transparent er-pl-2 mb:er-flex  mb:er-gap-x-4 mb:er-items-center mb:er-flex-wrap">
                
                <li class="er-flex er-items-center" v-for="value in item.categories" :key="value">
                    <a-badge status="error" />
                    <span class="er-ml-[-2px]" :class="value === 1 && 'er-font-bold er-text-primary'">{{ $t(`search.${constans.SERVICES[value].name.replace(/\s+/g, '')}`, constans.SERVICES[value].name || '') }}</span>
                    <svg v-if="value === 1" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#fd4b17"><path d="M480-120 80-600l120-240h560l120 240-400 480Zm-95-520h190l-60-120h-70l-60 120Zm55 347v-267H218l222 267Zm80 0 222-267H520v267Zm144-347h106l-60-120H604l60 120Zm-474 0h106l60-120H250l-60 120Z"/></svg>
                </li>
            </ul>
        </div>
        <div v-if="item.availableSizes.length" class="er-flex er-flex-col">
            <span class="text-size14 er-font-bold er-opacity-75">{{ $t('storeList.AvailableTestbikes') }}:</span>
            <ul
                class="er-opacity-80 text-size12 er-py-1 er-space-y-0.5 marker:er-text-transparent er-pl-2 mb:er-flex mb:er-gap-x-4 mb:er-items-center mb:er-flex-wrap">
                <li v-for="value in item.availableSizes" :key="value">
                    <a-badge status="error" /><span class="er-ml-[-2px]">{{ constans.E_BIKES[value]?.name || value }}</span>
                </li>
            </ul>
        </div>
        <span class="er-flex-1"></span>
        <a-button v-if="!item.noBook" :size="constans.IS_MOBILE ? 'large' : 'medium'" type="primary" danger
            @click.stop="Booknow(item, $event)" class="!er-absolute er-right-4 er-bottom-5 mb:!er-static mb:er-w-full">
            <div class="er-flex er-items-center er-text-center er-justify-center">
                <span>{{ $t('storeList.Booknow') }}</span><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960"
                    width="20px" fill="#fff">
                    <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
                </svg>
            </div>
        </a-button>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from '@/store'
import constans from '@/constans.js'
import booknow from '@/modal.js'
import event from '@/event.js'
import { Badge } from 'ant-design-vue';
import { getDistance, toBounds, jumpTo } from '@/tools.js'

defineProps({
    item: Object,
    onclick: Function
})

const activeStore = defineModel('activeStore')
const store = useStore()

function Booknow(store, e) {
    event.emit('hidePopover')
    booknow(store, e)
}

async function copyToClipboard(text) {
    await navigator.clipboard.writeText(text);
    // alert('复制成功');
}
</script>