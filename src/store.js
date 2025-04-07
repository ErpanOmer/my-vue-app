import {
    createPinia, defineStore
} from 'pinia'
import constans from '@/constans.js'
import { ref } from "vue";

export const useStore = defineStore('store', () => {
    // 表单
    const formState = ref({
        center: constans.DEFAULT_CENTER,
        search: '',
        miles: constans.DEFAULT_RADIUS,
        service: [],
        ebikes: [],
        storeList: []
    })

    const map = ref(null)


    return { formState, map }
});


export default createPinia(useStore);