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
    <template v-for="(store, index) in storeList" :key="store.id">
        <div ref="markerRefs" @click="onClick" class="er-cursor-pointer" v-show="store.show">
            <a-popover :title="null" trigger="click" :key="store.id">
                <template #content>
                    <div class="er-flex er-flex-col er-space-y-3 er-w-[225px]">
                        <span class="text-size16 er-font-bold">{{ store.name }}</span>
                        <a class="er-whitespace-normal er-text-primary er-text-xl"
                            :href="`https://www.google.com/maps?q=${store.location.map(i => i.toFixed(4)).reverse().toString()}`"
                            :title="store.address" target="_blank" rel="noopener noreferrer">{{ store.address }}</a>
                        <div class="er-space-x-4">
                            <a :href="`tel:${store.phone}`" :title="store.phone">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                    width="24px" fill="#fd4b17">
                                    <path
                                        d="M162-120q-18 0-30-12t-12-30v-162q0-13 9-23.5t23-14.5l138-28q14-2 28.5 2.5T342-374l94 94q38-22 72-48.5t65-57.5q33-32 60.5-66.5T681-524l-97-98q-8-8-11-19t-1-27l26-140q2-13 13-22.5t25-9.5h162q18 0 30 12t12 30q0 125-54.5 247T631-329Q531-229 409-174.5T162-120Z" />
                                </svg>
                            </a>
                            <a :href="`mailto:${store.email}`" :title="store.email">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                    width="24px" fill="#fd4b17">
                                    <path
                                        d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280 320-200v-80L480-520 160-720v80l320 200Z" />
                                </svg>
                            </a>
                        </div>
                        <span class="text-size16 er-font-bold">Opening Hours:</span>
                        <div class="er-flex er-flex-col er-opacity-80">
                            <div v-for="(time, index) in store.businessHours" :key="index" class="er-flex er-text-xl">
                                <span class="er-w-1/2">{{ constans.WEEK[index] }}:</span>
                                <span>{{ time || 'Closed' }}</span>
                            </div>
                        </div>
                        <div class="er-flex er-space-x-4">
                            <img width="30" :src="findService(cat)" :title="cat" :alt="cat"
                                v-for="(cat, index) in store.categories" :key="index">
                            <span class="er-flex-1"></span>

                        </div>
                        <a-button type="primary" danger>
                            <div class="er-flex er-items-center er-text-center er-justify-center">
                                <span>Book now</span><svg xmlns="http://www.w3.org/2000/svg" height="20px"
                                    viewBox="0 -960 960 960" width="20px" fill="#fff">
                                    <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
                                </svg>
                            </div>
                        </a-button>
                    </div>
                </template>
                <svg v-show="store.show" xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960"
                    width="48px" fill="#fd4b17">
                    <path
                        d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z" />
                </svg>
            </a-popover>
        </div>
    </template>
</template>

<script setup>
import { onMounted, nextTick, ref, watch } from 'vue'
import mapboxgl from "mapbox-gl";
import { Popover } from 'ant-design-vue';
import constans from '@/constans.js'
import { watchDebounced } from '@vueuse/core';

const props = defineProps({
    storeList: Array,
    map: Object
});

let markerRefs = ref([])

function onClick() {
    console.log(11)
}

function findService(cat = '') {
    let src = constans.SERVICES.find(s => s.name === 'Free Assembly').icon;

    if (!cat) {
        return src
    }

    for (const service of constans.SERVICES) {
        if (service.name.replace(/\s+/g, "").toLowerCase() === cat.replace(/\s+/g, "").toLowerCase()) {
            return service.icon
        }
    }

    return src
}

const addMarkers = () => {
    for (let index = 0; index < props.storeList.length; index++) {
        const store = props.storeList[index]
        new mapboxgl.Marker(markerRefs.value[index]).setLngLat(store.location).addTo(props.map)
    }
}

watchDebounced(() => props.storeList, addMarkers, { debounce: 500, deep: true });
</script>
