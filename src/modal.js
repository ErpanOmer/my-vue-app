import {
    createVNode,
    render
} from "vue";
import {
    Modal
} from "ant-design-vue";
import BookNow from '@/components/BookNow.vue'

console.log(Modal)

export default function (store) {
    return new Promise(resolve => {
        const close = v => {
            console.log(v)
            modal.destroy()
        }

        const modal = Modal.info()

        modal.update({
            content: createVNode(BookNow, { store, close, modal }),
            icon: null,
            footer: null,
            wrapClassName: 'modal',
            title: 'Book a Test Ride',
            maskClosable: true,
            centered: true,
        })
    })
}