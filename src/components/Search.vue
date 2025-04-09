<style lang="scss">
#app {
    .ant-divider-vertical {
        height: 100%;
    }

    .ant-collapse {
        margin: 0 -20px 0;
        border-radius: 0;
        background-color: #eee;

        .ant-collapse-header {
            padding: 0;
        }

        .ant-collapse-content-box {
            padding: 20px;
        }

        .ant-divider {
            margin: 12px 0;
        }
    }

    .ant-btn-link span {
        text-decoration-line: underline;
    }

    input[type="search"]::-webkit-search-cancel-button {
        display: none;
    }
}
</style>

<template>

    <div class="text-size20 er-font-bold er-flex er-items-center">Find a Dealer <span class="er-flex-1"></span><a-button type="primary"
            @click.stop.prevent="onClick" title="Recharge Location">
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#fff">
                <path
                    d="M440-42v-80q-125-14-214.5-103.5T122-440H42v-80h80q14-125 103.5-214.5T440-838v-80h80v80q125 14 214.5 103.5T838-520h80v80h-80q-14 125-103.5 214.5T520-122v80h-80Zm40-158q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-120q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Z" />
            </svg>
        </a-button></div>
    <div class="er-flex er-items-center er-space-x-4">
        <a-auto-complete v-model:value="store.formState.search" :listHeight="600" :options="searchOptions"
            @select="onSelectStore" @search="onSearchStore" class="er-w-full" :allowClear="true">
            <a-input placeholder="Search by Store name Or Your location"></a-input>
            <template #clearIcon>
                <close-outlined :style="{ color: '#333', fontSize: '16px', transform: 'translate(-3px, -2px)' }"/>
            </template>
            <template #option="item">
                <template v-if="(item.value === 'Location' || item.value === 'Store')">
                    <span>
                        {{ item.value }}
                    </span>
                </template>
                <template v-else-if="item.type === 'Location'">
                    <div class="er-flex er-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="er-min-w-10" height="24px"
                            viewBox="0 -960 960 960" width="24px" fill="#444">
                            <path
                                d="M480-200Q339-304 269.5-402T200-594q0-125 78-205.5T480-880q124 0 202 80.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM200-80v-80h560v80H200Z" />
                        </svg>
                        <div class="er-flex er-flex-col er-text-left er-ml-4 er-overflow-hidden">
                            <span class="text-size14 er-font-bold">{{ item.name_preferred }}</span>
                            <span>{{ item.full_address.slice(item.full_address.indexOf(",") + 1).trim() }}</span>
                        </div>
                    </div>
                </template>
                <template v-else-if="item.type === 'Store'">
                    <div class="er-flex er-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="er-min-w-10" height="24px"
                            viewBox="0 -960 960 960" width="24px" fill="#444">
                            <path
                                d="M160-720v-80h640v80H160Zm0 560v-240h-40v-80l40-200h640l40 200v80h-40v240h-80v-240H560v240H160Zm80-80h240v-160H240v160Z" />
                        </svg>
                        <div class="er-flex er-flex-col er-text-left er-ml-4 er-overflow-hidden">
                            <span class="text-size14 er-font-bold">{{ item.name }}</span>
                            <span>{{ item.address }}</span>
                        </div>
                    </div>
                </template>
                <template v-else>
                    <div class="er-text-center er-pb-6">{{ item.label }}</div>
                </template>
            </template>
        </a-auto-complete>
        <!-- <a-button type="primary" danger class="!er-px-4" @click.stop.prevent="onClick" title="Recharge Location">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff">
                <path d="M516-120 402-402 120-516v-56l720-268-268 720h-56Z" />
            </svg>
        </a-button> -->
    </div>
    <div>
        <div class="er-text-2xl"><b>Radius: </b><span class="er-text-xl">{{ store.formState.miles }} miles</span></div>
        <a-slider v-model:value="store.formState.miles" :min="constans.RADIUS_RANGE[0]" :max="constans.RADIUS_RANGE[1]" :step="1" :tip-formatter="tipFormatter" />
    </div>
    <div class="er-flex er-pb-4 er-flex-col">
        <div class="er-flex">
            <a-button shape="round" :type="filterButtonType" @click="toggleCollapse">
                Filters
                <AlignRightOutlined />
            </a-button>
            <span class="er-flex-1"></span>
            <a-button type="link" class="er-underline" @click="reset">Reset All</a-button>
        </div>
        <div class="er-flex er-mt-4 er-gap-y-2 er-flex-wrap" v-if="tags.length">
            <a-tag v-for="tag in tags" :key="tag.key" :bordered="false" @close.prevent="closeTag(tag)" closable>{{
                tag.name
                }}</a-tag>
        </div>
    </div>
    <a-collapse ghost :expandIcon="null" accordion>
        <a-collapse-panel :showArrow="false" :header="null" ref="collapsePanelRef">
            <a-checkbox-group v-model:value="store.formState.service">
                <a-row :gutter="[0, 12]">
                    <a-col :span="12" v-for="(value, key) in constans.SERVICES" :key="key">
                        <a-checkbox :value="Number(key)">
                            <img width="24" height="24" :src="value.icon" alt="" class="er-align-bottom er-mr-3">
                            <span class="text-size14">{{ value.name }}</span>
                        </a-checkbox>
                    </a-col>
                </a-row>
            </a-checkbox-group>
            <a-divider />
            <a-checkbox-group v-model:value="store.formState.ebikes">
                <a-row :gutter="[0, 12]">
                    <a-col :span="12" v-for="(value, key) in constans.E_BIKES" :key="key">
                        <a-checkbox :value="Number(key)">
                            {{ value.name }}
                        </a-checkbox>
                    </a-col>
                </a-row>
            </a-checkbox-group>
        </a-collapse-panel>
    </a-collapse>
