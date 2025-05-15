<style lang="scss">
.modal {
    .ant-modal-content {
        .ant-modal-confirm-body {
            .ant-modal-confirm-content {
                max-width: 100%;
                margin-block-start: 0;

                &>.er-relative {
                    &>svg {
                        position: absolute;
                        right: 0;
                        top: 0;
                        transform: translateY(-32px);
                        cursor: pointer;
                    }

                    .ant-picker-date-panel {
                        .ant-picker-cell:not(.ant-picker-cell-disabled) {
                            color: inherit;

                            &::before {
                                transition: none;
                            }
                        }

                        .ant-picker-cell-disabled {
                            pointer-events: all;
                            cursor: not-allowed;

                            .ant-picker-calendar-date {
                                border: none;
                            }

                            &::before {
                                height: 80%;
                                transition: none;
                            }
                        }

                        .ant-picker-calendar-date-today {
                            &::before {
                                border: none;
                            }
                        }



                        .ant-picker-calendar-date {
                            width: 75%;
                            height: 100%;
                            display: flex;
                            align-items: center;
                            justify-items: center;
                            text-align: center;
                            margin: auto;
                            border: 1px solid #f8f8f8;
                            transition: none;

                            // aspect-ratio: 1;
                            .ant-picker-calendar-date-value {
                                flex: 1;
                                font-weight: 500;
                            }
                        }
                    }

                    .ant-descriptions-header {
                        margin-bottom: 10px;
                    }

                    .next {
                        svg {
                            transition: all .3s;
                        }

                        &:hover {
                            svg {
                                transform: translateX(3px);
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>

<template>
    <div class="er-relative">
        <svg @click="close" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
            fill="#222">
            <path
                d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
        <div v-show="step === 1" class="er-py-8">
            <div class="er-grid er-grid-cols-2 er-gap-6">
                <div @click="onChangeEbike(key)"
                    :class="['er-transition er-border er-border-solid er-rounded-3xl er-w-full er-border-border er-p-4 er-flex er-items-center er-flex-col er-cursor-pointer er-relative', forms.ebike === key ? 'er-bg-primary/75 er-text-white' : '']"
                    v-for="key in store.availableSizes" :key="key">
                    <svg class="er-absolute er-right-2 er-top-2" xmlns="http://www.w3.org/2000/svg" height="30px"
                        viewBox="0 -960 960 960" width="30px" fill="#fff">
                        <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                    </svg>
                    <img class="er-object-cover er-aspect-[16/10]" :src="`${constans.E_BIKES[key].img}&width=300`"
                        :alt="constans.E_BIKES[key].name" />
                    <span class="text-size14 er-font-medium er-my-2">{{ constans.E_BIKES[key].name }}</span>
                </div>
            </div>
        </div>
        <div v-show="step === 2" class="er-py-8">
            <a-calendar mode="month" @change="onChangeDate" :fullscreen="false" :disabledDate="disabledDate"
                v-model:value="forms.date" valueFormat="YYYY-MM-DD">
                <template #headerRender="{ value, onChange }">
                    <div class="er-flex er-items-center er-justify-between er-mb-6">
                        <span class="text-size14 er-font-medium">{{ i18n.global.t('dialog.SelectedDate') }}: <span class="er-text-primary">{{ forms.date
                        }}</span></span>
                        <a-select class="er-w-5/12" :value="value.format('YYYY-MM')" @change="
                            selectedMonth => {
                                onChange(dayjs(getNextOpenDay(store.businessHours, dayjs(selectedMonth))));
                            }
                        ">
                            <a-select-option v-for="index in 3" :key="index"
                                :value="dayjs().add(index - 1, 'month').format('YYYY-MM')">
                                {{ dayjs().add(index - 1, 'month').format('YYYY-MM') }}
                            </a-select-option>
                        </a-select>
                    </div>
                </template>
            </a-calendar>
            <div class="text-size14 er-font-medium er-my-6">{{ i18n.global.t('dialog.SelectedTime') }}: <span class="er-text-primary">{{ forms.time }}</span>
            </div>
            <div class="er-grid er-grid-cols-5 er-gap-3">
                <div @click="onChangeTime(time)" :key="time" v-for="time in timeArray"
                    :class="[forms.time === time ? 'er-bg-primary/75 er-text-white' : '', 'text-size12 er-font-medium er-border er-border-solid er-rounded-lg er-w-full er-border-border er-p-4 er-flex er-items-center er-flex-col er-cursor-pointer er-relative']">
                    {{ time }}
                </div>
            </div>
        </div>
        <div v-show="step === 3" class="er-py-8">
            <a-form layout="vertical" :model="forms" ref="formsRef" :rules="rules">
                <a-form-item :label="i18n.global.t('dialog.yourname')" name="username" required><a-input type="text"
                        v-model:value="forms.username" :placeholder="i18n.global.t('dialog.PleaseEnter')"/></a-form-item>
                <a-form-item :label="i18n.global.t('dialog.PhoneNumber')" name="phone" required><a-input type="tel" v-model:value="forms.phone"
                    :placeholder="i18n.global.t('dialog.PleaseEnter')"/></a-form-item>
                <a-form-item label="Email@:" name="email" required><a-input type="email" v-model:value="forms.email"
                        :placeholder="i18n.global.t('dialog.PleaseEnter')" /></a-form-item>
            </a-form>
        </div>
        <div v-show="step === 4" class="er-py-8 er-space-y-8">
            <a-descriptions :column="1" size="small" bordered>
                <a-descriptions-item label="E-Bike">
                    <div class="er-flex er-flex-col er-items-center er-justify-center">
                        <img width="150" style="max-width: 150px;"
                            :src="`${constans.E_BIKES[forms.ebike].img}&width=200`" alt="">
                        <span class="text-size16 er-font-bold er-my-4">{{ constans.E_BIKES[forms.ebike].name }}</span>
                    </div>
                </a-descriptions-item>
                <a-descriptions-item :label="i18n.global.t('dialog.DateTime')">{{ forms.date }} {{ forms.time }}</a-descriptions-item>
                <a-descriptions-item :label="i18n.global.t('dialog.YourName')">{{ forms.username }}</a-descriptions-item>
                <a-descriptions-item :label="i18n.global.t('dialog.Phone')">{{ forms.phone }}</a-descriptions-item>
                <a-descriptions-item label="Email">{{ forms.email }}</a-descriptions-item></a-descriptions>
            <a-descriptions :column="1" size="small" bordered>
                <template #title>
                    <div class="text-size14 er-font-medium">{{ i18n.global.t('dialog.StoreInfo') }}:</div>
                </template>
                <a-descriptions-item :label="i18n.global.t('dialog.StoreName')">{{ store.name }}</a-descriptions-item>
                <a-descriptions-item :label="i18n.global.t('dialog.StoreAddress')"><a class="!er-text-primary"
                        :href="`https://www.google.com/maps?q=${store.location.map(i => i.toFixed(4)).reverse().toString()}`"
                        target="_blank" rel="noopener noreferrer"> {{ store.address }}</a></a-descriptions-item>
            </a-descriptions>
        </div>
        <div class="er-flex er-justify-end er-space-x-4 er-w-full">
            <a-button v-if="step > 1 && step <= 3" @click="prev" :disabled="disabled">{{ i18n.global.t('dialog.prev') }}</a-button>
            <a-button v-if="step < 3"
                class="!er-flex er-items-center er-text-center er-justify-center next" type="primary"
                danger @click="next" :disabled="disabled"><span>{{ i18n.global.t('dialog.next') }}</span><svg xmlns="http://www.w3.org/2000/svg"
                    height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff">
                    <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                </svg></a-button>
            <a-button v-if="step === 3" type="primary" danger @click="submit" :loading="disabled">{{ i18n.global.t('dialog.submit') }}</a-button>
            <a-button v-if="step === 4" type="primary" @click="close" danger>{{ i18n.global.t('dialog.done') }}</a-button>
        </div>
    </div>
</template>

<script setup>
import { Button, DatePicker, Calendar, Select, SelectOption, Form, FormItem, Input, Descriptions, DescriptionsItem } from 'ant-design-vue'
import dayjs, { Dayjs } from 'dayjs';
import { ref, onMounted, watch, nextTick } from 'vue'
import constans from '@/constans.js'
import { rangeExclude, throttle } from '@/tools.js'
import { submitBookRide } from '@/fetch.js'
import i18n from '../language/index.js'
import 'dayjs/locale/de'

dayjs.locale(constans.SHOP_LOCALE)

const stepToTitle = [i18n.global.t('dialog.Step1'), i18n.global.t('dialog.Step2'), i18n.global.t('dialog.Step3'), i18n.global.t('dialog.Step4')]
const rules = {
    username: [
        {
            require: true,
        },
    ],
    phone: [
        {
            require: true,
            max: 20,
            pattern: /\d+/,
            message: i18n.global.t('dialog.Pleaseenter')
        },
    ],
    email: [
        {
            require: true,
            type: 'email'
        },
    ]
}

const props = defineProps({
    store: Object,
    close: Function,
    modal: Object
})

const disabled = ref(false)
const timeArray = ref([])
const step = ref(1)
const formsRef = ref(null)

function getNextOpenDay(businessHours, today = dayjs()) {
    const realToday = dayjs(); // 真实的今天
    if (today.isBefore(realToday, "day")) {
        today = realToday; // 确保 today 不能是过去的日期
    }

    let dayIndex = today.day(); // 获取今天是周几 (0=周日, 1=周一, ..., 6=周六)

    for (let i = 0; i < 7; i++) {
        const checkDay = (dayIndex + i) % 7; // 避免数组越界，循环一周
        if (businessHours[checkDay]) {
            return today.add(i, "day").format("YYYY-MM-DD"); // 找到最近的开放日并返回日期
        }
    }

    return today.format("YYYY-MM-DD"); // 如果一周内都没有营业时间
}

function calcuateTimes(date = dayjs()) {
    const current = dayjs(date)
    const range = props.store.businessHours[current.day()]

    let [start, end] = range.split('-')
    start = Number(start.split(':').shift())
    end = Number(end.split(':').shift())
    const arr = []

    for (let s = start; s < end; s++) {
        arr.push(current.hour(s).format('HH:mm'))
    }

    timeArray.value = arr

    return current.hour(start).format('HH:mm')
}

const forms = ref({
    ebike: props.store.availableSizes[0],
    date: getNextOpenDay(props.store.businessHours),
    time: calcuateTimes(getNextOpenDay(props.store.businessHours)),
    username: '',
    phone: '',
    email: ''
})


const prev = () => {
    step.value--
}

const next = () => {
    step.value++
}

onMounted(() => {
    nextTick(() => {
        props.modal.update({ title: stepToTitle[step.value - 1] })
    })
})

const onChangeEbike = v => {
    forms.value.ebike = v
}

const disabledDate = v => {
    return v.isBefore(dayjs(), 'day') || v.isAfter(dayjs().add(2, 'month')) || Boolean(!props.store.businessHours[v.day()])
}

const onChangeDate = v => {
    forms.value.time = calcuateTimes(v)
}

const onChangeTime = v => {
    forms.value.time = v
}

const submit = async () => {
    try {
        const r = await formsRef.value.validate()
        disabled.value = true

        submitBookRide(forms.value, props.store)
        disabled.value = false
        step.value++
    } catch (error) {
        console.log('invalired', error)
    } finally {
        
    }
}

watch(() => step.value, v => {
    props.modal.update({ title: stepToTitle[v - 1] })
})
</script>