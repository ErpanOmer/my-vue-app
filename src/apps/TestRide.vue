<style>
@import '@/styles/fonts.scss';
@import '@/styles/tailwind.css';

@keyframes bounce {
  0% { transform: translateY(-50%) scale(1, 1); }
  30% { transform: translateY(-65%) scale(1.1, 0.9); }
  50% { transform: translateY(-80%) scale(0.9, 1.1); }
  75% { transform: translateY(-65%) scale(1, 1); }
  100% { transform: translateY(-50%) scale(1, 1); }
}

.map-marker {
  width: 50px;
  height: 50px;
  border-radius: 1px;
  transform: translateY(-50%);
  animation: bounce 0.6s ease-out;
}


#map {
    height: 100vh;
    width: 100vw;
    user-select: none;
}
</style>

<template>
    <a-config-provider :theme="constans.THEME">
        <a-style-provider :transformers="[legacyLogicalPropertiesTransformer]" hash-priority="high">
            <div class="er-relative">
                <div id="map" ref="mapContainer"></div>
                <div
                    class="er-flex er-flex-col er-absolute er-top-6 er-left-6 er-bg-background er-max-h-[96vh] er-px-8 er-pt-6 er-rounded-2xl er-shadow-2xl er-space-y-4 er-overflow-hidden er-w-full er-max-w-2xl">
                    <Search :map="map" v-model:formState="formState" />
                    <StoreList :map="map" v-model:formState="formState" />
                </div>
            </div>
            <Markers :map="map" :storeList="formState.storeList" />
        </a-style-provider>
    </a-config-provider>
    <span ref="markerPin">
        <img :src="icon" alt="" class="map-marker">
    </span>
</template>

<script setup>
import { StyleProvider, ConfigProvider, legacyLogicalPropertiesTransformer } from 'ant-design-vue'
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { ref, onMounted, watch, watchEffect, nextTick } from "vue";
import mapboxgl from 'mapbox-gl';
import Search from '@/components/Search.vue';
import StoreList from '@/components/StoreList.vue';
import constans from '@/constans.js'
import { convertDistance, debounce, getDistance, toBounds, isFullyContained } from '@/tools.js'
import { fetchStoreList, fetchUserLocation } from '@/fetch.js'
import { watchDebounced } from '@vueuse/core';
import Markers from '@/components/Markers.vue'
import icon from '@/assets/pin.png'

const mapContainer = ref(null);
const map = ref(null)
const marker = ref(null)
const markerPin = ref(null)
// 表单
const formState = ref({
    center: constans.DEFAULT_CENTER,
    search: '',
    miles: 50000,
    service: [],
    ebikes: [],
    storeList: []
})

let storeListFromOrigin = fetchStoreList()


function recalculateStoreList () {
    const center = formState.value.center

    for (const store of formState.value.storeList) {
        const distance = getDistance(center, store.location)
        store.show = true
        store.distance = distance
        store.noBook = store.noBook || !store.email || store.availableSizes.length < 1 || !store.businessHours.some(Boolean)

        if (distance > formState.value.miles) {
            store.show = false
            continue
        }

        if (formState.value.ebikes.length && !isFullyContained(formState.value.ebikes, store.availableSizes)) {
            store.show = false
            continue
        }

        if (formState.value.service.length && !isFullyContained(formState.value.service, store.categories)) {
            store.show = false
            continue
        }
    }
}


onMounted(async () => {
    // mapboxgl.workerUrl = location.origin;
    map.value = new mapboxgl.Map({
        accessToken: constans.ACCESS_TOEKN,
        container: mapContainer.value, // container ID
        style: "mapbox://styles/mapbox/streets-v12",
        center: constans.DEFAULT_CENTER,
        bounds: toBounds(constans.DEFAULT_CENTER, convertDistance(50)),
        maxBounds: constans.IS_DEV ? null : [
            [-130, 22],  // 西南角 (夏威夷附近)
            [-60, 55]    // 东北角 (缅因州和五大湖上方)
        ],
        minZoom: 7,
        // attributionControl: false,
        // scrollZoom: false,
        // doubleClickZoom: false,
    })

    console.log(mapboxgl)

    map.value.on('load', function ({ target: map }) {
        marker.value = new mapboxgl.Marker(markerPin.value).setLngLat(constans.DEFAULT_CENTER).addTo(map);
    })


    map.value.on('moveend', () => {
        const center = map.value.getCenter()
        formState.value.center = [center.lng, center.lat]
    });

    formState.value.storeList = await storeListFromOrigin.then()
    setTimeout(recalculateStoreList)
})

// 监听 formState 的变化
watchDebounced(
    () => formState.value.miles, // 只监听 miles
    v => {
        map.value.setCenter(formState.value.center);
        map.value.fitBounds(toBounds(formState.value.center, convertDistance(v)), { duration: 1000 })
        setTimeout(recalculateStoreList)
    },
    { debounce: 500, deep: true } // 监听对象内部的所有变化
);


watchDebounced(
    () => formState.value.ebikes,
    recalculateStoreList,
    { debounce: 500, deep: true } // 监听对象内部的所有变化
)

watchDebounced(
    () => formState.value.service,
    recalculateStoreList,
    { debounce: 500, deep: true } // 监听对象内部的所有变化
)


watchDebounced(
    () => formState.value.center,
    v => {
        marker.value.setLngLat(v)
        markerPin.value.style.display = 'none';
        requestAnimationFrame(() => {
            markerPin.value.style.display = "block"; // 重新应用动画
        })

        setTimeout(recalculateStoreList)
    },
    { debounce: 10, deep: true } // 监听对象内部的所有变化
)
</script>