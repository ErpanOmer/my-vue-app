<style>
@import '@/styles/fonts.scss';
@import '@/styles/tailwind.css';

@keyframes bounce {
    0% {
        transform: translateY(-50%) scale(1, 1);
    }

    30% {
        transform: translateY(-65%) scale(1.1, 0.9);
    }

    50% {
        transform: translateY(-80%) scale(0.9, 1.1);
    }

    75% {
        transform: translateY(-65%) scale(1, 1);
    }

    100% {
        transform: translateY(-50%) scale(1, 1);
    }
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

.marker {
    height: 40px;
    width: 40px;
    background-position: center center;
    background-repeat: no-repeat;
    cursor: pointer;
    background-size: contain;
}

.marker.hide {
    opacity: 0 !important;
    pointer-events: none !important;
}

@media (max-width: 767px) {
    #map {
        width: 100vw;
        height: 150vw;
        margin-left: -20px;
        margin-top: 0;
    }

    .marker {
        height: 36px;
        width: 36px;
    }
}
</style>

<template>
    <a-config-provider :theme="constans.THEME" :locale="constans.SHOP_LOCALE === 'en' ? enUS : deDE">
        <a-style-provider :transformers="[legacyLogicalPropertiesTransformer]" hash-priority="high">
            <div class="er-relative">
                <div id="map" v-if="!constans.IS_MOBILE" ref="mapContainer"></div>
                <div
                    class="er-flex er-flex-col er-absolute er-top-6 er-left-6 er-bg-background md:er-max-h-[96vh] er-px-8 er-pt-6 er-rounded-2xl er-shadow-2xl er-space-y-4 er-overflow-hidden er-w-full md:er-max-w-[400px] mb:er-static mb:er-pb-[40vw]">
                    <Search />
                    <!-- <div id="map" v-if="constans.IS_MOBILE" ref="mapContainer"></div> -->
                    <StoreList />
                </div>
            </div>
            <Markers />
        </a-style-provider>
    </a-config-provider>

    <!-- <span ref="markerPin" class="er-hidden">
        <img :src="icon" alt="" class="map-marker">
    </span> -->
</template>

<script setup>
import { StyleProvider, ConfigProvider, legacyLogicalPropertiesTransformer } from 'ant-design-vue'
import { ref, onMounted, watch, watchEffect, nextTick } from "vue";
import deDE from 'ant-design-vue/es/locale/de_DE'
import enUS from 'ant-design-vue/es/locale/en_US';
import { Map, Marker } from 'mapbox-gl';
import Search from '@/components/Search.vue';
import StoreList from '@/components/StoreList.vue';
import constans from '@/constans.js'
import { convertDistance, debounce, throttle, getDistance, toBounds, isFullyContained } from '@/tools.js'
import { fetchStoreList, fetchUserLocation } from '@/fetch.js'
import { watchDebounced } from '@vueuse/core';
import Markers from '@/components/Markers.vue'
import icon from '@/assets/pin.png'
import event from '@/event.js'
import { useStore } from '@/store'

const store = useStore()
const mapContainer = ref(null);
const marker = ref(null)
const markerPin = ref(null)

// pre fetch
let storeListFromOrigin = fetchStoreList()


function recalculateStoreList() {
    const center = store.formState.center

    for (const s of store.formState.storeList) {
        const distance = getDistance(center, s.location)
        s.show = true
        s.distance = distance
        s.noBook = s.noBook || !s.email || s.availableSizes.length < 1 || !s.businessHours.some(Boolean)

        if (distance > store.formState.miles) {
            s.show = false
            continue
        }

        if (store.formState.ebikes.length && !isFullyContained(store.formState.ebikes, s.availableSizes)) {
            s.show = false
            continue
        }

        if (store.formState.service.length && !isFullyContained(store.formState.service, s.categories)) {
            s.show = false
            continue
        }
    }
}


