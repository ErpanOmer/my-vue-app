<style scoped lang="scss">
.ant-popover {
    a {
        color: #fd4b17;
        transition: all .3s;

        &:hover {
            text-decoration-line: underline;
            opacity: 0.85;
        }
    }
}
</style>

<template>
    <a-popover v-if="open" :title="null" trigger="click" :getPopupContainer="getPopupContainer" destroyTooltipOnHide
        arrowPointAtCenter>
        <template #content>
            <div class="er-flex er-flex-col er-space-y-3 er-w-[225px] mb:er-w-[175px]">
                <span class="text-size16 er-font-bold mb:er-text-primary er-leading-tight">{{ store.name }}</span>
                <a v-if="!constans.IS_MOBILE" class="er-text-primary er-text-xl !er-underline"
                    :href="`https://www.google.com/maps?q=${store.location.map(i => i.toFixed(4)).reverse().toString()}`"
                    :title="store.address" target="_blank" rel="noopener noreferrer">{{ store.address }}</a>

                <a :href="`tel:${store.phone}`" :title="store.phone"
                    class="er-flex er-items-center er-gap-x-2 er-flex-wrap er-text-xl" v-if="!constans.IS_MOBILE">
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"
                        fill="#fd4b17">
                        <path
                            d="M162-120q-18 0-30-12t-12-30v-162q0-13 9-23.5t23-14.5l138-28q14-2 28.5 2.5T342-374l94 94q38-22 72-48.5t65-57.5q33-32 60.5-66.5T681-524l-97-98q-8-8-11-19t-1-27l26-140q2-13 13-22.5t25-9.5h162q18 0 30 12t12 30q0 125-54.5 247T631-329Q531-229 409-174.5T162-120Z" />
                    </svg>
                    <span>{{ store.phone }}</span>
                </a>
                <!-- <a :href="`mailto:${store.email}`" :title="store.email" class="er-flex er-items-center er-gap-x-2 er-flex-wrap er-text-xl" v-if="!constans.IS_MOBILE" style="margin: 0;">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"
                            fill="#fd4b17">
                            <path
                                d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280 320-200v-80L480-520 160-720v80l320 200Z" />
                        </svg>
                        <span>{{ store.email }}</span>
                    </a> -->
                <span class="text-size16 er-font-bold mb:er-text-2xl">Opening Hours:</span>
                <div class="er-flex er-flex-col er-opacity-80">
                    <div v-for="(time, index) in store.businessHours" :key="index" class="er-flex er-text-xl">
                        <span class="er-w-1/2">{{ constans.WEEK[index] }}:</span>
                        <span>{{ time || 'Closed' }}</span>
                    </div>
                </div>
                <div v-if="store.categories.length" class="er-flex er-space-x-4">
                    <img width="30" :src="constans.SERVICES[value].icon" :title="constans.SERVICES[value].name"
                        :alt="constans.SERVICES[value].name" v-for="value in store.categories" :key="value">
                    <span class="er-flex-1"></span>
                </div>
                <a-button v-if="!store.noBook && !constans.IS_MOBILE" type="primary" danger
                    @click="Booknow(store, $event)">
                    <div class="er-flex er-items-center er-text-center er-justify-center">
                        <span>Book now</span><svg xmlns="http://www.w3.org/2000/svg" height="20px"
                            viewBox="0 -960 960 960" width="20px" fill="#fff">
                            <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
                        </svg>
                    </div>
                </a-button>
            </div>
        </template>
        <div ref="popover" v-if="open" class="er-fixed er-w-1 er-h-1 er-bg-transparent"
            :style="{ left: `${popoverPosition.left}px`, top: `${popoverPosition.top}px` }"></div>
    </a-popover>
</template>

<script setup>
import { onMounted, nextTick, ref, watch, onUnmounted } from 'vue'
import { Marker } from "mapbox-gl";
import { Popover } from 'ant-design-vue';
import constans from '@/constans.js'
import { watchDebounced } from '@vueuse/core';
import booknow from '@/modal.js'
import event from '@/event.js'
import { convertDistance, getDistance, toBounds, jumpTo, isFullyContained } from '@/tools.js'
import { useStore } from '@/store'

const state = useStore()
const markers = new Map()
const store = ref({})
const open = ref(false)
const popover = ref(null)
const popoverPosition = ref({ left: 0, top: 0 }); // Popover 位置

const addMarkers = () => {
    for (const marker of markers.values()) {
        marker.remove()
    }

    markers.clear()

    for (const store of state.formState.storeList) {
        const div = document.createElement('div')
        div.className = 'marker'

        const marker = new Marker(div).setLngLat(store.location).addTo(state.map)
        const elem = marker.getElement()
        elem.setAttribute('data-id', store.id)

        markers.set(store.id, marker)
    }
}

const getPopupContainer = () => {
    return document.body
}

async function onClickMarker(id) {
    const store = state.formState.storeList.find(s => s.id === id)
    const { lng, lat } = state.map.getCenter();

    //两点之间的距离
    const disrance = Number(getDistance(store.location, [lng, lat]))

    // 如果两点之间的距离 超过 10 miles
    if (disrance > ((state.formState.miles / 3) * 2)) {
        state.formState.center = store.location
        await jumpTo(state.map, store.location)
    }

    setTimeout(show, 0, store)
}


function Booknow(store, e) {
    hide()
    booknow(store, e)
}

function show(v) {
    if (!v) {
        return
    }

    open.value = false
    store.value = v

    const rect = state.map.project(v.location)

    // const rect = markers.get(v.id).getElement().getBoundingClientRect()

    popoverPosition.value = { left: rect.x, top: constans.IS_MOBILE ? rect.y + document.querySelector('#map').getBoundingClientRect().top : rect.y }

    nextTick(() => {
        open.value = true

        nextTick(() => {
            popover.value.click()
        })
    })
}

function hide() {
    open.value = false
}

event.on('hidePopover', hide)
event.on('storeListItemClick', show)
event.on('clickMarker', onClickMarker)
event.on('addMarkers', addMarkers)


function changeMarkers() {
    const visibleIds = []

    for (const store of state.formState.storeList) {
        let visible = true

        if (state.formState.ebikes.length && !isFullyContained(state.formState.ebikes, store.availableSizes)) {
            visible = false
        }

        if (visible && state.formState.service.length && !isFullyContained(state.formState.service, store.categories)) {
            visible = false
        }

        visible && visibleIds.push(store.id)

        // console.log(visible)
        // state.map.setLayoutProperty(
        //     'points',
        //     'visibility',
        //     visible ? 'visible' : 'none'
        // );
    }

    requestAnimationFrame(() => {
        state.map.setFilter('points', ['in', ['get', 'id'], ['literal', visibleIds]]);
    })


    // state.map.triggerRepaint(); // 手动触发重绘
}

watchDebounced(
    () => state.formState.ebikes,
    changeMarkers,
    { debounce: 500, deep: true } // 监听对象内部的所有变化
)

watchDebounced(
    () => state.formState.service,
    changeMarkers,
    { debounce: 500, deep: true } // 监听对象内部的所有变化
)


// watchDebounced(() => state.formState.storeList, addMarkers, { debounce: 500, deep: true });
</script>
