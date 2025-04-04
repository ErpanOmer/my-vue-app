import {
    createVNode,
    render
} from "vue";
import {
    Modal
} from "ant-design-vue";
import BookNow from '@/components/BookNow.vue'
import constans from '@/constans.js'

// 添加内联样式
function addInlineStyles(css) {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.id = 'dynamicInlineStyles'; // 为了方便删除，给它一个 id
    style.innerHTML = css;
    document.head.appendChild(style);
}

// 删除内联样式
function removeInlineStyles() {
    const style = document.getElementById('dynamicInlineStyles');
    if (style) {
        document.head.removeChild(style);
    }
}

export default function (store, event) {
    return new Promise(resolve => {
        const close = v => {
            modal.destroy()
            removeInlineStyles();
        }

        console.log(constans.visibleHeight, event)

        const css = `
            body .modal .ant-modal {
                transform: translateY(${event.pageY < constans.visibleHeight ? '-50%' : '-100%'}) !important;
                top: ${event.pageY}px !important;
            }
        `;

        constans.IS_IFRAME && constans.IS_MOBILE && addInlineStyles(css);

        const modal = Modal.info()

        modal.update({
            content: createVNode(BookNow, { store, close, modal }),
            icon: null,
            footer: null,
            wrapClassName: 'modal',
            title: 'Book a Test Ride',
            maskClosable: true,
            centered: !constans.IS_IFRAME || !constans.IS_MOBILE
        })
    })
}