onMounted(async () => {
    // mapboxgl.workerUrl = location.origin;
    store.map = new Map({
        accessToken: constans.ACCESS_TOEKN,
        container: mapContainer.value, // container ID
        style: "mapbox://styles/mapbox/streets-v12",
        center: constans.DEFAULT_CENTER,
        bounds: toBounds(constans.DEFAULT_CENTER, convertDistance(constans.DEFAULT_RADIUS)),
        maxBounds: constans.MAX_BOUNDS,
        cooperativeGestures: true,
        dragRotate: false
    })

    store.map.setPadding(constans.IS_MOBILE ? { bottom: 200 } : { left: 200 });

    store.map.on('load', function ({ target: map }) {
        // markerPin.value.classList = ['er-block']
        // marker.value = new Marker(markerPin.value).setLngLat(constans.DEFAULT_CENTER).addTo(map);

        fetchUserLocation().then(r => {
            const maxBounds = map.getMaxBounds()
            const center = maxBounds.contains(r) ? r : constans.DEFAULT_CENTER

            if (center !== constans.DEFAULT_CENTER) {
                map.jumpTo({
                    center,
                    // curve: 1,
                    // zoom: 9,
                    bounds: toBounds(center, convertDistance(constans.DEFAULT_RADIUS)),
                })
            }

            constans.DEFAULT_CENTER = center
        })

        const mapCenterChange = () => {
            const center = map.getCenter()
            store.formState.center = [center.lng, center.lat]
        }

        map.on('dragend', mapCenterChange);
        map.on('zoomend', mapCenterChange);

        map.on('click', (e) => {
            const elem = e.originalEvent.target.closest('.mapboxgl-marker')

            if (elem) {
                event.emit('clickMarker', elem.getAttribute('data-id'))
            }
        });

        map.on('zoomstart', () => {
            event.emit('hidePopover')
        });

        map.on('movestart', () => {
            event.emit('hidePopover')
        });

        map.on('click', 'points', (e) => {
            const id = e.features[0].properties.id;
            event.emit('clickMarker', id)
        });

        map.on('mouseenter', 'points', () => {
            map.getCanvas().style.cursor = 'pointer';
        });

        map.on('mouseleave', 'points', () => {
            map.getCanvas().style.cursor = '';
        });
    })

    store.formState.storeList = await storeListFromOrigin.then()
    // event.emit('addMarkers')
    setTimeout(recalculateStoreList)

    for (const s of store.formState.storeList) {
        const div = document.createElement('div');
        div.className = 'marker'
        div.style.backgroundImage = 'url(https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Untitled-1_2bb6ff92-d9a6-4e3e-8902-85285d953638.svg?v=1745571506)'
        div.setAttribute('data-id', s.id)

        setTimeout(() => {
            new Marker(div).setLngLat(s.location).addTo(store.map);
        })
    }

    // 加载自定义标记图标
    // store.map.loadImage(
    //     'https://cdn.shopify.com/s/files/1/0583/5810/4213/files/1679402773-main.png?v=1745584540',
    //     (error, image) => {
    //         if (error) throw error;

    //         // 添加图标到地图
    //         store.map.addImage('custom-marker', image);

    //         // 添加GeoJSON数据源
    //         store.map.addSource('points', {
    //             'type': 'geojson',
    //             'data': {
    //                 'type': 'FeatureCollection',
    //                 'features': store.formState.storeList.map(store => (
    //                     {
    //                         'type': 'Feature',
    //                         id: store.id, // 关键！必须设置
    //                         properties: {
    //                             id: store.id,
    //                         },
    //                         'geometry': {
    //                             'type': 'Point',
    //                             'coordinates': store.location
    //                         }
    //                     }
    //                 ))
    //             }
    //         });

    //         // 添加符号层
    //         store.map.addLayer({
    //             'id': 'points',
    //             'type': 'symbol',
    //             'source': 'points',
    //             'layout': {
    //                 // 'icon-anchor': 'center',
    //                 'icon-image': 'custom-marker',
    //                 'icon-size': constans.IS_MOBILE ? 0.68 : 0.78,
    //                 'icon-allow-overlap': true,
    //             }
    //         });
    //     }
    // );
})

// 监听 formState 的变化
watchDebounced(
    () => store.formState.miles, // 只监听 miles
    v => {
        store.map.setCenter(store.formState.center);
        store.map.fitBounds(toBounds(store.formState.center, convertDistance(v)), { duration: 1000 })
        setTimeout(recalculateStoreList)
    },
    { debounce: 500, deep: true } // 监听对象内部的所有变化
);


watchDebounced(
    () => store.formState.ebikes,
    recalculateStoreList,
    { debounce: 500, deep: true } // 监听对象内部的所有变化
)

watchDebounced(
    () => store.formState.service,
    recalculateStoreList,
    { debounce: 500, deep: true } // 监听对象内部的所有变化
)


watchDebounced(
    () => store.formState.center,
    v => {
        // marker.value.setLngLat(v);
        // markerPin.value.style.display = 'none';
        // requestAnimationFrame(() => {
        //     markerPin.value.style.display = "block"; // 重新应用动画
        // })
        setTimeout(recalculateStoreList)
    },
    { debounce: 10, deep: true } // 监听对象内部的所有变化
)

function sendHeight() {
    window.parent.postMessage({ height: document.body.scrollHeight }, "*");
}

window.addEventListener("load", sendHeight);
window.addEventListener("resize", sendHeight);

if (typeof ResizeObserver !== "undefined") {
    (new ResizeObserver(sendHeight)).observe(document.body);
}

if (typeof MutationObserver !== "undefined") {
    (new MutationObserver(sendHeight)).observe(document.body, { childList: true, subtree: true });
}

window.addEventListener('message', (event) => {
    if (event.data && typeof event.data.visibleHeight === 'number') {
        constans.visibleHeight = event.data.visibleHeight
    }
});
</script>