<style scoped lang="scss">
#app {
    a {
        white-space: normal;
        text-align: left;
        border-radius: 0;
        font-size: 13px;
        font-weight: 500;
    }
}

.list-move,
/* 对移动中的元素应用的过渡 */
.list-enter-active,
.list-leave-active {
    transition: all 0.3s ease;
}


.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.list-leave-active {
    position: absolute;
}
</style>

<template>
    <div class="er-flex-1 er-pb-8 er-flex er-flex-col er-overflow-hidden" style="margin: 0 -20px;">
        <div class="er-flex er-items-center text-size14 er-px-10 er-py-4 er-pb-4 er-shadow-2xl">
            Find nearby stores: <span class="er-text-primary er-pl-2">{{formState.storeList.filter(s =>
                s.show).length}}</span>
        </div>
        <div class="er-flex er-flex-col er-space-y-4 er-overflow-auto" ref="listContainer">
            <template v-for="(item, index) in sortedList" :key="item.id">
                <div :class="['er-relative er-flex er-flex-col er-space-y-2 er-cursor-pointer er-pr-4 er-px-8 er-py-4 hover:er-opacity-85', activeStore === item.id ? 'er-bg-[#eee]' : 'er-bg-white']"
                    v-if="item.show" @click.stop="onClick(item, $event)">
                    <div class="er-flex er-items-start er-text-dark er-space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                            fill="#444">
                            <path
                                d="M160-720v-80h640v80H160Zm0 560v-240h-40v-80l40-200h640l40 200v80h-40v240h-80v-240H560v240H160Zm80-80h240v-160H240v160Z" />
                        </svg>
                        <span class="text-size16 er-font-bold">{{ item.name }}</span>
                        <span class="er-flex-1"></span>
                        <span class="text-size14 er-text-primary er-font-bold er-whitespace-nowrap">{{ item.distance }}
                            Miles</span>
                    </div>
                    <div class="er-flex er-items-start er-space-x-4">
                        <a class="er-button er-button-text er-whitespace-normal"
                            :href="`https://www.google.com/maps?q=${item.location.map(i => i.toFixed(4)).reverse().toString()}`"
                            target="_blank" rel="noopener noreferrer" @click.stop>{{ item.address }}</a>
                        <span class="er-flex-1"></span>
                        <a v-if="item.phone" :href="`tel:${item.phone}`" @click.stop>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="#fd4b17">
                                <path
                                    d="M162-120q-18 0-30-12t-12-30v-162q0-13 9-23.5t23-14.5l138-28q14-2 28.5 2.5T342-374l94 94q38-22 72-48.5t65-57.5q33-32 60.5-66.5T681-524l-97-98q-8-8-11-19t-1-27l26-140q2-13 13-22.5t25-9.5h162q18 0 30 12t12 30q0 125-54.5 247T631-329Q531-229 409-174.5T162-120Z" />
                            </svg>
                        </a>
                        <a v-if="item.email" :href="`mailto:${item.email}`" @click.stop>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="#fd4b17">
                                <path
                                    d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280 320-200v-80L480-520 160-720v80l320 200Z" />
                            </svg>
                        </a>
                    </div>
                    <div v-if="item.categories.length" class="er-flex er-flex-col">
                        <span class="text-size14 er-font-bold er-opacity-75">Services:</span>
                        <ul class="er-opacity-80 text-size12 er-py-1 er-space-y-0.5 marker:er-text-transparent er-pl-2">
                            <li v-for="value in item.categories" :key="value">
                                <a-badge status="error" />{{ constans.SERVICES[value].name || '' }}
                            </li>
                        </ul>
                    </div>
                    <div v-if="item.availableSizes.length" class="er-flex er-flex-col">
                        <span class="text-size14 er-font-bold er-opacity-75">Available Test bikes:</span>
                        <ul class="er-opacity-80 text-size12 er-py-1 er-space-y-0.5 marker:er-text-transparent er-pl-2">
                            <li v-for="value in item.availableSizes" :key="value">
                                <a-badge status="error" />{{ constans.E_BIKES[value].name || '' }}
                            </li>
                        </ul>
                    </div>
                    <a-button v-if="!item.noBook" type="primary" danger @click.stop="Booknow(item, $event)"
                        class="!er-absolute er-right-4 er-bottom-5">
                        <div class="er-flex er-items-center er-text-center er-justify-center">
                            <span>Book now</span><svg xmlns="http://www.w3.org/2000/svg" height="20px"
                                viewBox="0 -960 960 960" width="20px" fill="#fff">
                                <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
                            </svg>
                        </div>
                    </a-button>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
import { Badge } from 'ant-design-vue';
import constans from '@/constans.js'
import { ref, computed, nextTick } from "vue";
import { watchDebounced } from '@vueuse/core';
import booknow from '@/modal.js'
import event from '@/event.js'
import { convertDistance, getDistance, toBounds, jumpTo } from '@/tools.js'

const activeStore = ref()
const listContainer = ref(null);

const props = defineProps({
    map: Object,
    formState: Object // 声明 list 作为 prop
});

function Booknow(store, e) {
    event.emit('hidePopover')
    booknow(store, e)
}

const sortedList = computed(() => {
    nextTick(() => {
        if (listContainer.value) {
            listContainer.value.scrollTop = 0; // 滚动到顶部
        }
    });

    const list = props.formState.storeList.filter(s => s.show)
    return list.sort((a, b) => a.distance - b.distance);
})


const onClick = async (v) => {
    // 获取当前地图的可视区域边界
    const bounds = props.map.getBounds();
    // 要判断的坐标点
    const point = v.location; // 例如 [113.2644, 23.1291] (深圳)
    // 判断该点是否在地图可视区域内
    const isInside = bounds.contains(point);

    // 两点之间的距离
    const disrance = Number(getDistance(v.location, props.formState.center)
)
    activeStore.value = v.id

    // 如果当前点 ，不在地图上
    if (!isInside) {
        props.formState.center = v.location
        await jumpTo(props.map, v.location)
    }

    // 如果两点之间的距离 超过 10 miles
    if (disrance > props.formState.miles / 2) {
        props.formState.center = v.location
        await jumpTo(props.map, v.location)
    }

    setTimeout(() => {
        event.emit('storeListItemClick', v)
    })
}
</script>