</template>

<script setup>
import { Button, Collapse, Slider, AutoComplete, CheckboxGroup, Checkbox, Row, Col, Divider, Input, Tag } from 'ant-design-vue';
import { SearchOutlined, AlignRightOutlined, SendOutlined, CloseOutlined } from '@ant-design/icons-vue';
import { ref, nextTick, computed } from 'vue'
import constans from '@/constans.js'
import { convertDistance, getDistance, toBounds, jumpTo } from '@/tools.js'
import { GeocodingCore, debounce } from '@mapbox/search-js-core'
import Fuse from 'fuse.js'
import { useStore } from '@/store'

const store = useStore()
// map
const geocode = new GeocodingCore({ accessToken: constans.ACCESS_TOEKN, country: 'US,CA', language: 'en', limit: 5 });

// filter forms
const collapsePanelRef = ref(null)
const filterButtonType = ref('default')

const tags = computed(() => {
    const arr = []

    for (const key of store.formState.service) {
        arr.push({
            key,
            name: constans.SERVICES[key].name
        })
    }

    for (const key of store.formState.ebikes) {
        arr.push({
            key,
            name: constans.E_BIKES[key].name
        })
    }

    return arr
})

// searchOstions
const searchOptions = ref([])

const toggleCollapse = async () => {
    collapsePanelRef.value.$el.querySelector('.ant-collapse-header').click()
    filterButtonType.value = filterButtonType.value === 'primary' ? 'default' : 'primary'
}

function tipFormatter(v) {
    return `${v} miles`
}

async function searchMap(text = '') {
    const result = {
        value: 'Location',
        options: [{
            value: 0,
            label: 'No Result',
            disabled: true,
        }]
    }

    if (!text) {
        return result
    }

    try {
        const r = await geocode.forward(text);

        if (r.features.length) {
            result.options.shift()

            for (const feature of r.features) {
                result.options.push({
                    type: result.value,
                    title: feature.properties.full_address,
                    key: feature.properties.mapbox_id,
                    label: feature.properties.full_address,
                    value: feature.properties.full_address,
                    full_address: feature.properties.full_address,
                    name_preferred: feature.properties.name_preferred,
                    center: [feature.properties.coordinates.longitude, feature.properties.coordinates.latitude]
                })
            }
        }

        console.log(r)
    } catch (error) {
        console.log('error', error)
    }

    return result
}

async function searchStore(text = '') {
    const result = {
        value: 'Store',
        options: [{
            value: 1,
            label: 'No Result',
            disabled: true,
        }]
    }

    if (!text) {
        return result
    }

    const fuse = new Fuse(store.formState.storeList.filter(s => s.show), { keys: ['name',] })
    const list = fuse.search(text, {
        limit: 5
    })

    if (list.length) {
        result.options.shift()

        for (const item of list) {
            result.options.push({
                type: result.value,
                title: item.item.address,
                key: item.item.id,
                label: item.item.address,
                value: item.item.address,
                address: item.item.address,
                name: item.item.name,
                center: item.item.location
            })
        }
    }

    return result
}

const reset = () => {
    store.formState.service = []
    store.formState.ebikes = []
}

const closeTag = tag => {
    store.formState.service = store.formState.service.filter(v => v !== tag.key)
    store.formState.ebikes = store.formState.ebikes.filter(v => v !== tag.key)
}

const onSearchStore = debounce(async text => {
    // console.log(text)

    searchOptions.value = [await searchStore(text), await searchMap(text)]
}, 300)

function onSelectStore(value, option) {
    console.log(value, option)
    store.formState.center = option.center

    jumpTo(store.map, option.center)
}

const onClick = (e) => {
    store.formState.center = constans.DEFAULT_CENTER
    store.formState.miles = constans.DEFAULT_RADIUS
    store.formState.search = ''
    searchOptions.value = []

    jumpTo(store.map, constans.DEFAULT_CENTER, toBounds(constans.DEFAULT_CENTER, convertDistance(constans.DEFAULT_RADIUS)))

    e.stopPropagation()
    return false
}
</script>
