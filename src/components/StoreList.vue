<style scoped>
.er-flex-1.er-pb-8.er-flex.er-flex-col.er-overflow-hidden {
    margin: 0 -20px;

    @media (max-width: 767px) {
        margin: 0;
        max-width: 100vw;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding-bottom: 15px;
        z-index: 2;
    }
}

.ant-carousel .slick-prev,
.ant-carousel .slick-next {
    background-color: #000 !important;
    opacity: 0.75;
    border-radius: 5px;
    width: auto;
    height: 50px;
    z-index: 3;
}
</style>

<template>
    <div class="er-flex-1 er-pb-8 er-flex er-flex-col er-overflow-hidden">
        <div
            class="er-flex er-items-center text-size14 er-px-10 er-py-4 er-pb-4 er-shadow-2xl mb:er-bg-white mb:er-mb-2 mb:er-w-[calc(100%-32px)] mb:er-mx-auto mb:er-rounded-xl mb:er-font-bold mb:er-px-6">
            Find nearby stores: <span class="er-text-primary er-pl-2"><span v-if="constans.IS_MOBILE">{{ currentIndex }} / </span> {{ sortedList.length }}</span>
        </div>
        <a-carousel v-if="constans.IS_MOBILE && rerender" :after-change="onChange" :dots="false" arrows :infinite="false" ref="carousel" :slickGoTo="10">
            <ListItem v-for="item in sortedList" :item="item" :key="item.id" :onclick="onClick"/>
            <template #prevArrow>
                <svg style="left: -6px;transform: translateY(-50%);" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="16px" fill="#fff"><path d="M640-116 276-480l364-364 34 34-330 330 330 330-34 34Z"/></svg>
            </template>
            <template #nextArrow>
                <svg style="right: -6px;transform: translateY(50%);rotate: 180deg;" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="16px" fill="#fff"><path d="M640-116 276-480l364-364 34 34-330 330 330 330-34 34Z"/></svg>
            </template>
        </a-carousel>
        <div v-if="!constans.IS_MOBILE" class="er-flex er-flex-col er-space-y-4 er-overflow-auto" ref="listContainer">
            <ListItem @click.stop="onClick(item)" v-model:activeStore="activeStore" :item="item" v-for="item in sortedList" :key="item.id" />
        </div>
    </div>
</template>

<script setup>
import constans from '@/constans'
import { ref, computed, nextTick, onMounted, watch } from "vue";
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
import { useStore } from '@/store'
import ListItem from './ListItem.vue';
import { Carousel } from 'ant-design-vue';
import { convertDistance, getDistance, toBounds, jumpTo } from '@/tools.js'
import event from '@/event.js'

const activeStore = ref()
const currentIndex = ref(1)
const carousel = ref(null)
const rerender = ref(false)
let itsMe = false

const sortedList = computed(() => {
    return store.formState.storeList.filter(s => s.show).sort((a, b) => a.distance - b.distance);
})

const store = useStore()
const listContainer = ref(null);

const onClick = async (v) => {
    // 获取当前地图的可视区域边界
    const bounds = store.map.getBounds();
    // 要判断的坐标点
    const point = v.location; // 例如 [113.2644, 23.1291] (深圳)
    // 判断该点是否在地图可视区域内
    const isInside = bounds.contains(point);

    // 两点之间的距离
    const disrance = Number(getDistance(v.location, store.formState.center)
    )
    activeStore.value = v.id

    // 如果当前点 ，不在地图上
    if (!isInside) {
        // store.formState.center = v.location
        await jumpTo(store.map, v.location)
    }

    // 如果两点之间的距离 超过 10 miles
    if (disrance > ((store.formState.miles / 3) * 2)) {
        store.formState.center = v.location
        await jumpTo(store.map, v.location)
    }

    setTimeout(() => {
        event.emit('storeListItemClick', v)
    })
}

const onChange = index => {
    !itsMe && onClick(sortedList.value[index]);
    currentIndex.value = index + 1;

    itsMe = false
}

watch(sortedList, v => {
    rerender.value = false
    itsMe = false

    nextTick(() => {
        currentIndex.value = 1
        rerender.value = true
    })

    !constans.IS_MOBILE && nextTick(() => {
        if (listContainer.value) {
            listContainer.value.scrollTop = 0; // 滚动到顶部
        }
    });
})

event.on('clickMarker', id => {
    const index = sortedList.value.findIndex(s => s.id === id)

    activeStore.value = sortedList.value[index].id

    itsMe = true
    if (carousel.value) {
        carousel.value.goTo(index)
    }
})
</script>
